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
            focused: false,
          });
        } else {
          animations.push({
            el1Index: j,
            el2Index: j + 1,
            el1: elements[j],
            el2: elements[j + 1],
            swap: false,
            focused: false,
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
        barOneStyle.focused = true;
        barTwoStyle.focused = true;
        if (barOneStyle.focused && barTwoStyle.focused) {
          barOneStyle.backgroundColor = "red";
          barTwoStyle.backgroundColor = "red";
          if (frame.swap) {
            //zmienianie wysokosci, i cyferki wyswietlanej
            // barOneStyle.height = barTwoStyle.element * 100;
            // barTwoStyle.height = barOneStyle.element * 100;
          } else {
          }

          // do poprawy kolorowanie
          if (i >= 1) {
            let previousBarStyle = bars[frame.el1Index].style;
            console.log(frame.el1Index);
            previousBarStyle.backgroundColor = "blue";
          }
        }
      }, i * 1000);
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
      ></input>
      <button onClick={numberGenerator.bind(this)}>Generate</button>
      <button onClick={SortingNumbers.bind(this)}>Sort</button>
      {renderedElements}
    </div>
  );
};

export default Main;
