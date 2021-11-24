import React from "react";
import { render } from "@testing-library/react";
import FilterSideBar from "../../components/FilterSideBar";

describe("FilterSideBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<FilterSideBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
