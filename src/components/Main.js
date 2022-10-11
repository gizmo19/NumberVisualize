import React, { useState } from "react";
import NumberWriter from "./NumberWriter";

const Main = () => {
  const [elements, setElements] = useState([]);
  const [inputValue, setInputValue] = useState(10);
  const [num, setNum] = useState(0);

  const inputHandler = (event) => {
    const newValue = parseInt(event.target.value);
    setInputValue(newValue);
  };

  const randomHandler = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const numberGenerator = () => {
    const arr = [];
    for (let i = 0; i < inputValue; i++) {
      arr.push(randomHandler(1, 10));
    }
    setElements(arr);
  };

  const renderedElements = elements.map((e) => {
    return (
        <NumberWriter element={e}/>
    )
  })

  return (
    <div>
      Number generator
      <input
        type="number"
        value={inputValue}
        onChange={inputHandler.bind(this)}
      ></input>
      <button onClick={numberGenerator.bind(this)}>Generate</button>
      {renderedElements}
    </div>
  );
};

export default Main;
