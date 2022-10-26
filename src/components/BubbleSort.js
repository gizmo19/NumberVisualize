import AnimateSort from "./AnimateSort";

export default class BubbleSort {
  constructor(elements, buildAnimation) {
    this.unsortedElements = elements;
    this.animationBuilder = buildAnimation;
  }

  sort() {
    const elements = this.unsortedElements;
    const speedOption = this.speedOption;
    const length = elements.length;
    const historyElements = [[...elements]];
    const animations = [];
    let animationBuilder = this.animationBuilder;
    if (Array.isArray(elements)) {
      for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (elements[j] > elements[j + 1]) {
            let swap = elements[j];
            elements[j] = elements[j + 1];
            elements[j + 1] = swap;
            historyElements.push([...elements]);

            animationBuilder.add({
              el1Index: j,
              el2Index: j + 1,
              el1: elements[j],
              el2: elements[j + 1],
              swap: true,
              color: "red",
            });
            animationBuilder.add({
              el1Index: j,
              el2Index: j + 1,
              el1: elements[j],
              el2: elements[j + 1],
              swap: false,
              color: "blue",
            });
          } else {
            animationBuilder.add({
              el1Index: j,
              el2Index: j + 1,
              el1: elements[j],
              el2: elements[j + 1],
              swap: false,
              color: "red",
            });
            animationBuilder.add({
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
    // console.log(animationBuilder.getAll())
  }
}
