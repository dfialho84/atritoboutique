import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import AdminLayout from "./layout";

jest.mock("../../components/admin/AdminNavbar", () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe("AdminLayout", () => {
    it("matches snapshot", () => {
        const { container } = render(
            <AdminLayout>
                <div>Test</div>
            </AdminLayout>
        );
        expect(container).toMatchSnapshot();
    });
});
