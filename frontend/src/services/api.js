import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:5001/api",
});

// export const getToDo = (setToDo) => {
//   return httpClient
//     .get("/")
//     .then((data) => {
//       console.log("Data", data.data);
//       setToDo(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const getToDo = async (setToDo) => {
  return await httpClient
    .get("/")
    .then((res) => {
      // console.log("Data", res.data);
      setToDo(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addToDo = async (text, setText, setToDo) => {
  return await httpClient
    .post("/save", { text })
    .then(() => {
      // console.log(res.data);
      setText("");
      getToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export const updateToDo = async (
  toDoId,
  text,
  setToDo,
  setText,
  setIsUpdate
) => {
  return await httpClient
    .post("/update", { _id: toDoId, text })
    .then((res) => {
      setText("");
      setIsUpdate(false);
      getToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export const deleteToDo = async (toDoId, setToDo) => {
  return await httpClient
    .post("/delete", { _id: toDoId })
    .then((res) => {
      console.log(res.data);
      getToDo(setToDo);
    })
    .catch((err) => console.log(err));
};
