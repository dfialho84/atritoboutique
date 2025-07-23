import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { ClerkLoaderProps } from "../../../components/auth/ClerkLoader";

const signUpMock = jest.fn(() => <div>Sign Up Component</div>);

jest.mock("@clerk/nextjs", () => ({
    __esModule: true,
    SignUp: signUpMock,
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

const currentUserMock = jest.fn().mockResolvedValue(null);

jest.mock("@clerk/nextjs/server", () => ({
    __esModule: true,
    currentUser: currentUserMock,
}));

jest.mock("../../../components/auth/ClerkLoader", () => ({
    __esModule: true,
    default: ({ children }: ClerkLoaderProps) => <>{children}</>,
}));

describe("SignUpPage", () => {
    it("should not show the footer of the login form", async () => {
        const SignUpPage = (await import("./page")).default;
        const component = await SignUpPage();
        render(component);

        expect(signUpMock).toHaveBeenCalledTimes(1);
        const props = (signUpMock as jest.Mock).mock.calls[0][0];
        expect(props).toMatchObject({
            signInUrl: "",
            appearance: {
                elements: {
                    footerAction: {
                        display: "none",
                    },
                },
            },
        });
    });

    describe("when user is not logged in", () => {
        beforeEach(() => {
            currentUserMock.mockResolvedValue(null);
        });
        it("renders the SignUp and SignIn components", async () => {
            const SignUpPage = (await import("./page")).default;
            const component = await SignUpPage();
            const { getByText } = await render(component);
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
            await render(component);
            expect(redirectMock).toHaveBeenCalledWith("/");
        });
    });
});
