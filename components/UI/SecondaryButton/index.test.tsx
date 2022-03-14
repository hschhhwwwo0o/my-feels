import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SecondaryButton from "./index";

test("Test SecondaryButton component", () => {
  render(<SecondaryButton onClickHandler={() => {}}>Secondary text</SecondaryButton>);
  const el: HTMLElement = screen.getByRole("button");
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
