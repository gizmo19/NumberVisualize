import React, { useState } from "react";
import NumberWriter from "./NumberWriter";
import BubbleSort from "./BubbleSort";

const Main = () => {
  const [elements, setElements] = useState([]);
  const [inputValue, setInputValue] = useState(10);
  const [newElements, setNewElements] = useState([]);

  const inputValueHandler = (event) => {
    const newValue = parseInt(event.target.value);
    setInputValue(newValue);
    
  };

  const numberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function arrayPusher() {
    const arr = [];
    for (let i = 0; i < inputValue; i++) {
      arr.push(numberGenerator(1, 10));
    }
    setElements(arr);
  }

  const renderedElements = elements.map((e) => {
    return <NumberWriter inputVal={inputValue} element={e} />;
  });

  const handleClick = (event) => {
    let bubbleSort = new BubbleSort(elements);
    bubbleSort.sortingElements(); 
  }

  return (
    <div>
      Number generator
      <input
        type="number"
        value={inputValue}
        onChange={inputValueHandler.bind(this)}
        className="inputNumber"
      ></input>
      <button onClick={arrayPusher.bind(this)}>Generate</button>
      <button onClick={handleClick.bind(this)}>Sort</button>
      {renderedElements}
    </div>
  );
};

export default Main;
