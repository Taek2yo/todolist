import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {          //todos와 setTodos를 부모컴퍼넌트에게서 받았음

  // todoId는 클릭한 객체를 말함 
  const onDeleteHanlder = (todoId) => {         
    const newTodos = todos.filter((todo) => {   // todos 배열에서 todo.id가 피라미터와(todoId) 일치하지 않는 요소만 추출해서 새로운 배열을 만듦. (= todo.id가 todoId인 것을 제거하고 나머지만 배열에 남는다.
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };

  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {  //id 비교 => 넘겨 받은 id 와 기존 todo list 에 있는 id 와 비교.                                    
      if (todo.id === todoId) {             //id 가 같다면 => { …todo } 를 이용하여 기존 객체를 복사.  기존 객체의 isDone 을 한번 뒤집어 취소로 변경됨.

        return { 
          ...todo, isDone: !todo.isDone,    //기존 객체의 isDone 을 한번 뒤집어 취소로 변경
        };                                  // 
      } else {
        return { ...todo };                 //{…todo}는 {todo}를 얕은복사해서 기존 {todo}에 변화가 가지 않도록 함. 그냥 {todo}로 썼을 때 완료, 삭제 버튼을 누르면 다른 카드까지 같이 움직임. 
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
