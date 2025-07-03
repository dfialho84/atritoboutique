import { expect } from "@jest/globals";
import { render } from "@testing-library/react";

import SignUpPage from "./page";

describe("SignUpPage", () => {
    const redirectMock = jest.fn();

    beforeEach(() => {
        jest.mock("@clerk/nextjs", () => ({
            SignUp: () => <div>Sign Up Component</div>,
            SignIn: () => <div>Sign In Component</div>,
            ClerkProvider: ({
                children,
            }: Readonly<{
                children: React.ReactNode;
            }>) => <>{children}</>,
        }));

        jest.mock("next/navigation", () => ({
            redirect: redirectMock,
        }));
    });

    describe("when user is not logged in", () => {
        it("renders the SignUp and SignIn components", () => {
            const { getByText } = render(<SignUpPage />);

            expect(getByText("Sign Up Component")).toBeInTheDocument();
            expect(getByText("Sign In Component")).toBeInTheDocument();
        });
    });

    describe("when user is logged in", () => {
        beforeEach(() => {
            jest.mock("@clerk/nextjs/server", () => ({
                currentUser: jest.fn().mockResolvedValue({}),
            }));
        });

        it("redirects to the home page", async () => {
            const component = await SignUpPage();
            render(component);

            expect(redirectMock).toHaveBeenCalledWith("/");
        });
    });
});
