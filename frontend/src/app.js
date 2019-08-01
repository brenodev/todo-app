import React from 'react';
import './app.css'
import Todo from './components/Todo/Todo';
import About from './components/About/About'
import Menu from './template/Menu/Menu';

const App = props => (
  <div className='container'>
    <Menu/>
    <Todo />
    <About />
  </div>

)

export default App