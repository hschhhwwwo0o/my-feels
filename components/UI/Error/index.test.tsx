import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Error from "./index";

test("Test Error component", () => {
  render(
    <Error setError={() => {}} dependencies={[]} text={"Error label"}>
      Error Text
    </Error>
  );
  const el: HTMLElement = screen.getByRole("alert");
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
