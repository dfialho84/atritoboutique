import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";

import RootLayout from "./layout";

describe("RootLayout", () => {
    it("renders the main layout with children", () => {
        render(
            <RootLayout>
                <div>Test Content</div>
            </RootLayout>
        );
        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });
});
