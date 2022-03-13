import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("App footer", () => {
  test("renders 'developed by Felipe Gabriel Arend' text", async () => {
    render(<Footer />);

    const text = screen.queryByText(/^Developed by$/);

    expect(text).toHaveTextContent(/^Developed by Felipe Gabriel Arend$/);
  });

  test("renders 'Felipe Gabriel Arend' as a link to LinkedIn", async () => {
    render(<Footer />);

    const link = screen.queryByRole("link", { name: /^Felipe Gabriel Arend$/ });

    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/felipegabrielarend/");
  });

  test("renders a 'source code at GitHub' text", async () => {
    render(<Footer />);

    const text = screen.queryByText(/^Source code at$/);

    expect(text).toHaveTextContent(/^Source code at GitHub$/);
  });

  test("renders 'GitHub' as a link to repository", async () => {
    render(<Footer />);

    const link = screen.queryByRole("link", { name: /^GitHub$/ });

    expect(link).toHaveAttribute("href", "https://github.com/FrameForce/react-advice-slip");
  });
});
