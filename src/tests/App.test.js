import { render } from "@testing-library/react";
import App from "../components/App";

test("renders App", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
