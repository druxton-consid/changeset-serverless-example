import testComponent from "../src/component/testcomponent";

describe("service one", () => {
  it("is service number ONE", () => {
    expect(true).toBe(true);
    expect(testComponent.iam).toBe(false);
  });
});
