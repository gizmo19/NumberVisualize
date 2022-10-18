export default class BubbleSort {
  constructor(elements) {
    this.numberElements = elements;
  }

  sortingElements() {
    const elements = this.numberElements;
    const l = elements.length;
    const historyElements = [[...elements]];
    const animations = [];
    for (let i = 0; i < l - 1; i++) {
      for (let j = 0; j < l - i - 1; j++) {
        if (this.numberElements[j] > elements[j + 1]) {
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
    this.animateElements(animations);
  }

  animateElements(animations) {
    const bars = document.getElementsByClassName("column");
    for (let i = 0; i < animations.length; i++) {
      let frame = animations[i];
      let barOneStyle = bars[frame.el1Index].style;
      let barTwoStyle = bars[frame.el2Index].style;

      setTimeout(() => {
        barOneStyle.backgroundColor = animations[i].color;
        barTwoStyle.backgroundColor = animations[i].color;
        if (frame.swap) {
          let el1Height = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = el1Height;
          let el1Var = bars[frame.el1Index].innerHTML;
          bars[frame.el1Index].innerHTML = bars[frame.el2Index].innerHTML;
          bars[frame.el2Index].innerHTML = el1Var;
        }
      }, i * 50);
    }
  }
}
