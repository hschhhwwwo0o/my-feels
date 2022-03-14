import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddCircleButton from "./index";

test("Test exist add circle back button", () => {
  render(<AddCircleButton />);
  const el: HTMLElement = screen.getByRole("button");
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
