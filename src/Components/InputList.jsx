import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";

const InputList = ({ todos, setTodos, setTodo, inputRef }) => {
  const [filter, setFilter] = useState("All");

  const handleDelete = (index) => {
    const filteredList = todos.filter((todo) => todo.id !== index);

    setTodos(filteredList);
  };


  const handleUpdate = (itemTOUpdate) => {
    inputRef.current.focus();
    setTodo(itemTOUpdate);
    const updatedList = todos.filter((item) => item.title !== itemTOUpdate);
    setTodos(updatedList);
  };
  const handleCheckBox = (id) => {
    const checkedItem = todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      return todo;
    });
    setTodos(checkedItem);
  };

  const handleCompletedTask = () => {
    const completedTask = todos.filter((todo) => !todo.completed);
    if (!todos.completed) {
      setTodos(completedTask);
    }
  };

  const handleFilter = () => {
    if (filter === "Todo") {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === "Done") {
      return todos.filter((todo) => todo.completed);
    } else {
      return todos;
    }
  };

  return (
    <div>
      <div className="list_heading">
        <h1>TodoList</h1>
      </div>
      <div className="btn_group">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Done")}>Done</button>
        <button onClick={() => setFilter("Todo")}>Todo</button>
      </div>
      <ul>
        {todos &&
          handleFilter().map((todo) => (
            <div
              className="single_todo_row"
              key={todo.id}
              style={todo.completed ? { textDecoration: "line-through" } : null}
            >
              {todo.title}

              <div className="icons">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCheckBox(todo.id)}
                />
                <AiFillDelete onClick={() => handleDelete(todo.id)} />
                <BiSolidPencil onClick={() => handleUpdate(todo.title)} />
              </div>
            </div>
          ))}
      </ul>
      <div className="delete_btns">
        <button onClick={handleCompletedTask}>Delete Done Tasks</button>
        <button onClick={() => setTodos([])}>Delete All Tasks</button>
      </div>
    </div>
  );
};

export default InputList;
