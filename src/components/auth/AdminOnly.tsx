"use client";
import { useAuth } from "@clerk/clerk-react";

type AdminOnlyProps = {
    children: React.ReactNode;
};

export default function AdminOnly({ children }: AdminOnlyProps) {
    const auth = useAuth();

    if (!auth.isLoaded) {
        return null;
    }

    const adminUser =
        auth.isSignedIn && auth.sessionClaims?.metadata.role === "admin";

    return adminUser ? <>{children}</> : null;
}
