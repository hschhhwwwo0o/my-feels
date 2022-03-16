import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Thumbtack from "./index";

test("Test Thumbtack component", () => {
  render(
    <span data-testid="block">
      <Thumbtack />
    </span>
  );
  const el: HTMLElement = screen.getByTestId("block");
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
