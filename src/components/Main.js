import React, { useState } from "react";
import NumberWriter from "./NumberWriter";

const Main = () => {
  const [elements, setElements] = useState([]);
  const [inputValue, setInputValue] = useState(10);
  const [newElements, setNewElements] = useState([]);

  const inputHandler = (event) => {
    const newValue = parseInt(event.target.value);
    setInputValue(newValue);
  };

  const SortingNumbers = () => {
    const l = elements.length;
    let historyElements = [[...elements]];

    let animations = [];

    for (let i = 0; i < l - 1; i++) {
      for (let j = 0; j < l - i - 1; j++) {
        if (elements[j] > elements[j + 1]) {
          let swap = elements[j];
          elements[j] = elements[j + 1];
          elements[j + 1] = swap;
          historyElements.push([...elements]);

          animations.push({
            el1Index: j,
            el2Index: j + 1,
            el1: elements[j],
            el2: elements[j + 1],
            swap: true,
            color: "red",
          });
          animations.push({
            el1Index: j,
            el2Index: j + 1,
            el1: elements[j],
            el2: elements[j + 1],
            swap: false,
            color: "blue",
          });
        } else {
          animations.push({
            el1Index: j,
            el2Index: j + 1,
            el1: elements[j],
            el2: elements[j + 1],
            swap: false,
            color: "red",
          });
          animations.push({
            el1Index: j,
            el2Index: j + 1,
            el1: elements[j],
            el2: elements[j + 1],
            swap: false,
            color: "blue",
          });
        }
      }
    }

    const bars = document.getElementsByClassName("column");
    for (let i = 0; i < animations.length; i++) {
      let frame = animations[i];
      // console.log(frame);
      let barOneStyle = bars[frame.el1Index].style;
      let barTwoStyle = bars[frame.el2Index].style;

      setTimeout(() => {
        barOneStyle.backgroundColor = animations[i].color;
        barTwoStyle.backgroundColor = animations[i].color;
        if (frame.swap) {
          console.log("zmienianie wysokosci i cyfry");
          let el1Height = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = el1Height;
          let el1Var = bars[frame.el1Index].innerHTML;
          bars[frame.el1Index].innerHTML = bars[frame.el2Index].innerHTML;
          bars[frame.el2Index].innerHTML = el1Var;
        } else {
          console.log("brak zmiany");
        }
        // do poprawy kolorowanie
      }, i * 50);
    }

    // const historyLength = historyElements.length
    // setNewElements(historyElements[historyLength-1])
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
    return <NumberWriter element={e} />;
  });

  return (
    <div>
      Number generator
      <input
        type="number"
        value={inputValue}
        onChange={inputHandler.bind(this)}
        className="inputNumber"
      ></input>
      <button onClick={numberGenerator.bind(this)}>Generate</button>
      <button onClick={SortingNumbers.bind(this)}>Sort</button>
      {renderedElements}
    </div>
  );
};

export default Main;
