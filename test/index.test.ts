import { getVersion } from "../src/index";

describe("testing getVersion fn", () => {
  it("it should return beta", () => {
    expect(getVersion()).toBe('beta');
  });
});