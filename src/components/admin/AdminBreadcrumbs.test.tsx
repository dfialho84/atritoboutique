import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
// import AdminBreadcrumb from './AdminBreadcrumbs';

const useBreadcrumbContextMock = jest.fn();

jest.mock("../../contexts/BreadcrumbProvider", () => ({
    useBreadcrumbContext: useBreadcrumbContextMock,
}));

describe("AdminBreadcrumbs", () => {
    it("should render an empty breadcrumb when no breadcrumbs are provided", async () => {
        useBreadcrumbContextMock.mockReturnValue([[]]);

        const AdminBreadcrumbs = (await import("./AdminBreadcrumbs")).default;

        const { container } = render(<AdminBreadcrumbs />);
        expect(container.querySelector("ol")).toBeEmptyDOMElement();
    });

    it("should render one breadcrumb when one breadcrumb is provided", async () => {
        useBreadcrumbContextMock.mockReturnValue([
            [{ label: "Home", href: "/" }],
        ]);

        const AdminBreadcrumbs = (await import("./AdminBreadcrumbs")).default;
        const { container } = render(<AdminBreadcrumbs />);
        expect(container.querySelector("ol")).toHaveTextContent("Home");
    });

    it("should render several breadcrumbs when several breadcrumbs are provided", async () => {
        useBreadcrumbContextMock.mockReturnValue([
            [
                { label: "Home", href: "/" },
                { label: "Admin", href: "/admin" },
                { label: "Settings", href: "/admin/settings" },
            ],
        ]);

        const AdminBreadcrumbs = (await import("./AdminBreadcrumbs")).default;
        const { container } = render(<AdminBreadcrumbs />);
        expect(container.querySelector("ol")).toHaveTextContent("Home");
        expect(container.querySelector("ol")).toHaveTextContent("Admin");
        expect(container.querySelector("ol")).toHaveTextContent("Settings");
    });

    it("should render several breadcrumbs in the correct order when several breadcrumbs are provided", async () => {
        useBreadcrumbContextMock.mockReturnValue([
            [
                { label: "Home", href: "/" },
                { label: "Admin", href: "/admin" },
                { label: "Settings", href: "/admin/settings" },
            ],
        ]);

        const AdminBreadcrumbs = (await import("./AdminBreadcrumbs")).default;
        const { container } = render(<AdminBreadcrumbs />);
        const breadcrumbItems = Array.from(container.querySelectorAll("ol li"));
        expect(breadcrumbItems.map((li) => li.textContent)).toEqual([
            "Home",
            "",
            "Admin",
            "",
            "Settings",
        ]);
    });
});

describe("AdminBreadcrumbsSetter", () => {
    it("should call setBreadcrumbs when props change", async () => {
        const mockSetBreadcrumbs = jest.fn();
        useBreadcrumbContextMock.mockReturnValue([[], mockSetBreadcrumbs]);

        const { AdminbreadcrumbsSetter } = await import("./AdminBreadcrumbs");

        const testBreadcrumbs = [
            { label: "Home", href: "/" },
            { label: "Admin", href: "/admin" },
        ];

        render(<AdminbreadcrumbsSetter breadcrombs={testBreadcrumbs} />);

        expect(mockSetBreadcrumbs).toHaveBeenCalledWith(testBreadcrumbs);
    });
});
