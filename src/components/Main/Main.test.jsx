import { render, screen, waitFor } from "@testing-library/react";

import Main from "./Main";

function makeFakeAdviceSlip(advice = "any_advice", id = "any_id") {
  return {
    slip: {
      id,
      advice,
    },
  };
}

function mockFetchRandomAdvice() {
  const adviceSlip = makeFakeAdviceSlip();

  const response = {
    json: jest.fn().mockName("response.json()").mockResolvedValue(adviceSlip),
  };

  return jest.spyOn(global, "fetch").mockName("fetch").mockResolvedValue(response);
}

function renderMain() {
  const fetchSpy = mockFetchRandomAdvice();
  render(<Main />);

  return { fetchSpy };
}

describe("App main", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("calls advice slip API for a random advice", async () => {
    const { fetchSpy } = renderMain();

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith("https://api.adviceslip.com/advice");
    });
  });

  test("renders an advice", async () => {
    renderMain();
    const advice = await screen.findByText(/^any_advice$/);
    expect(advice).toBeInTheDocument();
  });

  test("renders an advice with cite attribute with url for advice slip by ID endpoint", async () => {
    renderMain();
    const advice = await screen.findByText(/^any_advice$/);
    expect(advice).toHaveAttribute("cite", "https://api.adviceslip.com/advice/any_id");
  });

  test("renders 'advices powered by Advice Slip JSON API'", async () => {
    renderMain();
    const caption = await screen.findByText(/advice powered by/);
    expect(caption).toHaveTextContent(/^advice powered by Advice Slip JSON API$/);
  });

  test("renders a link with 'Advice Slip JSON API' text content", async () => {
    renderMain();
    const link = await screen.findByRole("link");
    expect(link).toHaveTextContent(/^Advice Slip JSON API$/);
  });

  test("renders a link to Advice Slip JSON API docs", async () => {
    renderMain();
    const link = await screen.findByRole("link");
    expect(link).toHaveAttribute("href", "https://api.adviceslip.com/");
  });
});
