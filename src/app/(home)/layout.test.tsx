import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";

import HomeLayout from "./layout";

jest.mock("../../components/Navbar", () => {
    return function MockNavbar() {
        return <div>Mock Navbar</div>;
    };
});

describe("HomeLayout", () => {
    it("renders the main layout with children", () => {
        render(
            <HomeLayout>
                <div>Test Content</div>
            </HomeLayout>
        );
        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });
});
