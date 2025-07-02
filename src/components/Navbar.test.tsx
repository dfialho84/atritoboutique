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
        expect(screen.getByRole("link")).toHaveTextContent("Registrar-se");
    });

    it('the "Registrar-se" link redirects to /signup', () => {
        render(<Navbar />);
        const link = screen.getByRole("link", { name: /registrar-se/i });
        expect(link).toHaveAttribute("href", "/signup");
    });
});
