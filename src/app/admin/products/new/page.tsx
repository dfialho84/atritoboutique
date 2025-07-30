import { AdminbreadcrumbsSetter } from "@/components/admin/AdminBreadcrumbs";
import ProductForm from "@/components/forms/ProductForm";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Suspense } from "react";

const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Administração", href: "/admin" },
    { label: "Produtos", href: "/admin/products" },
    { label: "Novo Produto", href: "/admin/products/new" },
];

export default function NewProductPage() {
    return (
        <div className="container mx-auto py-4">
            <Suspense>
                <AdminbreadcrumbsSetter breadcrombs={breadcrumbs} />
            </Suspense>
            <Card>
                <CardHeader>
                    <CardTitle>Novo Produto</CardTitle>
                    <CardDescription>Crie um novo produto</CardDescription>
                    <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                    <ProductForm />
                </CardContent>
                <CardFooter>Footer</CardFooter>
            </Card>
        </div>
    );
}
