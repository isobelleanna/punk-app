import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("inital test for react card", () => {
  it("should render headings", () => {
    render(<Card />);
    const headings = screen.getAllByRole("heading");
    headings.forEach((heading) => {
      expect(heading).toBeInTheDocument();
    });
    headings.forEach((heading) => {
      expect(heading).not.toBeNull();
    });
  });
});
