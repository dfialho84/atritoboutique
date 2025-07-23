"use client";

import { useUser } from "@clerk/nextjs";
import { ReactNode } from "react";

export type ClerkLoaderProps = {
    children: ReactNode;
    fallback?: ReactNode;
};

export default function ClerkLoader({
    children,
    fallback = null,
}: ClerkLoaderProps) {
    const { isLoaded } = useUser();

    if (!isLoaded) {
        return fallback;
    }

    return <>{children}</>;
}
