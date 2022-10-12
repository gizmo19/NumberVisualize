import React from "react";

const NumberWriter = (props) => {
  const height = props.element;
  console.log(props.element);
  return (
    <div className="columns">
      <div
        className="column"
        key={props.element}
        style={{ height: height * 100 }}
      >
        <h2>{props.element}</h2>
      </div>
    </div>
  );
};

export default NumberWriter;
