import apple from "../../js/apple.js";

describe("My apple", () => {
  it("is red and juicy", () => {
    expect(apple.color).toEqual("red");
    expect(apple.texture).toEqual("juicy");
  });

  it("is delicious", () => {
    expect(apple.rating).toBeGreaterThan(6);
  });

  it("is vegan friendly", () => {
    expect(apple.animalProduct).not.toBeTruthy();
  });
});