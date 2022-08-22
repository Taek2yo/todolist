import React, { useState } from "react";
import "./style.css";

let number = 3;
function Form({ setTodos, todos }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };


  const [todo, setTodo] = useState(initialState);       // intialState의 상태가 컴포넌트 내부에서 바뀔수 있음.
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  
  
  //submitHandler -> 유저가 폼 전송을 시도할 때, 발생 오로지 <form>요소에만 바인딩 가능
  const onSubmitHandler = (event) => {
    event.preventDefault();           //form 기능에선 submit을 하면, 자동으로 페이지 렌더링하면서 정보가 날아감 -> 이를 방지   
    setTodos([...todos, { ...todo, id: number }]);    // todos의 요소에 todo를 새로이 추가하고 id 값 부여
    setTodo(initialState);
    number++;
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
          required
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"                     // ES6 object-shorthand
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
