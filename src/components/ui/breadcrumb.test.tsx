import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "./breadcrumb";
import React from "react";

describe("Breadcrumb", () => {
    it("renders the breadcrumb nav with correct aria-label", () => {
        const { getByLabelText } = render(<Breadcrumb />);
        expect(getByLabelText("breadcrumb")).toBeInTheDocument();
    });

    it("renders a breadcrumb list with children", () => {
        const { getByRole } = render(
            <BreadcrumbList>
                <BreadcrumbItem>Home</BreadcrumbItem>
            </BreadcrumbList>
        );
        expect(getByRole("list")).toBeInTheDocument();
    });

    it("renders a breadcrumb item", () => {
        const { getByText } = render(<BreadcrumbItem>Item</BreadcrumbItem>);
        expect(getByText("Item")).toBeInTheDocument();
    });

    it("renders a breadcrumb link", () => {
        const { getByRole } = render(
            <BreadcrumbLink href="/test">Test</BreadcrumbLink>
        );
        expect(getByRole("link")).toHaveAttribute("href", "/test");
    });

    it("renders BreadcrumbLink as a Slot when asChild is true", () => {
        // Create a custom component to be rendered as a child
        const CustomComponent = React.forwardRef<
            HTMLButtonElement,
            React.ComponentProps<"button">
        >((props, ref) => (
            <button ref={ref} data-testid="custom-btn" {...props} />
        ));
        CustomComponent.displayName = "CustomComponent";
        const { getByTestId } = render(
            <BreadcrumbLink asChild>
                <CustomComponent>Custom</CustomComponent>
            </BreadcrumbLink>
        );
        expect(getByTestId("custom-btn")).toBeInTheDocument();
        expect(getByTestId("custom-btn")).toHaveTextContent("Custom");
    });

    it("renders a breadcrumb page", () => {
        const { getByText } = render(<BreadcrumbPage>Current</BreadcrumbPage>);
        expect(getByText("Current")).toHaveAttribute("aria-current", "page");
    });

    it("renders a breadcrumb separator with default icon", () => {
        const { getByRole } = render(<BreadcrumbSeparator />);
        expect(getByRole("presentation", { hidden: true })).toBeInTheDocument();
    });

    it("renders a breadcrumb ellipsis", () => {
        const { getByText } = render(
            <BreadcrumbEllipsis className="bg-red-50" />
        );
        expect(getByText("More")).toBeInTheDocument();
    });

    it("matches snapshot for a full breadcrumb", () => {
        const { asFragment } = render(
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/products">
                            Products
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Shirts</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
