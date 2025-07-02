import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import Footer from "./Footer";

describe("Footer", () => {
    it("renders the footer with current year", () => {
        render(<Footer />);
        const year = new Date().getFullYear();
        expect(
            screen.getByText(
                new RegExp(
                    `© ${year} Atrito. Todos os direitos reservados.`,
                    "i"
                )
            )
        ).toBeInTheDocument();
    });
});
