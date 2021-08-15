import React, { useState, useEffect } from 'react'
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  //console.log('input', input)

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      //console.log(snapshot.docs.map(doc => doc.data().task));
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, task: doc.data().task })))
    })
  }, [input])

  function addTodo(e) {
    //console.log("function")
    e.preventDefault();
    db.collection('todos').add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");  // clear the input after addtodo button
  }
  return (
    <div className="App">
      <h1>My Todo App</h1>

      <form>
        <FormControl>
          <InputLabel>Type your task..</InputLabel>
          <Input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>&nbsp;&nbsp;
        <Button type="submit" onClick={addTodo} disabled={!input} variant="contained" color="primary">
          Add Task
        </Button>

      </form>


      <ul>
        {
          todos.map(todo => (
            <Todo task={todo} />

          ))
        }
      </ul>
    </div>
  );
}

export default App;
