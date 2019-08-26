import React from "react";
// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// CUSTOM COMPONENTS
import IconButton from "../template/iconButton";

// ACTIONS
import { markAsDone, markAsPending } from "./todoActions";

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || [];

    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? "markAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            hide={todo.done}
            style="success"
            icon="check"
            onClick={() => props.markAsDone(todo)}
          />
          <IconButton
            hide={!todo.done}
            style="warning"
            icon="undo"
            onClick={() => props.markAsPending(todo)}
          />
          <IconButton
            hide={!todo.done}
            style="danger"
            icon="trash-o"
            onClick={() => props.handleRemove(todo)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  list: state.todo.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAsDone, markAsPending }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
