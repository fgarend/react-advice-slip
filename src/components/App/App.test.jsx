import { render, waitFor } from "@testing-library/react";

import App from "./App";

beforeEach(() => {
  jest.clearAllMocks();
});

function mockFetchRandomAdvice({ advice = "any_random_advice", id = "any_id" } = {}) {
  const jsonResponse = {
    slip: {
      id,
      advice,
    },
  };
  const response = {
    json: jest.fn().mockName("response.json()").mockResolvedValueOnce(jsonResponse),
  };

  return jest.spyOn(global, "fetch").mockName("fetch").mockResolvedValueOnce(response);
}

test("calls advice slip API for a random advice", async () => {
  const fetchSpy = mockFetchRandomAdvice();

  render(<App />);

  await waitFor(() => {
    expect(fetchSpy).toHaveBeenCalledWith("https://api.adviceslip.com/advice");
  });
});
