import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputNoteTitleH2 from "./index";

test("Test InputNoteTitleH2 component", () => {
  render(
    <span data-testid="block">
      <InputNoteTitleH2 value="" setValue={() => ""} />
    </span>
  );
  const el: HTMLElement = screen.getByTestId("block");
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
