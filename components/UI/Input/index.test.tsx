import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./index";

test("Test Input component", () => {
  render(
    <span data-testid="block">
      <Input value="" setValue={() => ""} />
    </span>
  );
  const el: HTMLElement = screen.getByTestId("block");
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
