import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
    it("matches snapshot with default props", () => {
        const { container } = render(<Button>Click me</Button>);
        expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot with variant and size", () => {
        const { container } = render(
            <Button variant="destructive" size="lg">
                Delete
            </Button>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot link and size sm", () => {
        const { container } = render(
            <Button variant={"link"} size="sm">
                Delete
            </Button>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot ghost and size lg", () => {
        const { container } = render(
            <Button variant={"ghost"} size="lg">
                Delete
            </Button>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot secondary and size default", () => {
        const { container } = render(
            <Button variant={"secondary"} size="default">
                Delete
            </Button>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot with icon", () => {
        const Icon = () => (
            <svg data-testid="icon" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" />
            </svg>
        );
        const { container, getByTestId } = render(
            <Button size="icon">
                <Icon />
                With Icon
            </Button>
        );
        expect(getByTestId("icon")).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    it("renders disabled button", () => {
        const { getByRole } = render(<Button disabled>Disabled</Button>);
        const button = getByRole("button");
        expect(button).toBeDisabled();
        expect(button).toMatchSnapshot();
    });

    it("applies custom className", () => {
        const { container } = render(
            <Button className="custom-class">Custom</Button>
        );
        expect(container.firstChild).toHaveClass("custom-class");
        expect(container.firstChild).toMatchSnapshot();
    });

    it("matches snapshot with asChild", () => {
        const { container } = render(
            <Button asChild>
                <a href="#">Link Button</a>
            </Button>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
