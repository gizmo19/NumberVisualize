import { NumberGenerator } from "../NumberGenerator";

describe("Number Generator test", () => {
  it("it should generate number in range", () => {
    const numberGenerator = new NumberGenerator(1, 10);
    const result = numberGenerator.generateRandomNumber();
    expect(result).toBeLessThanOrEqual(10);
  });
});
