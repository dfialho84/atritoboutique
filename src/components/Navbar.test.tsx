import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import { ReactElement } from "react";

type SignProps = {
    children: React.ReactNode;
};

const adminOnlyMock = jest.fn(() => (
    <div></div>
)) as unknown as jest.MockedFunction<(props: SignProps) => ReactElement>;

jest.mock("./auth/AdminOnly", () => ({
    __esModule: true,
    default: adminOnlyMock,
}));

const signedOutMock = jest.fn();
const signedInMock = jest.fn();

jest.mock("@clerk/nextjs", () => ({
    SignedOut: signedOutMock,
    SignedIn: signedInMock,
    UserButton: () => <div>User Button</div>,
}));

async function renderNavbar() {
    const Navbar = (await import("./Navbar")).default;
    const component = await Navbar();
    render(component);
}

describe("Navbar", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("the Atrito header must be a link to home page", async () => {
        await renderNavbar();

        expect(
            await screen.findByRole("heading", { name: /Atrito/i })
        ).toBeInTheDocument();
        expect(
            await screen.findByRole("link", { name: /Atrito/i })
        ).toHaveAttribute("href", "/");
    });

    it("renders the main header", async () => {
        await renderNavbar();
        expect(await screen.findByRole("heading")).toBeInTheDocument();
        expect(await screen.findByRole("heading")).toHaveTextContent("Atrito");
    });

    describe("when user is signed out", () => {
        beforeEach(() => {
            signedOutMock.mockImplementation(({ children }: SignProps) => (
                <div>{children}</div>
            ));
        });

        it("renders the register link", async () => {
            await renderNavbar();
            expect(
                await screen.findByRole("link", { name: /registrar-se/i })
            ).toHaveTextContent("Entrar / Registrar-se");
        });

        it('the "Registrar-se" link redirects to /signup', async () => {
            await renderNavbar();
            const link = screen.getByRole("link", { name: /registrar-se/i });
            expect(link).toHaveAttribute("href", "/signup");
        });

        it("the admin link should not be present", async () => {
            await renderNavbar();
            expect(
                screen.queryByRole("link", { name: /Administação/i })
            ).not.toBeInTheDocument();
        });
    });

    describe("when user is signed in", () => {
        beforeEach(() => {
            signedInMock.mockImplementation(({ children }: SignProps) => (
                <div>{children}</div>
            ));
        });

        it("The components inside SignedIn must be rendered", async () => {
            await renderNavbar();
            expect(screen.getByText("User Button")).toBeInTheDocument();
        });

        describe("and the user is not an admin", () => {
            it("the admin link should not be present", async () => {
                await renderNavbar();
                expect(
                    screen.queryByRole("link", { name: /Administação/i })
                ).not.toBeInTheDocument();
            });
        });

        describe("and the user is an admin", () => {
            it("the admin link should be present", async () => {
                adminOnlyMock.mockImplementation(({ children }: SignProps) => (
                    <div>{children}</div>
                ));

                await renderNavbar();
                expect(
                    screen.queryByRole("link", { name: /Administração/i })
                ).toBeInTheDocument();
            });
        });
    });
});
