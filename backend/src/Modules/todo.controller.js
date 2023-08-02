const toDoModel = require("../Model/todo.model");

const getToDo = async (req, res) => {
  try {
    const toDo = await toDoModel.find();
    res.send(toDo);
  } catch (error) {
    console.log(error);
  }
};

const saveToDo = async (req, res) => {
  try {
    const { text } = req.body;
    toDoModel.create({ text }).then((data) => {
      console.log("Added successfully");
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
};

const updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  try {
    const updatedToDo = await toDoModel
      .findByIdAndUpdate(_id, { text })
      .then(() => res.set(201).send("Updated successfully"));
  } catch (error) {
    console.log(error);
  }
};

const deleteToDo = async (req, res) => {
  try {
    const { _id } = req.body;
    toDoModel
      .findByIdAndDelete(_id)
      .then(() => res.set(201).send("Deleted successfully"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getToDo, saveToDo, updateToDo, deleteToDo };
