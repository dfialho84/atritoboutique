import { expect } from "@jest/globals";
import { render } from "@testing-library/react";

import SignUpPage from "./page";

// Mock the SignUp and SignIn components from @clerk/nextjs
jest.mock("@clerk/nextjs", () => ({
    SignUp: () => <div>Sign Up Component</div>,
    SignIn: () => <div>Sign In Component</div>,
    ClerkProvider: ({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) => <>{children}</>,
}));

describe("SignUpPage", () => {
    it("renders the SignUp and SignIn components", () => {
        const { getByText } = render(<SignUpPage />);

        expect(getByText("Sign Up Component")).toBeInTheDocument();
        expect(getByText("Sign In Component")).toBeInTheDocument();
    });
});
