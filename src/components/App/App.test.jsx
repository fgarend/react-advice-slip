import { render, screen } from "@testing-library/react";

import App from "./App";

jest.mock("../Footer", () => () => <div data-testid="footer" />);
jest.mock("../Header", () => () => <div data-testid="header" />);
jest.mock("../Main", () => () => <div data-testid="main" />);

describe("App", () => {
  test("renders header", async () => {
    render(<App />);
    const header = screen.queryByTestId("header");
    expect(header).toBeInTheDocument();
  });

  test("renders main", async () => {
    render(<App />);
    const main = screen.queryByTestId("main");
    expect(main).toBeInTheDocument();
  });

  test("renders footer", async () => {
    render(<App />);
    const footer = screen.queryByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});
