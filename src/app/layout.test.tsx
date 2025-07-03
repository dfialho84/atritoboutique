import { render } from "@testing-library/react";
import RootLayout from "./layout";
import { expect } from "@jest/globals";

import { screen } from "@testing-library/react";

jest.mock("@clerk/nextjs", () => ({
    ClerkProvider: ({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) => <>{children}</>,
}));

describe("Layout", () => {
    it("renders the layout with children", () => {
        render(
            <RootLayout>
                <div>Test Content</div>
            </RootLayout>
        );
        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });
});
