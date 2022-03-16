import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoteCard from "./index";

test("Test NoteCard component", () => {
  render(
    <span data-testid="card">
      <NoteCard />
    </span>
  );
  const el: HTMLElement = screen.getByTestId("card");
  expect(el).toBeInTheDocument();
  expect(el).toMatchSnapshot();
});
