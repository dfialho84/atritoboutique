import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
    it("renders without crashing", () => {
        const { container } = render(<Spinner />);
        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("applies the animate-spin class", () => {
        const { container } = render(<Spinner />);
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass("animate-spin");
    });

    it("uses the default size when no size prop is provided", () => {
        const { container } = render(<Spinner />);
        const svg = container.querySelector("svg");
        // lucide-react sets width/height attributes based on size prop
        expect(svg).toHaveAttribute("width", "32");
        expect(svg).toHaveAttribute("height", "32");
    });

    it("uses the provided size prop", () => {
        const { container } = render(<Spinner size={48} />);
        const svg = container.querySelector("svg");
        expect(svg).toHaveAttribute("width", "48");
        expect(svg).toHaveAttribute("height", "48");
    });
});
