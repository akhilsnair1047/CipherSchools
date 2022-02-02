import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";

function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      {todo.text}

      <div className="icons">
        
        <AiOutlineCheckSquare key={todo.id} onClick={() => completeTodo(todo.id)} className="complete-item" />

        <AiOutlineCloseSquare
          onClick={() => removeTodo(todo.id)}
          className="delete-item"
        />
      </div>
    </div>
  ));
}

export default Todo;
