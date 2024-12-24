import { useState } from "react";

// components are like custom tags used in HTML
export default function TodoInput(props) {
    const {addTodo, todoValue, setTodoValue} = props;
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value);
            }}placeholder="Enter todo..."/>
            <button onClick={() => {
                addTodo(todoValue);
            }}>Add</button>
        </header>
    );
};
