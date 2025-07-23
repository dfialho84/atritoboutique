import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import AdminNavbar from "./AdminNavbar";

jest.mock("@clerk/nextjs", () => ({
    SignedIn: jest.fn(),
    UserButton: jest.fn(),
}));

jest.mock("../admin/AdminBreadcrumbs", () => ({
    __esModule: true,
    default: () => <div>Admin Breadcrumbs</div>,
}));

describe("AdminNavbar", () => {
    it("renders the admin navbar with correct content", () => {
        render(<AdminNavbar />);

        expect(screen.getByText(/Administração/i)).toBeInTheDocument();
    });
});
