import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Loading from "./loading";

describe("Loading", () => {
    it("renders a loading indicator", () => {
        render(<Loading />);
        expect(screen.getByText("Carregando...")).toBeInTheDocument();
    });
});
