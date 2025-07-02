import middleware, { config } from "./middleware";
import { expect } from "@jest/globals";

jest.mock("@clerk/nextjs/server", () => ({
    clerkMiddleware: jest.fn(() => "mockedMiddleware"),
}));

describe("middleware", () => {
    it("should export the clerkMiddleware as default", () => {
        expect(middleware).toBe("mockedMiddleware");
    });

    it("should have the correct config.matcher array", () => {
        expect(config).toHaveProperty("matcher");
        expect(Array.isArray(config.matcher)).toBe(true);
        expect(config.matcher.length).toBeGreaterThan(0);
    });
});
