import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useState, useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([]) // useState hook is used to create a state variable
  const [todoValue, setTodoValue] = useState('');
  
  function persisData(newList) {
  localStorage.setItem('todos', JSON.stringify({todos: newList}));
  } 

  function addTodo(newTodo) {
    const newTodoList = [...todos, newTodo] // spread operator is used to create a new array
    persisData(newTodoList);
    setTodos(newTodoList) // setTodos is used to update the state variable
  }

  function delTodo(index) {
    const newTodoList = todos.filter((todo, i) => i !== index) // filter function is used to create a new array
    persisData(newTodoList);
    setTodos(newTodoList) // setTodos is used to update the state variable
  }

  function editTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    delTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, [])

  return (  // JSX is returned from the function
    <>
      <TodoInput todoValue={todoValue} setTodoValue = {setTodoValue} addTodo = {addTodo}/>
      <TodoList editTodo={editTodo}deleteTodos = {delTodo} todos={todos}/>
    </>
  )
}

export default App
