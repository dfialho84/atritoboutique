"use client";
import Link from "next/link";
import AdminOnly from "./auth/AdminOnly";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

export default function NavbarUserArea() {
    const { isLoaded } = useUser();

    if (!isLoaded) {
        return null;
    }

    return (
        <nav className="space-x-6 text-sm font-medium flex items-center">
            <AdminOnly>
                <Link href="/admin" className="hover:text-primary">
                    Administração
                </Link>
            </AdminOnly>
            <SignedOut>
                <Link href="/signup" className="hover:text-primary">
                    Entrar / Registrar-se
                </Link>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    );
}
