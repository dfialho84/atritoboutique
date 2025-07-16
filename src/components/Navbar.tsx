import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import AdminOnly from "./auth/AdminOnly";

export default async function Navbar() {
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm">
            <h1 className="text-6xl font-andes">
                <Link href="/">Atrito</Link>
            </h1>
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
        </header>
    );
}
