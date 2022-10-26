import { NumberGenerator } from "./NumberGenerator";

export default class RandomArrayGenerator {
  constructor(numbersCount, numbersRange) {
    this.numbersCount = numbersCount;
    this.numbersRange = numbersRange;
  }

  generateArray() {
    const numbersCount = this.numbersCount;
    const arr = [];
    const max = this.numbersRange;
    const min = 1;

    let numberGenerator = new NumberGenerator(min, max);

    for (let i = 0; i < numbersCount; i++) {
      let generatedValue = numberGenerator.generateRandomNumber();
      arr.push(generatedValue);
    }
    return arr;
  }
}
