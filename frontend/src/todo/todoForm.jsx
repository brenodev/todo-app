import React from "react";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";

const TodoForm = props => (
  <div role="form" clasName="todoForm">
    <Grid cols="12 9 10">
      <input
        type="text"
        id="description"
        className="form-control"
        placeholder="Adicione uma tarefa"
        value={props.description}
        onChange={props.handleChange}
      />
    </Grid>
    <Grid cols="2 3 2">
      <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
    </Grid>
  </div>
);
export default TodoForm;
