import React, { useState } from "react";

const NumberWriter = (props) => {
  const height = props.element;

  return (
    <div className="columns">
      <div
        className="column"
        key={props.element}
        style={{ height: height * 100, width: 30 }}
      >
        {console.log(document.getElementsByClassName('inputValue'))}
        <h2>{props.element}</h2>
      </div>
    </div>
  );
};

export default NumberWriter;
