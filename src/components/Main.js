import React, { useState } from "react";
import ElementRenderer from "./ElementRenderer";
import BubbleSort from "./BubbleSort";
import "../index.css";
import RandomArrayGenerator from "./RandomArrayGenerator";
import AnimateSort from "./AnimateSort";
import AnimationsBuilder from "./AnimationsBuilder";

const Main = () => {
  const [elements, setElements] = useState([]);
  const [numbersCount, setNumbersCount] = useState(10);
  const [numbersRange, setNumbersRange] = useState(10);

  const numbersCountHandler = (event) => {
    let numbersCount = parseInt(event.target.value);
    if (numbersCount > 100) {
      numbersCount = 100;
    }
    setNumbersCount(numbersCount);
  };

  const arrayCreator = () => {
    let arrayGenerator = new RandomArrayGenerator(numbersCount, numbersRange);
    let arr = arrayGenerator.generateArray();
    setElements(arr);
  }

  const generatedNumbersRange = (event) => {
    let numbersRange = parseInt(event.target.value);
    if (numbersRange > 50) {
      numbersRange = 50;
    }
    setNumbersRange(numbersRange);
  };

  const handleClick = (event) => {
    let option = document.getElementById("speedOption");
    let speed = option.value;
    let animationsBuilder = new AnimationsBuilder();
    let bubbleSort = new BubbleSort(elements, animationsBuilder);
    bubbleSort.sort();
    let animate = new AnimateSort(speed, animationsBuilder);
    animate.animate();
  };

  const renderedElements = elements.map((e) => {
    return (
      <ElementRenderer
        numbersCount={numbersCount}
        numbersRange={numbersRange}
        element={e}
      />
    );
  });

  return (
    <div>
      <div className="leftPanel">
        <p>Write how many numbers to generate:</p>
        <input
          type="number"
          value={numbersCount}
          onChange={numbersCountHandler.bind(this)}
          className="numbersCountInput"
        ></input>
        <button onClick={arrayCreator.bind(this)}>Generate</button>
        <p>Write the range of numbers</p>
        <input
          type="number"
          value={numbersRange}
          onChange={generatedNumbersRange.bind(this)}
          className="numbersRangeInput"
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
