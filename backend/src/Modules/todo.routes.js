const router = require("express").Router();
const toDoController = require("./todo.controller");

router.get("/", toDoController.getToDo);
router.post("/save", toDoController.saveToDo);
router.post("/update", toDoController.updateToDo);
router.post("/delete", toDoController.deleteToDo);

module.exports = router;
