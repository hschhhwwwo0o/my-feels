import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Validate from "./index";

test("Test Validate component with true", () => {
  render(
    <Validate data-testid="validate" isValidate={true}>
      Ok
    </Validate>
  );
  const el: HTMLElement = screen.getByText("Ok");
  expect(el).toBeInTheDocument();
  expect(el).toHaveClass("opacity-100");
});

test("Test Validate component with false", () => {
  render(
    <Validate data-testid="validate" isValidate={false}>
      Ok
    </Validate>
  );
  const el: HTMLElement = screen.getByText("Ok");
  expect(el).toBeInTheDocument();
  expect(el).toHaveClass("opacity-60");
});

test("Snapshot Validate component with false", () => {
  render(
    <Validate data-testid="validate" isValidate={false}>
      Ok
    </Validate>
  );
  const el: HTMLElement = screen.getByText("Ok");
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
