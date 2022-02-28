import { render, screen } from "@testing-library/react";

import App from "./App";

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders a random advice", async () => {
  jest
    .spyOn(global, "fetch")
    .mockName("fetch")
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: jest.fn().mockResolvedValueOnce({
          slip: {
            advice: "any_random_advice",
          }
        }),
      })
    );

  render(<App />);
  const adviceElement = await screen.findByText(/^any_random_advice$/);

  expect(adviceElement).toBeInTheDocument();
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
