import { render, screen } from "@testing-library/react";

import Main from "./Main";

function makeFakeSlip() {
  return {
    id: "any_id",
    advice: "any_advice",
  };
}

describe("App main", () => {
  test("renders a advice", () => {
    const slip = makeFakeSlip();

    render(<Main slip={slip} />);
    const advice = screen.queryByText(/^any_advice$/);

    expect(advice).toBeInTheDocument();
  });

  test("renders a advice as blockquote", () => {
    const slip = makeFakeSlip();

    render(<Main slip={slip} />);
    const advice = screen.getByText(/^any_advice$/);

    expect(advice.nodeName).toBe("BLOCKQUOTE");
  });

  test("random advice blockquote has a cite with advice slip endpoint by ID", () => {
    const slip = makeFakeSlip();

    render(<Main slip={slip} />);
    const advice = screen.getByText(/^any_advice$/);

    expect(advice.cite).toBe("https://api.adviceslip.com/advice/any_id");
  });
});
