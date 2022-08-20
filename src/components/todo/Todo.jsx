import React from "react";
import {Link} from "react-router-dom"
import "./style.css";

function Todo({ todo, onDeleteHanlder, onEditHandler }) {
  return (
    <div className="todo-container">
      <Link to="/detail" className="LearnMore">Learn More..</Link>
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-del"
          onClick={() => onDeleteHanlder(todo.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-done"
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
