import testComponent from "../src/component/testcomponent";

const object = {
  this: {
    is: {
      an: {
        object: "toUse",
      },
    },
  },
};

describe("service one", () => {
  it("is service number ONE", () => {
    const newObj = structuredClone(object);
    expect(newObj.this.is.an.object).toBe("toUse");
    expect(true).toBe(true);
    expect(testComponent.iam).toBe(false);
  });
});
