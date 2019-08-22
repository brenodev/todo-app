import React from "react";

const Cond = props => {
  if (props.test) {
    return props.children;
  } else {
    return false;
  }
};

export default Cond;
