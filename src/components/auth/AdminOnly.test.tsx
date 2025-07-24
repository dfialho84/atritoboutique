import { expect } from "@jest/globals";

import { act, render, screen } from "@testing-library/react";

const useAuthMock = jest.fn();
jest.mock("@clerk/clerk-react", () => ({
    useAuth: useAuthMock,
}));

describe("AdminOnly", () => {
    describe("when the user is not loaded", () => {
        it("should not render the children", async () => {
            useAuthMock.mockReturnValue({ isLoaded: false });

            const AdminOnly = (await import("./AdminOnly")).default;

            await act(() => {
                render(
                    <AdminOnly>
                        <h1>Test</h1>
                    </AdminOnly>
                );
            });

            expect(screen.queryByText(/test/i)).not.toBeInTheDocument();
        });

        it("should not render the children undefined", async () => {
            useAuthMock.mockReturnValue({ isLoaded: undefined });

            const AdminOnly = (await import("./AdminOnly")).default;

            await act(() => {
                render(
                    <AdminOnly>
                        <h1>Test</h1>
                    </AdminOnly>
                );
            });

            expect(screen.queryByText(/test/i)).not.toBeInTheDocument();
        });

        it("should return null", async () => {
            useAuthMock.mockReturnValue({ isLoaded: false });

            const AdminOnly = (await import("./AdminOnly")).default;

            const { container } = render(
                <AdminOnly>
                    <h1>Test</h1>
                </AdminOnly>
            );

            expect(container.firstChild).toBeNull();
            expect(container.innerHTML).toBe("");
            expect(container.childNodes).toHaveLength(0);
            expect(container.textContent).toBe("");
        });

        it("should return null after 2 renders", async () => {
            useAuthMock.mockReturnValue({ isLoaded: false });

            const AdminOnly = (await import("./AdminOnly")).default;

            // Teste direto da função do componente
            const result = AdminOnly({ children: <h1>Test</h1> });
            expect(result).toBeNull();

            // Teste também o comportamento no DOM
            const { container } = render(
                <AdminOnly>
                    <h1>Test</h1>
                </AdminOnly>
            );

            expect(container.firstChild).toBeNull();
            expect(container.innerHTML).toBe("");
        });

        it("should specifically test the early return behavior", async () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();

            useAuthMock.mockReturnValue({ isLoaded: false, isSignedIn: true });

            const AdminOnly = (await import("./AdminOnly")).default;

            const { container } = render(
                <AdminOnly>
                    <h1>Test</h1>
                </AdminOnly>
            );

            // Se o early return não funcionar, o código continuaria e poderia
            // tentar acessar propriedades de auth que não existem
            expect(container.firstChild).toBeNull();

            consoleSpy.mockRestore();
        });

        it("should not execute any rendering logic when not loaded", async () => {
            useAuthMock.mockReturnValue({
                isLoaded: false,
                isSignedIn: undefined, // valores indefinidos para garantir que não são verificados
                sessionClaims: undefined,
            });

            const AdminOnly = (await import("./AdminOnly")).default;

            const { container } = render(
                <AdminOnly>
                    <h1>Test</h1>
                </AdminOnly>
            );

            // Garante que absolutamente nada foi renderizado
            expect(container.childNodes).toHaveLength(0);
            expect(container.textContent).toBe("");
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

        it("should handle truthy isLoaded values correctly", async () => {
            // Teste com isLoaded = true para garantir que o código continua
            useAuthMock.mockReturnValue({
                isLoaded: true,
                isSignedIn: false,
            });

            const AdminOnly = (await import("./AdminOnly")).default;

            const { container } = render(
                <AdminOnly>
                    <h1>Test</h1>
                </AdminOnly>
            );

            // Quando isLoaded é true, o componente deve processar as outras condições
            // e não renderizar o conteúdo (pois isSignedIn é false)
            expect(container.childNodes).toHaveLength(0);
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
