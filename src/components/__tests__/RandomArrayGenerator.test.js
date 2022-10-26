import RandomArrayGenerator from "../RandomArrayGenerator"

describe("Random Array Generator", () => {
    it("it should contain 10 numbers", () => {
        const randomArrayGenerator = new RandomArrayGenerator();
        const result = randomArrayGenerator.generateArray(10, 10);
        expect(result.length).toBe(10);
        result.forEach(element => {
            expect(element).toBeLessThanOrEqual(10)
        });
    })
})