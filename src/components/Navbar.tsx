import Link from "next/link";
import NavbarUserArea from "./NavbarUserArea";

export default function Navbar() {
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm">
            <h1 className="text-6xl font-andes">
                <Link href="/">Atrito</Link>
            </h1>
            <NavbarUserArea />
        </header>
    );
}
