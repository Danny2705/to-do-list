import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const ToDoList = ({ text, updateMode, deleteMode }) => {
  return (
    <div className='list-container'>
      <div className='text'>{text}</div>

      <div className='icons'>
        <BiEdit onClick={updateMode} />
        <AiOutlineDelete onClick={deleteMode} />
      </div>
    </div>
  );
};

export default ToDoList;
