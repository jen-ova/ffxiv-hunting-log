import React from "react";
import { render } from "@testing-library/react";
import MonsterListSideBar from "../../components/MonsterListSideBar";

describe("MonsterListSideBar", () => {
  it("renders correctly", () => {
    const mapOverlayImage = "assets/maps/middle-la-noscea.jpg";

    const { asFragment } = render(<MonsterListSideBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
