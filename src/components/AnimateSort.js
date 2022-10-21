export default class AnimateSort {
  constructor(animations, option) {
    this.animations = animations;
    this.howFastOption = option;
  }

  animateElements() {
    const animations = this.animations;
    const bars = document.getElementsByClassName("column");
    const howFast = this.howFastOption;
    let speed;
    if (howFast === "slow") {
      speed = 500;
    } else if (howFast === "normal") {
      speed = 200;
    } else if (howFast === "fast") {
      speed = 10;
    } else if (howFast === "veryFast") {
      speed = 3;
    } else {
      speed = 1;
    }
    for (let i = 0; i < animations.length; i++) {
      let frame = animations[i];
      let barOneStyle = bars[frame.el1Index].style;
      let barTwoStyle = bars[frame.el2Index].style;

      setTimeout(() => {
        barOneStyle.backgroundColor = animations[i].color;
        barTwoStyle.backgroundColor = animations[i].color;
        if (frame.swap) {
          let bar1Height = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = bar1Height;
          let bar1Content = bars[frame.el1Index].innerHTML;
          bars[frame.el1Index].innerHTML = bars[frame.el2Index].innerHTML;
          bars[frame.el2Index].innerHTML = bar1Content;
        }
      }, i * speed);
    }
  }
}
