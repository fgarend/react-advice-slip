import { render, screen } from "@testing-library/react";

import Main from "./Main";

function makeFakeSlip() {
  return {
    id: "any_id",
    advice: "any_advice",
  };
}

describe("App main", () => {
  test("renders an advice", () => {
    const slip = makeFakeSlip();

    render(<Main slip={slip} />);
    const advice = screen.queryByText(/^any_advice$/);

    expect(advice).toBeInTheDocument();
  });

  test("renders an advice with cite attribute with url for advice slip by ID endpoint", () => {
    const slip = makeFakeSlip();

    render(<Main slip={slip} />);
    const advice = screen.getByText(/^any_advice$/);

    expect(advice).toHaveAttribute("cite", "https://api.adviceslip.com/advice/any_id");
  });
});
