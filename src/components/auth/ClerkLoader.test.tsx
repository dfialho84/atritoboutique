import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ClerkLoader from "./ClerkLoader";
import { useUser } from "@clerk/nextjs";

// Mock useUser from @clerk/nextjs
jest.mock("@clerk/nextjs", () => ({
    useUser: jest.fn(),
}));

const mockUseUser = useUser as jest.Mock;

describe("ClerkLoader", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders fallback when not loaded", () => {
        mockUseUser.mockReturnValue({ isLoaded: false });
        render(
            <ClerkLoader fallback={<div>Loading...</div>}>
                <div>Protected Content</div>
            </ClerkLoader>
        );
        expect(screen.getByText("Loading...")).toBeInTheDocument();
        expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
    });

    it("renders children when loaded", () => {
        mockUseUser.mockReturnValue({ isLoaded: true });
        render(
            <ClerkLoader fallback={<div>Loading...</div>}>
                <div>Protected Content</div>
            </ClerkLoader>
        );
        expect(screen.getByText("Protected Content")).toBeInTheDocument();
        expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    it("renders null as fallback by default", () => {
        mockUseUser.mockReturnValue({ isLoaded: false });
        const { container } = render(
            <ClerkLoader>
                <div>Protected Content</div>
            </ClerkLoader>
        );
        expect(container).toBeEmptyDOMElement();
    });
});
