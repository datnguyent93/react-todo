// import libraries
import React, { useState, useEffect } from "react";
import './App.css';

//importing Components - like importing header files
import Form from './components/Form';
import TodoList from "./components/TodoList";

// main()
function App() {
  //run once at start
  useEffect(() => {
    getLocalTodos();
  }, [])

  // call 
  const [inputText, setInputText] = useState("");
  // update array of States
  const [todos, setTodos] = useState([]);
  // filter
  const [status, setStatus] = useState('all');
  const [filterdTodos, setFilterTodos] = useState([]);

   // UseEffect, refresh every time new action
   useEffect(() => {
    filterHandler();
  }, [todos, status]); 

  // Functions & event
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    // cout as heading style #1
    // call function Form with params: inputText, todos, setTodos, setInputText
    <div className="App">
      <header>
        <h1>Dat's todo list</h1> 
      </header>
      <Form 
        inputText = {inputText}
        todos = {todos} 
        setTodos = {setTodos} 
        setInputText = {setInputText}
        setStatus = {setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} filterdTodos = {filterdTodos} />
    </div>
  );
}

export default App;
