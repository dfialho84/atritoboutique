import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";

jest.mock("./NavbarUserArea", () => ({
    __esModule: true,
    default: () => <nav>Navbar User Area</nav>,
}));

import Navbar from "./Navbar";

describe("Navbar", () => {
    it("the Atrito header must be a link to home page", () => {
        render(<Navbar />);

        expect(
            screen.getByRole("heading", { name: /Atrito/i })
        ).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /Atrito/i })).toHaveAttribute(
            "href",
            "/"
        );
    });

    it("renders the NavbarUserArea", async () => {
        render(<Navbar />);
        expect(await screen.findByRole("navigation")).toBeInTheDocument();
        expect(await screen.findByRole("navigation")).toHaveTextContent(
            "Navbar User Area"
        );
    });
});
