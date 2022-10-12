import React, { useState } from "react";
import NumberWriter from "./NumberWriter";

const Main = () => {
  const [elements, setElements] = useState([]);
  const [inputValue, setInputValue] = useState(10);
  const [newElements, setNewElements] = useState([])

  const inputHandler = (event) => {
    const newValue = parseInt(event.target.value);
    setInputValue(newValue);
  };

  const SortingNumbers = () => {
    const l = elements.length;
    let historyElements = [[...elements]]

    for(let i = 0; i < l-1; i++) {
      for(let j = 0; j < l-i-1; j++) {
        if(elements[j] > elements[j+1]) {
          let swap = elements[j]
          elements[j] = elements[j+1]
          elements[j+1] = swap
          historyElements.push([...elements])
        }
      }
    }
    
    const historyLength = historyElements.length
    setNewElements(historyElements[historyLength-1])
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
      <button onClick={SortingNumbers.bind(this)}>Sort</button>
      {renderedElements}
    </div>
  );
};

export default Main;
