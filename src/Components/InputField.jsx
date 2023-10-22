import React from "react";
import "../App.css";

const InputField = ({ todo, setTodo, setTodos, inputRef }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Math.random(), title: todo, completed: false };
    setTodos((PrevValue) => [...PrevValue, newTodo]);
    setTodo("")
 inputRef.current.focus()
  };
  return (
    <>
      <h1 className="input_title">Todo Input</h1>
      <form className="input_main" onSubmit={handleSubmit}>
        <input
        ref={inputRef}
          className="input"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
        />
        <button type="submit" className="submit_btn">
          Add new Task
        </button>
      </form>
    </>
  );
};

export default InputField;
