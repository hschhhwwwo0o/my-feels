import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BackButton from "./index";

test("Test exist back button", () => {
  render(<BackButton />);
  const el: HTMLElement = screen.getByRole("button");
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
