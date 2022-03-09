import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("App header", () => {
  test("renders an advice slip header", async () => {
    render(<Header />);

    const header = screen.getByRole("heading", { level: 1, name: /^Advice Slip$/ });
    expect(header).toBeInTheDocument();
  });
});
