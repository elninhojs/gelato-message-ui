import { GELATO_MESSAGE_CONTAINER, getInstance, addMessageItem } from "../src/core/render";
import { Severity } from "../src/types";

describe("testing getInstance fn", () => {
  it("it should return a div instance", () => {
    expect(getInstance(window.document).id).toBe(GELATO_MESSAGE_CONTAINER);
  });
});

describe("testing addMessageItem fn", () => {
  it("it should add and item properly", () => {
    addMessageItem("tesing it", Severity.ERROR, window.document);
    const instance = getInstance(window.document);
    expect(instance.childNodes.length).toBe(1);
  });
});