import React from "react";

const H_opt = (props) => {
  return (
    <div className="h-opt" onClick={props.onClick}>
      <h3>{props.title}</h3>
    </div>
  );
};

export default H_opt;
