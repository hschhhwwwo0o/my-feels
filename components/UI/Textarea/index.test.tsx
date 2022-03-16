import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Textarea from "./index";

test("Test Textarea component", () => {
  render(<Textarea value={"text"} setValue={() => ""} />);
  const el: HTMLElement = screen.getByRole("textbox");
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
