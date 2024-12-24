import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList(props) {  
    const {todos} = props; // destructuring the props object to get the todos array
    return (
    <ul className="main">
        {todos.map((todo, index) => { // map function is used to iterate over the array 
            // arrow function is used to return the JSX
            return (
                <TodoCard {...props} key={index} index = {index}>
                    <p>{todo}</p>
                </TodoCard>
            );

        })}    
    </ul>
  )
}
