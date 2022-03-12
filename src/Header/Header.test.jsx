import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("App header", () => {
  test("renders 'advice slip' heading", async () => {
    render(<Header />);

    const header = screen.getByRole("heading", { level: 1 });

    expect(header).toHaveTextContent(/^Advice Slip$/);
  });
});
