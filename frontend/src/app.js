'use strict'
import React from 'react';

import './app.css'
import Todo from './components/Todo/Todo';
import About from './components/About/About'

const App = props => (
  <div className='container'>
    <Todo />
    <About />
  </div>

)

export default App