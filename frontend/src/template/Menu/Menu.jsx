import React from 'react'

const Menu = props => (
  <nav className="navbar navbar-inverse bg-dark">
    <div className="container">
      <div className="navbar-header">
        <a href="#" className="navbar-brand">
          <i className="fa fa-calendar-check-o" />TodoApp
        </a>
      </div>

      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><a href="#/todos">Tarefas</a></li>
          <li><a href="#about">Sobre</a></li>
        </ul>
      </div>
      
    </div>
  </nav>
)

export default Menu