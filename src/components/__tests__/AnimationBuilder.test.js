import AnimationsBuilder from "../AnimationsBuilder";

describe("Animations Builder test", () => {
  it("Animations should be equal", () => {
    const animationBuilder = new AnimationsBuilder();
    const obj = { test: "test1" };
    animationBuilder.add(obj);
    const result = animationBuilder.getAll();
    expect(result).toEqual([obj]);
  });
});
