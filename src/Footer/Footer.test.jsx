import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("App footer", () => {
  test("renders a 'developed by' heanding", async () => {
    render(<Footer />);

    const heading = screen.queryByRole("heading", { level: 2, name: /^Developed by$/ });

    expect(heading).toBeInTheDocument();
  });

  test("renders 'Felipe Gabriel Arend' lint to LinkedIn", async () => {
    render(<Footer />);

    const link = screen.queryByRole("link", { name: /^Felipe Gabriel Arend$/ });

    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/felipegabrielarend/");
  });

  test("renders a 'source code at' heading", async () => {
    render(<Footer />);

    const heading = screen.queryByRole("heading", { level: 2, name: /^Source code at$/ });

    expect(heading).toBeInTheDocument();
  });

  test("renders a GitHub link to my repository", async () => {
    render(<Footer />);

    const link = screen.queryByRole("link", { name: /^GitHub$/ });

    expect(link).toHaveAttribute("href", "https://github.com/FrameForce/react-advice-slip");
  });
});
