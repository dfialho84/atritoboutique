import { expect } from "@jest/globals";
import { act, render, screen, waitFor } from "@testing-library/react";

const adminbreadcrumbsSetterMock = jest.fn();
jest.mock("../../components/admin/AdminBreadcrumbs", () => ({
    __esModule: true,
    default: jest.fn(),
    AdminbreadcrumbsSetter: (props: BreadcrumbContextProps) =>
        adminbreadcrumbsSetterMock(props),
}));

jest.mock("../../contexts/BreadcrumbProvider", () => ({
    BreadcrumbProvider: ({ children }: { children: React.ReactNode }) =>
        children,
    useBreadcrumbContext: () => [[], jest.fn()],
}));

import { metadata } from "./page";
import { BreadcrumbContextProps } from "@/components/admin/AdminBreadcrumbs";

describe("AdminPage", () => {
    it("should show the products link", async () => {
        const AdminPage = (await import("./page")).default;

        render(<AdminPage />);

        expect(
            screen.getByRole("link", { name: /Produtos/i })
        ).toBeInTheDocument();
    });

    it("the products link should point to the correct URL", async () => {
        const AdminPage = (await import("./page")).default;

        render(<AdminPage />);

        const productsLink = screen.getByRole("link", { name: /Produtos/i });
        expect(productsLink).toHaveAttribute("href", "/admin/products");
    });

    it("should return corret Metadata", () => {
        expect(metadata).toEqual({
            title: "Administração",
            description: "Loja de roupas e acessórios",
        });
    });

    it("should render breadcrumbs", async () => {
        const AdminPage = (await import("./page")).default;

        await act(() => {
            render(<AdminPage />);
        });

        await waitFor(() => {
            expect(adminbreadcrumbsSetterMock).toHaveBeenCalledWith({
                breadcrombs: [
                    { label: "Home", href: "/" },
                    { label: "Administração", href: "/admin" },
                ],
            });
        });
    });
});
