import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import AdminPage from "./page";

describe("AdminPage", () => {
    it("renders the admin page with correct content", () => {
        render(<AdminPage />);

        expect(
            screen.getByRole("heading", { name: /Administração/i })
        ).toBeInTheDocument();
    });
});
