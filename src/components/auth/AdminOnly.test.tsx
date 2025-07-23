import { expect } from "@jest/globals";

import { render, screen } from "@testing-library/react";

const useAuthMock = jest.fn();
jest.mock("@clerk/clerk-react", () => ({
    useAuth: useAuthMock,
}));

describe("AdminOnly", () => {
    describe("when the user is not loaded", () => {
        it("should not render the children", async () => {
            useAuthMock.mockReturnValue({ isLoaded: false });

            const AdminOnly = (await import("./AdminOnly")).default;

            const { container } = render(
                <AdminOnly>
                    <h1>Test</h1>
                </AdminOnly>
            );

            expect(container.firstChild).toBeNull();
        });
    });

    describe("when the user is not autehnticated", () => {
        it("should not render the children", async () => {
            useAuthMock.mockReturnValue({ isLoaded: true, isSignedIn: false });
            const AdminOnly = (await import("./AdminOnly")).default;

            render(
                <AdminOnly>
                    <h1>Test</h1>
                </AdminOnly>
            );

            expect(
                screen.queryByRole("heading", { name: /test/i })
            ).not.toBeInTheDocument();
        });
    });

    describe("when the user is autehnticated", () => {
        describe("and is not an admin", () => {
            it("should not render the children", async () => {
                useAuthMock.mockReturnValue({
                    isLoaded: true,
                    isSignedIn: true,
                    sessionClaims: {
                        metadata: {
                            role: "user",
                        },
                    },
                });
                const AdminOnly = (await import("./AdminOnly")).default;
                render(
                    <AdminOnly>
                        <h1>Test</h1>
                    </AdminOnly>
                );

                expect(
                    screen.queryByRole("heading", { name: /test/i })
                ).not.toBeInTheDocument();
            });
        });

        describe("and is an admin", () => {
            it("should render the children", async () => {
                useAuthMock.mockReturnValue({
                    isLoaded: true,
                    isSignedIn: true,
                    sessionClaims: {
                        metadata: {
                            role: "admin",
                        },
                    },
                });
                const AdminOnly = (await import("./AdminOnly")).default;
                render(
                    <AdminOnly>
                        <h1>Test</h1>
                    </AdminOnly>
                );

                expect(
                    screen.queryByRole("heading", { name: /test/i })
                ).toBeInTheDocument();
            });
        });
    });
});
