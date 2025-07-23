import Link from "next/link";
import AdminBreadcrumbs from "./AdminBreadcrumbs";
import ClientUserButton from "../ClientUserButton";

export default function AdminNavbar() {
    return (
        <header className="border-b shadow-sm px-6">
            <div className="flex items-center justify-between pt-4 container mx-auto">
                <h1 className="text-6xl font-andes">
                    <Link href="/">Atrito</Link>
                </h1>
                <div className="flex justify-between flex-1 border-l-2 ml-4 pl-4">
                    <h2 className="text-5xl text-gray-600">Administração</h2>
                    <ClientUserButton />
                </div>
            </div>
            <div className="my-2 container mx-auto">
                <AdminBreadcrumbs />
            </div>
        </header>
    );
}
