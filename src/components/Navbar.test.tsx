import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import Navbar from "./Navbar";

describe("Navbar", () => {
    it("renders the main header", () => {
        render(<Navbar />);
        expect(screen.getByRole("heading")).toBeInTheDocument();
        expect(screen.getByRole("heading")).toHaveTextContent("Atrito");
    });

    it("renders the register link", () => {
        render(<Navbar />);
        expect(
            screen.getByRole("link", { name: /registrar-se/i })
        ).toHaveTextContent("Registrar-se");
    });

    it('the "Registrar-se" link redirects to /signup', () => {
        render(<Navbar />);
        const link = screen.getByRole("link", { name: /registrar-se/i });
        expect(link).toHaveAttribute("href", "/signup");
    });

    it("the Atrito header must be a link to home page", () => {
        render(<Navbar />);
        const header = screen.getByRole("link", { name: /Atrito/i });
        expect(header).toHaveAttribute("href", "/");
    });
});
