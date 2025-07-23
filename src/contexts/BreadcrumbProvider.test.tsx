import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import BreadcrumbProvider, { useBreadcrumbContext } from "./BreadcrumbProvider";

describe("BreadcrumbProvider", () => {
    it("should throw an error if used outside of BreadcrumbProvider", () => {
        const TestComponent = () => {
            useBreadcrumbContext();
            return <div>Test</div>;
        };

        expect(() => render(<TestComponent />)).toThrow(
            "useBreadcrumbContext must be used within a BreadcrumbProvider"
        );
    });

    it("should provide initial empty breadcrumbs", () => {
        const TestComponent = () => {
            const [breadcrumbs] = useBreadcrumbContext();
            return (
                <div>
                    <div data-testid="breadcrumbs">{breadcrumbs.length}</div>
                </div>
            );
        };

        const { getByTestId } = render(
            <BreadcrumbProvider>
                <TestComponent />
            </BreadcrumbProvider>
        );

        expect(getByTestId("breadcrumbs").textContent).toBe("0");
    });

    it("should provide breadcrumbs and setBreadcrumbs", async () => {
        const TestComponent = () => {
            const [breadcrumbs, setBreadcrumbs] = useBreadcrumbContext();
            return (
                <div>
                    <button
                        onClick={() =>
                            setBreadcrumbs([{ label: "Test", href: "/test" }])
                        }
                    >
                        Set Breadcrumb
                    </button>
                    <div data-testid="breadcrumbs">
                        {breadcrumbs.map((b, index) => (
                            <span key={index}>{b.label}</span>
                        ))}
                    </div>
                </div>
            );
        };

        const { getByText, getByTestId } = render(
            <BreadcrumbProvider>
                <TestComponent />
            </BreadcrumbProvider>
        );

        const button = getByText("Set Breadcrumb");
        await button.click();

        expect(getByTestId("breadcrumbs").textContent).toBe("Test");
    });
});
