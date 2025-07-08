import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import Navbar from "./Navbar";

type SignProps = {
    children: React.ReactNode;
};
type SignFN = (props: SignProps) => React.ReactNode;

let signedOutMock: SignFN = ({ children }: SignProps) => <div>{children}</div>;
let signedInMock: SignFN = ({ children }: SignProps) => <div>{children}</div>;

jest.mock("@clerk/nextjs", () => ({
    SignedOut: ({ children }: SignProps) => signedOutMock({ children }),
    SignedIn: ({ children }: SignProps) => signedInMock({ children }),
    useUser: () => ({ user: null }),
}));

describe("Navbar", () => {
    beforeAll(() => {
        jest.clearAllMocks();
    });

    describe("when user is signed out", () => {
        beforeEach(() => {
            signedOutMock = ({ children }: SignProps) => {
                return <div>{children}</div>;
            };
            signedInMock = () => null;
        });

        it("renders the main header", () => {
            render(<Navbar />);
            expect(screen.getByRole("heading")).toBeInTheDocument();
            expect(screen.getByRole("heading")).toHaveTextContent("Atrito");
        });

        it("renders the register link", () => {
            render(<Navbar />);
            expect(
                screen.getByRole("link", { name: "Entrar / Registrar-se" })
            ).toHaveTextContent("Entrar / Registrar-se");
        });

        it('the "Registrar-se" link redirects to /signup', () => {
            render(<Navbar />);
            const link = screen.getByRole("link", { name: /registrar-se/i });
            expect(link).toHaveAttribute("href", "/signup");
        });

        it("the Atrito header must be a link to home page", () => {
            render(<Navbar />);
            const header = screen.getByRole("link", { name: /Atrito/i });
            expect(header).toHaveAttribute("href", "/");
        });
    });

    describe("when user is signed in", () => {
        it("fails", () => {
            expect(true).toBe(false);
        });
    });
});
