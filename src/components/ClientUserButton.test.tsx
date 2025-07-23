import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ClientUserButton from "./ClientUserButton";

jest.mock("@clerk/nextjs", () => ({
    SignedIn: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="signed-in">{children}</div>
    ),
    UserButton: () => <button data-testid="user-button">User</button>,
}));

describe("ClientUserButton", () => {
    it("renders SignedIn component", () => {
        render(<ClientUserButton />);
        expect(screen.getByTestId("signed-in")).toBeInTheDocument();
    });

    it("renders UserButton inside SignedIn", () => {
        render(<ClientUserButton />);
        const signedIn = screen.getByTestId("signed-in");
        const userButton = screen.getByTestId("user-button");
        expect(signedIn).toContainElement(userButton);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<ClientUserButton />);
        expect(asFragment()).toMatchSnapshot();
    });
});
