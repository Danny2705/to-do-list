import { useEffect, useState } from "react";
import "./App.css";
import ToDoList from "./component/ToDoList";
import { addToDo, getToDo, updateToDo, deleteToDo } from "./services/api";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [toDoId, setToDoId] = useState("");

  const updateMode = (_id, text) => {
    setIsUpdate(true);
    setText(text);
    setToDoId(_id);
  };

  useEffect(() => {
    getToDo(setToDo);
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <h1>To Do MERN Application</h1>

        <div className='top'>
          <input
            type='text'
            placeholder='Enter your task'
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />

          <button
            onClick={
              isUpdate
                ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdate)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdate ? "Update Task" : "Add Task"}
          </button>
        </div>

        <div className='list'>
          {toDo.length > 0 ? (
            toDo.map((item) => (
              <ToDoList
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteMode={() => deleteToDo(item._id, setToDo)}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
