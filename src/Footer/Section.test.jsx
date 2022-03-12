import { render, screen } from "@testing-library/react";

import Section from "./Section";

describe("App footer section", () => {
  test("renders title prop in a h2", async () => {
    render(<Section title="any_title">any_children</Section>);

    const heading = screen.queryByRole("heading", { level: 2 });

    expect(heading).toHaveTextContent("any_title");
  });

  test("renders children", async () => {
    render(<Section title="any_title">any_children</Section>);

    const children = screen.queryByText(/^any_children$/);

    expect(children).toBeInTheDocument();
  });

  test("renders empty text content in h2 when does not provide a title", async () => {
    render(<Section>any_children</Section>);

    const heading = screen.queryByRole("heading", { level: 2 });

    expect(heading).toHaveTextContent("");
  });

  test("renders a section only with heading text content when does not provide children", async () => {
    const { container } = render(<Section title="any_title" />);

    expect(container).toHaveTextContent(/^any_title$/);
  });
});
