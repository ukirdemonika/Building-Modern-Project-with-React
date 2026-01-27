/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import ToDoList from './toDoList'
import { useEffect } from 'react'
import { loadTodos } from './thunk'
import { useDispatch } from 'react-redux'

function App() {
  // Redux dispatch to load todos on component load
  const dispatch = useDispatch();

  // Load todos when the component mounts
  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <>
      <ToDoList />
    </>
  )
}

export default App;
