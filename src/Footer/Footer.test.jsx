import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("App footer", () => {
  test("renders a 'developed by' heanding", async () => {
    render(<Footer />);

    const heading = screen.queryByRole("heading", { level: 2, name: /^Developed by$/ });

    expect(heading).toBeInTheDocument();
  });

  test("renders 'Felipe Gabriel Arend' text", async () => {
    render(<Footer />);

    const name = screen.queryByText(/^Felipe Gabriel Arend$/);

    expect(name).toBeInTheDocument();
  });

  test("renders a 'social media' heading", async () => {
    render(<Footer />);

    const heading = screen.queryByRole("heading", { level: 2, name: /^Social Media$/ });

    expect(heading).toBeInTheDocument();
  });

  test("renders a LinkedIn link with href to my profile", async () => {
    render(<Footer />);

    const link = screen.queryByRole("link", { name: /^LinkedIn$/ });

    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/felipegabrielarend/");
  });

  test("renders a GitHub link to my repository", async () => {
    render(<Footer />);

    const link = screen.queryByRole("link", { name: /^GitHub$/ });

    expect(link).toHaveAttribute("href", "https://github.com/FrameForce/react-advice-slip");
  });

  test("renders 'advices powered by' heading", async () => {
    render(<Footer />);

    const heading = screen.queryByRole("heading", { level: 2, name: /^Advices powered by$/ });

    expect(heading).toBeInTheDocument();
  });

  test("renders a link to Advice Slip JSON API", async () => {
    render(<Footer />);

    const link = screen.queryByRole("link", { name: /^Advice Slip JSON API$/ });

    expect(link).toHaveAttribute("href", "https://api.adviceslip.com/");
  });
});
