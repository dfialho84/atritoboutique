import { expect } from "@jest/globals";

import { render, screen } from "@testing-library/react";

const isAdminMock = jest.fn();

jest.mock("../../utils/roles", () => ({
    isAdmin: isAdminMock,
}));

describe("AdminOnly", () => {
    describe("when the user is no autehnticated", () => {
        it("should not render the children", async () => {
            isAdminMock.mockResolvedValue(false);
            const AdminOnly = (await import("./AdminOnly")).default;
            const component = await AdminOnly({ children: <h1>Test</h1> });
            render(component);

            expect(
                screen.queryByRole("heading", { name: /test/i })
            ).not.toBeInTheDocument();
        });
    });

    describe("when the user is autehnticated", () => {
        describe("and is not an admin", () => {
            it("should not render the children", async () => {
                isAdminMock.mockResolvedValue(false);
                const AdminOnly = (await import("./AdminOnly")).default;
                const component = await AdminOnly({ children: <h1>Test</h1> });
                render(component);

                expect(
                    screen.queryByRole("heading", { name: /test/i })
                ).not.toBeInTheDocument();
            });
        });

        describe("and is an admin", () => {
            it("should render the children", async () => {
                isAdminMock.mockReturnValue(true);
                const AdminOnly = (await import("./AdminOnly")).default;
                const component = await AdminOnly({ children: <h1>Test</h1> });
                render(component);

                expect(
                    screen.queryByRole("heading", { name: /test/i })
                ).toBeInTheDocument();
            });
        });
    });
});
