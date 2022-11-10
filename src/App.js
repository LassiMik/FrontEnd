import Todotable from './components/Todolist';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
      setTodo({...todo, [event.target.name]: event.taget.value});
  }

  const addTodo = (event) => {
      event.preventDefault()
      setTodos([...todos, todo])
  }


  return (
      <div className="App">
          <form onSubmit={addTodo}>
              <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
              <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
              <input type="submit" value="Add"/>
          </form>
          <Todotable todos={todos}/>
      </div>
  )
}

export default App;
