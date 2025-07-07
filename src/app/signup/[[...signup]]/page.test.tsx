import { expect } from "@jest/globals";
import { render } from "@testing-library/react";

jest.mock("@clerk/nextjs", () => ({
    SignUp: () => <div>Sign Up Component</div>,
    SignIn: () => <div>Sign In Component</div>,
    ClerkProvider: ({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) => <>{children}</>,
}));

const redirectMock = jest.fn();

jest.mock("next/navigation", () => ({
    redirect: redirectMock,
}));

const currentUserMock = jest.fn();

jest.mock("@clerk/nextjs/server", () => ({
    currentUser: currentUserMock,
}));

describe("SignUpPage", () => {
    describe("when user is not logged in", () => {
        beforeEach(() => {
            currentUserMock.mockResolvedValue(null);
        });
        it("renders the SignUp and SignIn components", async () => {
            const SignUpPage = (await import("./page")).default;
            const component = await SignUpPage();
            const { getByText } = render(component);
            expect(getByText("Sign Up Component")).toBeInTheDocument();
            expect(getByText("Sign In Component")).toBeInTheDocument();
        });
    });

    describe("when user is logged in", () => {
        beforeEach(() => {
            currentUserMock.mockResolvedValue({
                id: "user-id",
            });
        });

        it("redirects to the home page", async () => {
            const SignUpPage = (await import("./page")).default;
            const component = await SignUpPage();
            render(component);
            expect(redirectMock).toHaveBeenCalledWith("/");
        });
    });
});
