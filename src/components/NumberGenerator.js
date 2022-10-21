export class NumberGenerator {
  constructor(minimum, rangeOfGeneratedNumbersValue) {
    this.min = minimum;
    this.max = rangeOfGeneratedNumbersValue;
  }

  generateRandomNumber() {
    const min = this.min;
    const max = this.max;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
