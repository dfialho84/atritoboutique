"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";

export default function ClientUserButton() {
    return (
        <SignedIn>
            <UserButton />
        </SignedIn>
    );
}
