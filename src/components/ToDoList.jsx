import React, { useState, useEffect } from 'react';
import ToDo from './ToDo';
import ToDoCount from './ToDoCount';
import ToDoForm from './ToDoForm';

function ToDoList() {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      if (localStorage.getItem("localTodos")) {
        const storedList = JSON.parse(localStorage.getItem("localTodos"));
        setTodos(storedList);
      }
    }, []);
  
    const addTodo = (todo) => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
      localStorage.setItem("localTodos", JSON.stringify([todo, ...todos]));
      const newTodos = [todo, ...todos];
      setTodos(newTodos);
    };
  
    const completeTodo = (id) => {
      let updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  
    const removeTodo = (id) => {
      const deleted = [...todos].filter((todo) => todo.id !== id);
      setTodos(deleted);
      localStorage.setItem("localTodos", JSON.stringify(deleted));
    };
  
    const clearTodo = () => {
      setTodos([]);
      localStorage.removeItem("localTodos");
    };
  
    return (
      <div>
        <h1>What are your current To Do tasks for today?</h1>
        <ToDoForm onSubmit={addTodo} clearTodo={clearTodo} />
        <ToDoCount todos={todos} />
        <ToDo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
      </div>
    );
  }
  
  export default ToDoList;