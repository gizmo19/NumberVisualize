import React from "react";

const NumberWriter = (props) => {
  const height = props.element;
  // const inputValue = props.inputValue;
  // const inputVal = parseInt(inputValue);
  let marginLeft = 20;
  let marginRight = 20;
  let width = 30;

  // switch (inputVal) {
  //   case inputVal <= 10 && inputVal > 0:
  //     console.log("0-10" + inputVal);
  //     break;
  //   case inputVal > 10 && inputVal <= 100:
  //     console.log("11-100" + inputVal);
  //     break;
  //   case inputVal > 100 && inputVal <= 1000:
  //     console.log("101-1000" + inputVal);
  //     break;
  //   default:
  //     console.log("default" + inputVal);
  // }

  // if (inputValue < 10 && inputValue > 0) {
  //   marginLeft = 20;
  //   marginRight = 20;
  //   width = 30;
  // } else if (inputValue > 10 && inputValue < 100) {
  //   marginLeft = 10;
  //   marginRight = 10;
  //   width = 10;
  // } else if (inputValue > 100 && inputValue < 1000) {
  //   marginLeft = 5;
  //   marginRight = 5;
  //   width = 5;
  // } else {
  //   marginLeft = 1;
  //   marginRight = 1;
  //   width = 5;
  // }

  return (
    <div className="columns">
      <div
        className="column"
        key={props.element}
        style={{
          height: height * 100,
          width: width,
          marginLeft: marginLeft,
          marginRight: marginRight,
        }}
      >
        <h2>{props.element}</h2>
      </div>
    </div>
  );
};

export default NumberWriter;
