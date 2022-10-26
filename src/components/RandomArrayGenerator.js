import { NumberGenerator } from "./NumberGenerator";

export default class RandomArrayGenerator {
  constructor(numbersCount, max) {
    this.numbersCount = numbersCount;
    this.max = max;
  }

  generateArray() {
    const numbersCount = this.numbersCount;
    const arr = [];
    const max = this.max;
    const min = 1;

    let numberGenerator = new NumberGenerator(min, max);

    for (let i = 0; i < numbersCount; i++) {
      let generatedValue = numberGenerator.generateRandomNumber();
      arr.push(generatedValue);
    }
    return arr;
  }
}
