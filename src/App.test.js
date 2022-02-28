import { render, screen } from "@testing-library/react";

import App from "./App";

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders hello world", () => {
  render(<App />);
  const helloElement = screen.getByText(/hello world!/i);

  expect(helloElement).toBeInTheDocument();
});

test("calls advice slip API for a random advice", () => {
  const fetchSpy = jest
    .spyOn(global, "fetch")
    .mockName("fetch")
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: jest.fn(),
      })
    );

  render(<App />);

  expect(fetchSpy).toHaveBeenCalledWith("https://api.adviceslip.com/advice");
});
