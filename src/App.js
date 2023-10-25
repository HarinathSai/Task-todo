import React, { useRef, useState } from "react";
import InputField from "./Components/InputField";
import InputList from "./Components/InputList";

const App = () => {
  const listArr = [
    { id: "2", title: "Hi", completed: false },
    { id: "1", title: "Hello", completed: false },
    { id: "3", title: "Bye", completed: false },
  ];

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(listArr);

  const inputRef = useRef();
  return (
    <>
      <div className='app_main'>
        <InputField
          todo={todo}
          setTodo={setTodo}
          setTodos={setTodos}
          inputRef={inputRef}
        />
        <InputList
          todos={todos}
          setTodo={setTodo}
          todo={todo}
          setTodos={setTodos}
          inputRef={inputRef}
        />
      </div>
    </>
  );
};

export default App;
