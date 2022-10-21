import { NumberGenerator } from "./NumberGenerator";

export default class RandomArrayGenerator {
  constructor(howManyNumbersValue, rangeOfGeneratedNumbersValue) {
    this.howManyNumbersValue = howManyNumbersValue;
    this.rangeOfGeneratedNumbersValue = rangeOfGeneratedNumbersValue;
  }

  generateArray() {
    const howManyNumbersValue = this.howManyNumbersValue;
    const rangeOfGeneratedNumbersValue = this.rangeOfGeneratedNumbersValue;
    const arr = [];
    const minimum = 1;

    let numberGenerator = new NumberGenerator(minimum, rangeOfGeneratedNumbersValue);

    for (let i = 0; i < howManyNumbersValue; i++) {
        let generatedValue = numberGenerator.generateRandomNumber();
      arr.push(generatedValue);
    }
    return arr;
  }
}
