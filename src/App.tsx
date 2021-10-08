import React, {ChangeEvent, FC, useState} from 'react'
import {ITask} from './interfaces/Task'

import './App.css'
import TodoTask from './components/TodoTask';
import TodoList from './components/TodoList';

const App:FC = () => {
  return (
    <div className="App">
      <div className="header">
        <TodoList/>
      </div>
    </div>
  )
}

export default App
