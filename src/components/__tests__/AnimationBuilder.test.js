import AnimationsBuilder from "../AnimationsBuilder";

describe("Animations Builder check", () => {
  it("Check if animations are equal", () => {
    const animationBuilder = new AnimationsBuilder();
    const obj = { test: "test1" };
    animationBuilder.add(obj);
    const result = animationBuilder.getAll();
    expect(result).toEqual([obj]);
  });
});
