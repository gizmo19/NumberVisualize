import React, { useState } from "react";
import ElementRenderer from "./ElementRenderer";
import BubbleSort from "./BubbleSort";
import "../index.css";
import RandomArrayGenerator from "./RandomArrayGenerator";
import AnimateSort from "./AnimateSort";
import AnimationsBuilder from "./AnimationsBuilder";

const Main = () => {
  const [elements, setElements] = useState([]);
  const [howManyNumbersValue, sethowManyNumbersValue] = useState(10);
  const [
    rangeOfGeneratedNumbersValue,
    setrangeOfGeneratedNumbersValue,
  ] = useState(10);
  const [newElements, setNewElements] = useState([]);

  const howManyNumbersValueHandler = (event) => {
    let howManyNumbers = parseInt(event.target.value);
    if (howManyNumbers > 100) {
      howManyNumbers = 100;
    }
    sethowManyNumbersValue(howManyNumbers);
  };

  const rangeOfGeneratedNumbers = (event) => {
    let rangeOfNumbers = parseInt(event.target.value);
    if (rangeOfNumbers > 50) {
      rangeOfNumbers = 50;
    }
    setrangeOfGeneratedNumbersValue(rangeOfNumbers);
  };

  function arrayCreator() {
    let arr;
    let numbersCount = howManyNumbersValue;
    let max = rangeOfGeneratedNumbersValue;
    let arrayGenerator = new RandomArrayGenerator(numbersCount, max);
    arr = arrayGenerator.generateArray();
    setElements(arr);
  }

  const renderedElements = elements.map((e) => {
    return (
      <ElementRenderer
        numbersCount={howManyNumbersValue}
        numbersRange={rangeOfGeneratedNumbersValue}
        element={e}
      />
    );
  });

  const handleClick = (event) => {
    let option = document.getElementById("speedOption");
    let speedOption = option.value;
    let buildAnimation = new AnimationsBuilder();
    let bubbleSort = new BubbleSort(elements, buildAnimation);
    bubbleSort.sort();
    let animate = new AnimateSort(speedOption, buildAnimation)
    animate.animate();
  };

  return (
    <div>
      <div className="leftPanel">
        <p>Write how many numbers to generate:</p>
        <input
          type="number"
          value={howManyNumbersValue}
          onChange={howManyNumbersValueHandler.bind(this)}
          className="howManyNumberInput"
          maxLength={3}
        ></input>
        <button onClick={arrayCreator.bind(this)}>Generate</button>
        <p>Write the range of numbers</p>
        <input
          type="number"
          value={rangeOfGeneratedNumbersValue}
          onChange={rangeOfGeneratedNumbers.bind(this)}
          className="numberRangeInput"
          maxLength={3}
        ></input>
        <p>Choose the sort speed</p>
        <select id="speedOption">
          <option value="slow">Slow</option>
          <option value="normal">Normal</option>
          <option value="fast">Fast</option>
          <option value="veryFast">Very Fast</option>
          <option value="iamspeed">I am speed</option>
        </select>
        <button onClick={handleClick.bind(this)}>Sort</button>
      </div>
      <div className="columnDivHolder">{renderedElements}</div>
    </div>
  );
};

export default Main;
