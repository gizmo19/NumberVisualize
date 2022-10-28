export class NumberGenerator {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  generateRandomNumber() {
    const min = this.min;
    const max = this.max;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
