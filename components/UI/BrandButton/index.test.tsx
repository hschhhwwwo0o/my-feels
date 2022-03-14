import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./index";

test("Test exist button", () => {
  render(<Button>click me</Button>);
  const el = screen.getByText(/click me/i);
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
