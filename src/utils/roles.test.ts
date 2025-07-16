import { expect } from "@jest/globals";

const authMock = jest.fn();
jest.mock("@clerk/nextjs/server", () => ({
    auth: authMock,
}));

describe("roles", () => {
    describe("checkRole", () => {
        it("should return false if sessionClaims is undefined", async () => {
            const { checkRole } = await import("./roles");
            authMock.mockResolvedValue({ sessionClaims: undefined });

            const result = await checkRole("admin");

            expect(result).toBe(false);
        });

        it("should return false if sessionClaims.metadata is undefined", async () => {
            const { checkRole } = await import("./roles");
            authMock.mockResolvedValue({ sessionClaims: {} });

            const result = await checkRole("admin");

            expect(result).toBe(false);
        });

        it("should return false if the role is different", async () => {
            const { checkRole } = await import("./roles");
            authMock.mockResolvedValue({
                sessionClaims: { metadata: { role: "user" } },
            });

            const result = await checkRole("admin");

            expect(result).toBe(false);
        });

        it("should return true if the role is equal", async () => {
            const { checkRole } = await import("./roles");
            authMock.mockResolvedValue({
                sessionClaims: { metadata: { role: "admin" } },
            });

            const result = await checkRole("admin");

            expect(result).toBe(true);
        });
    });

    describe("isAdmin", () => {
        it("should return false if checkRole returns false", async () => {
            authMock.mockResolvedValue({
                sessionClaims: { metadata: { role: "user" } },
            });

            const { isAdmin } = await import("./roles");

            const result = await isAdmin();
            expect(result).toBe(false);
        });

        it("should return true if checkRole returns true", async () => {
            authMock.mockResolvedValue({
                sessionClaims: { metadata: { role: "admin" } },
            });

            const { isAdmin } = await import("./roles");

            const result = await isAdmin();
            expect(result).toBe(true);
        });
    });
});
