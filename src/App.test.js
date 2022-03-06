import { render, screen, waitFor } from "@testing-library/react";

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

describe("App header", () => {
  test("renders an advice slip header", () => {
    mockFetchRandomAdvice();

    render(<App />);
    const headerElement = screen.queryByRole("heading", { level: 1, name: /^Advice Slip$/ });

    expect(headerElement).toBeInTheDocument();
  });
});

describe("App main", () => {
  test("renders a random advice blockquote", async () => {
    mockFetchRandomAdvice({ advice: "a_random_advice" });

    render(<App />);
    const adviceElement = await screen.findByText(/^a_random_advice$/);

    expect(adviceElement.nodeName).toBe("BLOCKQUOTE");
  });

  test("random advice blockquote has a cite with advice slip endpoint by ID", async () => {
    mockFetchRandomAdvice({ id: "123" });

    render(<App />);
    const adviceElement = await screen.findByText(/^any_random_advice$/);

    expect(adviceElement.cite).toBe("https://api.adviceslip.com/advice/123");
  });

  test("calls advice slip API for a random advice", async () => {
    const fetchSpy = mockFetchRandomAdvice();

    render(<App />);

    await waitFor(() => expect(fetchSpy).toHaveBeenCalledWith("https://api.adviceslip.com/advice"));
  });
});

describe("App footer", () => {
  test("renders developed by", () => {
    mockFetchRandomAdvice();

    render(<App />);
    const headerElement = screen.queryByRole("heading", { level: 2, name: /^Developed by$/ });

    expect(headerElement).toBeInTheDocument();
  });

  test("renders Felipe Gabriel Arend", () => {
    mockFetchRandomAdvice();

    render(<App />);
    const nameElement = screen.queryByText(/^Felipe Gabriel Arend$/);

    expect(nameElement).toBeInTheDocument();
  });

  test("renders advices powered by", () => {
    mockFetchRandomAdvice();

    render(<App />);
    const headerElement = screen.queryByRole("heading", { level: 2, name: /^Advices powered by$/ });

    expect(headerElement).toBeInTheDocument();
  });

  test("renders a link to Advice Slip JSON API", () => {
    mockFetchRandomAdvice();

    render(<App />);
    const linkElement = screen.queryByRole("link", { name: /^Advice Slip JSON API$/ });

    expect(linkElement).toBeInTheDocument();
  });
});
