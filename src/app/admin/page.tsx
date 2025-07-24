import { AdminbreadcrumbsSetter } from "@/components/admin/AdminBreadcrumbs";
import { Shirt } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Administração",
    description: "Loja de roupas e acessórios",
};

const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Administração", href: "/admin" },
];

export default function AdminPage() {
    return (
        <div className="container mx-auto mt-4">
            <Suspense>
                <AdminbreadcrumbsSetter breadcrombs={breadcrumbs} />
            </Suspense>
            <ul>
                <li className="bg-zinc-100 p-4 rounded-lg mb-4 hover:underline">
                    <Link
                        href="/admin/products"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                        <Shirt />
                        <span>Produtos</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
