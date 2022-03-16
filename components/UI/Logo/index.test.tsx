import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "./index";

test("Test NoteCard component", () => {
  render(<Logo />);
  const el: HTMLElement = screen.getByRole("banner");
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
