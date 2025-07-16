import { render } from "@testing-library/react";
import RootLayout from "./layout";
import { expect } from "@jest/globals";
import { metadata } from "./layout";

import { screen } from "@testing-library/react";

jest.mock("@clerk/nextjs", () => ({
    ClerkProvider: ({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) => <>{children}</>,
}));

jest.mock("sonner", () => ({
    Toaster: jest.fn(),
}));

jest.mock("../components/UrlToaster", () => jest.fn());

describe("Layout", () => {
    it("renders the layout with children", () => {
        render(
            <RootLayout>
                <div>Test Content</div>
            </RootLayout>
        );
        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("should match the snapshot", () => {
        const { container } = render(
            <RootLayout>
                <div>Test Content</div>
            </RootLayout>
        );
        expect(container).toMatchSnapshot();
    });
});

describe("Metadata", () => {
    it("has the correct title and description", () => {
        expect(metadata).toEqual({
            title: "Atrito Boutique",
            description: "Loja de roupas e acessórios",
        });
    });
});
