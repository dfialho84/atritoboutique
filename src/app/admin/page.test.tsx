import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import AdminPage from "./page";
import React from "react";

jest.mock("../../contexts/BreadcrumbProvider", () => ({
    BreadcrumbProvider: ({ children }: { children: React.ReactNode }) =>
        children,
    useBreadcrumbContext: () => [[], jest.fn()],
}));

describe("AdminPage", () => {
    it("should show the products link", () => {
        render(<AdminPage />);

        expect(
            screen.getByRole("link", { name: /Produtos/i })
        ).toBeInTheDocument();
    });

    it("the products link should point to the correct URL", () => {
        render(<AdminPage />);

        const productsLink = screen.getByRole("link", { name: /Produtos/i });
        expect(productsLink).toHaveAttribute("href", "/admin/products");
    });
});
