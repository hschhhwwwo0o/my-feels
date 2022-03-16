import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoreButton from "./index";

test("Test MoreButton component", () => {
  render(
    <span data-testid="block">
      <MoreButton />
    </span>
  );
  const el: HTMLElement = screen.getByTestId("block");
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
