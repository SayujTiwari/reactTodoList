import React from 'react'

export default function TodoCard(props) {
    const {children, deleteTodos, index, editTodo} = props;

  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={() => {
                deleteTodos(index);
            }}>
                <i className="fa-solid fa-trash-can"></i>
            </button>
            <button onClick={() => {
                editTodo(index);
            }}>
                <i className="fa-solid fa-pen-nib"></i>
            </button>
        </div>
    </li>
  )
}
