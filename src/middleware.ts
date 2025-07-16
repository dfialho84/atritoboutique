import {
    clerkMiddleware,
    ClerkMiddlewareAuth,
    createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export async function adminProtection(
    auth: ClerkMiddlewareAuth,
    req: NextRequest
) {
    const { sessionClaims } = await auth();
    if (
        isAdminRoute(req) &&
        (!sessionClaims || sessionClaims.metadata.role !== "admin")
    ) {
        const url = req.nextUrl.clone();
        url.pathname = "";
        url.searchParams.set("error", "only-admin");
        return NextResponse.redirect(url);
    }
}

export default clerkMiddleware(adminProtection);

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
