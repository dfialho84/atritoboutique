import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";

import RootLayout from "./layout";

jest.mock("@clerk/nextjs", () => ({
    ClerkProvider: ({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) => <>{children}</>,
}));

describe("RootLayout", () => {
    it("renders the main layout with children", () => {
        render(
            <RootLayout>
                <div>Test Content</div>
            </RootLayout>
        );
        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("has correct language attribute", () => {
        render(
            <RootLayout>
                <div>Test Content</div>
            </RootLayout>
        );
        expect(document.documentElement.lang).toBe("pt-BR");
    });
});
