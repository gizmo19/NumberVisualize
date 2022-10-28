import AnimationsBuilder from "./AnimationsBuilder";

export default class AnimateSort {
  constructor(animationsBuilder) {
    this.animationsBuilder = animationsBuilder;
  }

  getAnimationSpeed(speed) {
    let animationSpeed;
    switch (speed) {
      case "slow":
        animationSpeed = 500;
        break;
      default:
      case "normal":
        animationSpeed = 200;
        break;
      case "fast":
        animationSpeed = 10;
        break;
      case "veryFast":
        animationSpeed = 3;
        break;
      case "iamspeed":
        animationSpeed = 1;
        break;
    }
    return animationSpeed;
  }

  animate(speed) {
    let animationsBuilder = this.animationsBuilder;
    const animations = animationsBuilder.getAll();
    const bars = document.getElementsByClassName("column");

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
      }, i * this.getAnimationSpeed(speed));
    }
  }
}
