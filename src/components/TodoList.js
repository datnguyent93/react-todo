import React from "react";
//import components
import Todo from "./Todo";

// class to store todos
const TodoList = ({ todos, setTodos, filterdTodos }) => {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {filterdTodos.map((todo) => (
              <Todo 
                setTodos={setTodos} 
                todos={todos}
                key={todo.id}
                todo={todo} 
                text={todo.text}
              />
          ))}
        </ul>
      </div>
    );
};

// exported under the name of TodoList
export default TodoList;