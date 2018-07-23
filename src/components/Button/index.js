import React from "react";
import classnames from "classnames";
import "./style.css";

export default ({ children, handleClick, className }) => (
  <button className={classnames("btn", className)} onClick={handleClick}>
    {children}
  </button>
);
