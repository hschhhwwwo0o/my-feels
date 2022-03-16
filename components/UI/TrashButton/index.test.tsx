import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TrashButton from "./index";

test("Test TrashButton component", () => {
  render(
    <span data-testid="block">
      <TrashButton />
    </span>
  );
  const el: HTMLElement = screen.getByTestId("block");
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
