"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useForm, UseFormReturn } from "react-hook-form";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

/*
export type Photo = {
    productId: string;
    order: number;
    url: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
};
*/

const productSchema = z.object({
    name: z.string().min(3, "Nome é obrigatório"),
    description: z.string().min(10, "Descrição é obrigatória"),
    priceInCents: z.number().min(0, "Preço deve ser um valor positivo"),
    isActive: z.boolean(),
});

type ProductSchema = z.infer<typeof productSchema>;

export default function ProductForm() {
    const form: UseFormReturn<ProductSchema> = useForm<ProductSchema>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            description: "",
            priceInCents: 0,
            isActive: true,
        },
    });

    function onSubmit(data: ProductSchema) {
        console.log("Form submitted with data:", data);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormInput
                    form={form}
                    name="name"
                    label="Nome do Produto"
                    placeholder="Nome"
                    description="Nome do produto"
                />
                <FormTextArea
                    className="mt-8"
                    form={form}
                    name="description"
                    label="Descrição do Produto"
                    placeholder="Descrição"
                />
            </form>
        </Form>
    );
}
