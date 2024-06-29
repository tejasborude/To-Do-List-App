import React, { useState } from "react";
import "./App.css";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";


function App() {
  let [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  }


  return (
    <div className="main-container">
      <div className="center-container">
        <Todoinput addList={addList} />

        <h1 className="app-heading">TODO</h1>
        <hr></hr>
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
