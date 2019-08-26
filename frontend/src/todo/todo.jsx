import React from "react";

// CUSTOM COMPONENTS
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const Todo = () => {
  return (
    <div className="container">
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
