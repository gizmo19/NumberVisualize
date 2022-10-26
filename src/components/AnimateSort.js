import AnimationsBuilder from "./AnimationsBuilder";

export default class AnimateSort {
  constructor(speed, animationsBuilder) {
    this.speed = speed;
    this.animationsBuilder = animationsBuilder;
  }

  animate() {
    let animationsBuilder = this.animationsBuilder;
    const animations = animationsBuilder.getAll();
    const bars = document.getElementsByClassName("column");
    const animationSpeed = this.speed;
    const slow = "slow";
    const normal = "normal";
    const fast = "fast";
    const veryFast = "veryFast";
    let speed;
    if (animationSpeed === slow) {
      speed = 500;
    } else if (animationSpeed === normal) {
      speed = 200;
    } else if (animationSpeed === fast) {
      speed = 10;
    } else if (animationSpeed === veryFast) {
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
