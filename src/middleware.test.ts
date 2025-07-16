import { ClerkMiddlewareAuth } from "@clerk/nextjs/server";
import { expect } from "@jest/globals";
import { NextMiddlewareResult } from "next/dist/server/web/types";
import { NextRequest } from "next/server";

const clerkMiddlewareMock = jest.fn();
const createRouteMatcherMock = jest.fn();

jest.mock("@clerk/nextjs/server", () => ({
    clerkMiddleware: clerkMiddlewareMock,
    ClerkMiddlewareAuth: jest.fn(),
    createRouteMatcher: createRouteMatcherMock,
}));

const NextResponseMock = {
    redirect: jest.fn(),
};

jest.mock("next/server", () => ({
    NextRequest: jest.fn(),
    NextResponse: NextResponseMock,
}));

describe("middleware", () => {
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });

    it("should call createRouteMatcher with the correct pattern", async () => {
        const pattern = ["/admin(.*)"];

        await import("./middleware");

        expect(createRouteMatcherMock).toHaveBeenCalledWith(pattern);
    });

    it("should export the clerkMiddleware as default", async () => {
        const mockedResult = jest.fn() as unknown as NextMiddlewareResult;
        clerkMiddlewareMock.mockReturnValue(mockedResult);

        const middlewareModule = await import("./middleware");
        const middleware = middlewareModule.default;

        expect(middleware).toBe(mockedResult);
    });

    it("should call the clerkMiddleware with adminProtection", async () => {
        const middlewareModule = await import("./middleware");
        const adminProtection = middlewareModule.adminProtection;

        expect(clerkMiddlewareMock).toHaveBeenCalledWith(adminProtection);
    });

    it("should have the correct config.matcher array", async () => {
        const middlewareModule = await import("./middleware");
        const config = middlewareModule.config;

        expect(config).toHaveProperty("matcher");
        expect(Array.isArray(config.matcher)).toBe(true);
        expect(config.matcher.length).toBeGreaterThan(0);
    });

    describe("adminProtection", () => {
        describe("when the route is not protectred", () => {
            it("should not redirect when the user is authenticated", async () => {
                createRouteMatcherMock.mockReturnValue(() => false);

                const auth = jest.fn().mockResolvedValue({
                    sessionClaims: {
                        metadata: { role: "user" },
                    },
                }) as unknown as ClerkMiddlewareAuth;
                const req = {
                    url: "http://localhost",
                } as unknown as NextRequest;

                const { adminProtection } = await import("./middleware");
                await adminProtection(auth, req);

                expect(NextResponseMock.redirect).not.toHaveBeenCalled();
            });

            it("should not redirect when the user is not authenticated", async () => {
                createRouteMatcherMock.mockReturnValue(() => false);

                const auth = jest
                    .fn()
                    .mockResolvedValue({}) as unknown as ClerkMiddlewareAuth;
                const req = {
                    url: "http://localhost",
                } as unknown as NextRequest;

                const { adminProtection } = await import("./middleware");
                await adminProtection(auth, req);

                expect(NextResponseMock.redirect).not.toHaveBeenCalled();
            });
        });

        describe("when the route is protected", () => {
            beforeEach(() => {
                createRouteMatcherMock.mockReturnValue(() => true);
            });

            describe("and the user is not an admin", () => {
                let auth: ClerkMiddlewareAuth;
                let req: NextRequest;

                beforeEach(() => {
                    auth = jest.fn().mockResolvedValue({
                        sessionClaims: {
                            metadata: { role: "user" },
                        },
                    }) as unknown as ClerkMiddlewareAuth;

                    req = {
                        url: new URL("http://localhost"),
                        nextUrl: {
                            clone: jest
                                .fn()
                                .mockReturnValue(new URL("http://localhost")),
                        },
                    } as unknown as NextRequest;
                    NextResponseMock.redirect.mockResolvedValue("xxxx");
                });

                it("should redirect if the user is not an admin", async () => {
                    const { adminProtection } = await import("./middleware");

                    const result = await adminProtection(auth, req);

                    expect(result).toBe("xxxx");
                });

                it("should redirect and put the error code on the url query param", async () => {
                    const url = new URL(
                        "/?error=only-admin",
                        "http://localhost"
                    );

                    const { adminProtection } = await import("./middleware");

                    await adminProtection(auth, req);

                    expect(NextResponseMock.redirect).toHaveBeenCalledWith(url);
                });
            });

            it("should not redirect if the user is an admin", async () => {
                const auth = jest.fn().mockResolvedValue({
                    sessionClaims: {
                        metadata: { role: "admin" },
                    },
                }) as unknown as ClerkMiddlewareAuth;
                const req = {
                    url: "http://localhost",
                } as unknown as NextRequest;

                NextResponseMock.redirect.mockResolvedValue("xxxx");

                const { adminProtection } = await import("./middleware");

                await adminProtection(auth, req);

                expect(NextResponseMock.redirect).not.toHaveBeenCalled();
            });
        });
    });

    describe("config", () => {
        it("should have the correct matcher array", async () => {
            const middlewareModule = await import("./middleware");
            const config = middlewareModule.config;

            expect(config).toHaveProperty("matcher");
            expect(Array.isArray(config.matcher)).toBe(true);
            expect(config.matcher.length).toBeGreaterThan(0);
        });

        it("should match the expected patterns", async () => {
            const middlewareModule = await import("./middleware");
            const config = middlewareModule.config;

            expect(config.matcher).toEqual([
                "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
                "/(api|trpc)(.*)",
            ]);
        });
    });
});
