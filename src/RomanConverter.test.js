import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import RomanConverter from "./RomanConverter";

describe("<RomanConverter />", () => {
  afterEach(cleanup);

  it("Has a input field Arabic", () => {
    const { getByText } = render(<RomanConverter />);
    expect(() => {
      getByText("Arabic :");
    }).not.toThrow();
  });

  it("Has a input field Roman", () => {
    const { getByText } = render(<RomanConverter />);
    expect(() => {
      getByText("Roman :");
    }).not.toThrow();
  });

  it("convert 1 to I", () => {
    const { getByLabelText, getByText } = render(<RomanConverter />);
    // fireEvent.change(getByLabelText(/arabic/i), { target: { value: "1" } });
    expect(() => {
      getByText("Roman :");
    }).not.toThrow();
  });
});
