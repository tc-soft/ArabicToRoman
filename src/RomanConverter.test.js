import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  wait,
  queryByTestId
} from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import RomanConverter from "./RomanConverter";

describe("<RomanConverter />", () => {
  afterEach(cleanup);

  it("Has a label field Arabic", () => {
    const { getByTestId } = render(<RomanConverter />);
    expect(getByTestId("labelArabic")).toHaveTextContent("Arabic :");
  });

  it("Has a label field Roman", () => {
    const { getByTestId } = render(<RomanConverter />);
    expect(() => {
      getByTestId("labelRoman");
    }).not.toThrow();
  });

  it("Has outputRoman element", async () => {
    const { container } = render(<RomanConverter />);

    await wait(() =>
      expect(queryByTestId(container, "outputRoman")).toBeTruthy()
    );
  });

  it("Has output XI for input 11", async () => {
    const { getByTestId } = render(<RomanConverter />);
    const testValue = "XI";
    const input = getByTestId("inputArabic");
    const output = getByTestId("outputRoman");

    fireEvent.change(input, { target: { value: "11" } });

    await wait(() => expect(output).toHaveTextContent(testValue));
  });
});
