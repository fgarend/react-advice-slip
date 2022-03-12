import { render, screen } from "@testing-library/react";

import ExternalLink from "./ExternalLink";

describe("Footer external link", () => {
  test("renders a link with href", async () => {
    render(<ExternalLink href="https://any-external-link.com">any_content</ExternalLink>);

    const link = screen.queryByRole("link");

    expect(link).toHaveAttribute("href", "https://any-external-link.com");
  });

  test("renders text content passed as children", async () => {
    render(<ExternalLink href="https://any-external-link.com">any_content</ExternalLink>);

    const link = screen.queryByRole("link");

    expect(link).toHaveTextContent("any_content");
  });

  test("renders a link with target _blank", async () => {
    render(<ExternalLink href="https://any-external-link.com">any_content</ExternalLink>);

    const link = screen.queryByRole("link");

    expect(link).toHaveAttribute("target", "_blank");
  });

  test("renders a link with rel noreferrer", async () => {
    render(<ExternalLink href="https://any-external-link.com">any_content</ExternalLink>);

    const link = screen.queryByRole("link");

    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  test("renders a link with empty text content when does not provide children", async () => {
    render(<ExternalLink href="https://any-external-link.com" />);

    const link = screen.queryByRole("link");

    expect(link).toHaveTextContent("");
  });

  test("renders a link without href when does not provided", async () => {
    render(<ExternalLink>any_content</ExternalLink>);

    const link = screen.queryByText(/^any_content$/);

    expect(link).not.toHaveAttribute("href");
  });
});
