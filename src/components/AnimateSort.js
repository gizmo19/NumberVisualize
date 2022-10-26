import AnimationsBuilder from "./AnimationsBuilder";

export default class AnimateSort {
  constructor(speedOption, buildAnimation) {
    this.speedOption = speedOption;
    this.animationBuilder = buildAnimation;
  }

  animate() {
    let animationBuilder = this.animationBuilder;
    const animations = animationBuilder.getAll();
    const bars = document.getElementsByClassName("column");
    const speedOption = this.speedOption;
    const slow = "slow";
    const normal = "normal";
    const fast = "fast";
    const veryFast = "veryFast";
    let speed;
    if (speedOption === slow) {
      speed = 500;
    } else if (speedOption === normal) {
      speed = 200;
    } else if (speedOption === fast) {
      speed = 10;
    } else if (speedOption === veryFast) {
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
