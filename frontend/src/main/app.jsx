import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

//STYLES
import "../styles/custom.css";

// Custom Components
import Menu from "../template/Menu";
import Routes from "./_routes";

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Routes />
    </div>
  );
};

export default App;
