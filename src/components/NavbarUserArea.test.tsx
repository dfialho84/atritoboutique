import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";

const useUserMock = jest.fn();

const signedOutMock = jest.fn();
const signedInMock = jest.fn();

jest.mock("@clerk/nextjs", () => ({
    useUser: useUserMock,
    SignedOut: signedOutMock,
    SignedIn: signedInMock,
    UserButton: () => <div>User Button</div>,
}));

const adminOnlyMock = jest.fn();

jest.mock("./auth/AdminOnly", () => ({
    __esModule: true,
    default: adminOnlyMock,
}));

describe("NavbarUserArea", () => {
    describe("when the component is not loaded", () => {
        it("should return null", async () => {
            useUserMock.mockReturnValue({ isLoaded: false });
            const NavbarUserArea = (await import("./NavbarUserArea")).default;

            const { container } = render(<NavbarUserArea />);
            expect(container.firstChild).toBeNull();
        });
    });

    describe("when the component is loaded", () => {
        describe("and the the user is not logged in", () => {
            beforeEach(() => {
                useUserMock.mockReturnValue({ isLoaded: true });
                signedOutMock.mockImplementation(({ children }) => (
                    <div>{children}</div>
                ));
            });

            it("should show the register link", async () => {
                const NavbarUserArea = (await import("./NavbarUserArea"))
                    .default;

                render(<NavbarUserArea />);
                expect(
                    screen.getByRole("link", { name: /registrar-se/i })
                ).toHaveTextContent("Entrar / Registrar-se");
            });

            it('the "Registrar-se" link redirects to /signup', async () => {
                const NavbarUserArea = (await import("./NavbarUserArea"))
                    .default;
                render(<NavbarUserArea />);
                const link = screen.getByRole("link", {
                    name: /registrar-se/i,
                });
                expect(link).toHaveAttribute("href", "/signup");
            });

            it("the admin link should not be present", async () => {
                const NavbarUserArea = (await import("./NavbarUserArea"))
                    .default;
                render(<NavbarUserArea />);
                expect(
                    screen.queryByRole("link", { name: /Administração/i })
                ).not.toBeInTheDocument();
            });
        });

        describe("and the the user is logged in", () => {
            beforeEach(() => {
                useUserMock.mockReturnValue({ isLoaded: true });
                signedInMock.mockImplementation(({ children }) => (
                    <div>{children}</div>
                ));
            });

            it("The components inside SignedIn must be rendered", async () => {
                const NavbarUserArea = (await import("./NavbarUserArea"))
                    .default;
                render(<NavbarUserArea />);
                expect(screen.getByText("User Button")).toBeInTheDocument();
            });

            describe("but the user is not and admin", () => {
                it("the admin link should not be present", async () => {
                    const NavbarUserArea = (await import("./NavbarUserArea"))
                        .default;
                    render(<NavbarUserArea />);
                    expect(
                        screen.queryByRole("link", { name: /Administração/i })
                    ).not.toBeInTheDocument();
                });
            });

            describe("and the the user is an admin", () => {
                it("the admin link should be present", async () => {
                    adminOnlyMock.mockImplementation(({ children }) => (
                        <div>{children}</div>
                    ));
                    const NavbarUserArea = (await import("./NavbarUserArea"))
                        .default;
                    render(<NavbarUserArea />);
                    expect(
                        screen.queryByRole("link", { name: /Administração/i })
                    ).toBeInTheDocument();
                });
            });
        });
    });
});
