export default class AnimationsBuilder {
  constructor() {
    this.animations = [];
  }

  add(animation) {
    this.animations.push(animation);
  }

  getAll() {
    return this.animations;
  }
}
