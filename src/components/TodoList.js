import React from "react";
import "./TodoList.css";

export default function TodoList(props) {
  return (
    <div>
      <li className="list-item">{props.item}</li>
    </div>
  );
}
