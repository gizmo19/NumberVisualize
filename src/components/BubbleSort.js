import AnimateSort from "./AnimateSort";

export default class BubbleSort {
  constructor(elements, option) {
    this.unsortedElements = elements;
    this.howFastOption = option;
  }

  sort() {
    const elements = this.unsortedElements;
    const option = this.howFastOption;
    const length = elements.length;
    const historyElements = [[...elements]];
    const animations = [];
    if(Array.isArray(elements)) {
      for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
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
    } 
    let animate = new AnimateSort(animations, option);
    animate.animateElements();
  }
}
