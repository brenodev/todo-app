import React from "react";

import Cond from "./cond";

const IconButton = props => (
  <Cond test={!props.hide}>
    <button className={"btn btn-" + props.style} onClick={props.onClick}>
      <i className={"fa fa-" + props.icon} />
    </button>
  </Cond>
);

export default IconButton;
