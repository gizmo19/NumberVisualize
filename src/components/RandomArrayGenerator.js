import { NumberGenerator } from "./NumberGenerator";

export default class RandomArrayGenerator {
  generateArray(numbersCount, max) {
    const arr = [];
    const min = 1;

    let numberGenerator = new NumberGenerator(min, max);

    for (let i = 0; i < numbersCount; i++) {
      let generatedValue = numberGenerator.generateRandomNumber();
      arr.push(generatedValue);
    }
    return arr;
  }
}
