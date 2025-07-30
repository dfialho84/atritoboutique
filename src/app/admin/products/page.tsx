import { AdminbreadcrumbsSetter } from "@/components/admin/AdminBreadcrumbs";
import { Button } from "@/components/ui/button";
import productService from "@/lib/services/product-service";
import Link from "next/link";
import { Suspense } from "react";

const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Administração", href: "/admin" },
    { label: "Produtos", href: "/admin/products" },
];

function NoProductsMessage() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center bg-zinc-100 p-8 rounded-xl">
                <div className="mb-4">Nenhum produto cadastrado.</div>
                <Button asChild>
                    <Link href="/admin/products/new">Adicionar Produto</Link>
                </Button>
            </div>
        </div>
    );
}

export default async function ProductsPage() {
    const page = { number: 1, size: 10 };
    const result = await productService.getProducts(page);
    return (
        <>
            <Suspense>
                <AdminbreadcrumbsSetter breadcrombs={breadcrumbs} />
            </Suspense>
            <div className="mt-4 h-full flex-1 justify-center flex flex-col">
                {result.totalElements == 0 && <NoProductsMessage />}
            </div>
        </>
    );
}
