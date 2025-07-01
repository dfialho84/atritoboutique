import { render, screen } from "@testing-library/react";
import Home from "./page";
import { expect } from "@jest/globals";

describe("Home Page", () => {
    it("renders the main header", () => {
        render(<Home />);
        expect(
            screen.getByRole("heading", { name: /Atrito/i })
        ).toBeInTheDocument();
    });

    it("renders navigation links", () => {
        render(<Home />);
        expect(screen.getByText(/Início/i)).toBeInTheDocument();
        expect(screen.getAllByText(/Coleção/i).length).toBeGreaterThan(0);
        expect(screen.getByText(/Contato/i)).toBeInTheDocument();
    });

    it("renders the spring collection section", () => {
        render(<Home />);
        expect(
            screen.getByRole("heading", { name: /Nova coleção de primavera/i })
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                /Explore nossas peças exclusivas com design sofisticado e conforto premium/i
            )
        ).toBeInTheDocument();
    });

    it("renders 5 product cards", () => {
        render(<Home />);
        const productNames = screen.getAllByText(/Nome do Produto/i);
        expect(productNames).toHaveLength(5);
    });

    it("renders product prices", () => {
        render(<Home />);
        const prices = screen.getAllByText(/R\$ 11,99/i);
        expect(prices).toHaveLength(5);
    });

    it('renders "Ver detalhes" buttons', () => {
        render(<Home />);
        const buttons = screen.getAllByRole("button", {
            name: /Ver detalhes/i,
        });
        expect(buttons).toHaveLength(5);
    });

    it("renders the footer with current year", () => {
        render(<Home />);
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
