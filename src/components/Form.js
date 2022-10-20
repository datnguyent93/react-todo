import React from "react";
import App from "../App";


const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    // cin inputs, parse to function inputTextHandler()
    const inputTextHandler = (e) => {
      setInputText(e.target.value);
    };
    
    // cin inputs, parse to function TodoHandler()
    const submitTodoHandler = (e) => {
      e.preventDefault();
      // function setTodos() to create new State with unique id
      setTodos([
        ...todos, 
        { text: inputText, completed: false, id: Math.random()* 1000},
      ]);
      // empty field after create new object
      setInputText("");
    };

    // apply filter on the list base on status
    const statusHandler = (e) => {
      setStatus(e.target.value);
    };

    return (
      // update everytime input changed then parse to inputTextHandler()
      // when click on "+" button, submitTodoHandler() get value and create new State/object
    <form>
      <input 
          value={inputText} 
          onChange={inputTextHandler} 
          type="text"
          className="todo-input" 
        />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
};

// export under the name of Form
export default Form;