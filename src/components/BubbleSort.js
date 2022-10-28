import AnimateSort from "./AnimateSort";

export default class BubbleSort {
  constructor(animationsBuilder) {
    this.animationsBuilder = animationsBuilder;
  }

  sort(elements) {
    const speedOption = this.speedOption;
    const length = elements.length;
    const historyElements = [[...elements]];
    if (Array.isArray(elements)) {
      for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (elements[j] > elements[j + 1]) {
            let swap = elements[j];
            elements[j] = elements[j + 1];
            elements[j + 1] = swap;
            historyElements.push([...elements]);

            this.animationsBuilder.add({
              el1Index: j,
              el2Index: j + 1,
              el1: elements[j],
              el2: elements[j + 1],
              swap: true,
              color: "red",
            });
            this.animationsBuilder.add({
              el1Index: j,
              el2Index: j + 1,
              el1: elements[j],
              el2: elements[j + 1],
              swap: false,
              color: "blue",
            });
          } else {
            this.animationsBuilder.add({
              el1Index: j,
              el2Index: j + 1,
              el1: elements[j],
              el2: elements[j + 1],
              swap: false,
              color: "red",
            });
            this.animationsBuilder.add({
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
  }
}
