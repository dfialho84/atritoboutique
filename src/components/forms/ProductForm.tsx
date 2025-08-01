"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import { Button } from "../ui/button";
import FormCheck from "./FormCheck";
import FormMoneyInput from "./FormMoneyInput";
import FormImageUploader from "./FormImageUploader";

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
    name: z.string().min(3, "O Nome deve ter pelo menos 3 caracteres"),
    description: z.string().min(10, "Descrição é obrigatória"),
    priceInCents: z
        .string()
        .transform((val) => Number(val.replace(",", ".")))
        .refine((val) => !isNaN(val), { message: "Preço inválido" })
        .transform((val) => Math.round(val * 100))
        .refine((val) => val >= 0, {
            message: "Preço deve ser um valor positivo",
        })
        .transform((val) => val.toString()),
    isActive: z.boolean(),
});

const productInternalSchema = z.object({
    name: z.string().min(3, "O Nome deve ter pelo menos 3 caracteres"),
    description: z.string().min(10, "Descrição é obrigatória"),
    priceInCents: z.number().positive("Preço deve ser um valor positivo"),
    isActive: z.boolean(),
});

type ProductFormInput = z.infer<typeof productSchema>;

export default function ProductForm() {
    const form = useForm<ProductFormInput, undefined, ProductFormInput>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            description: "",
            priceInCents: "0",
            isActive: true,
        },
    });

    function onSubmit(data: ProductFormInput) {
        console.log("Dados do formulário para o backend:", data);
        console.log("Tipo de priceInCents:", typeof data.priceInCents); // Isso vai imprimir 'number'
        const x = productInternalSchema.parse(data);
        console.log("Dados validados:", x);
    }
    return (
        <Form {...form}>
            <form
                className="flex flex-col gap-8"
                onSubmit={form.handleSubmit((data) => {
                    onSubmit(data);
                })}
            >
                <FormInput
                    form={form}
                    name="name"
                    label="Nome do Produto"
                    placeholder="Nome"
                />
                <FormTextArea
                    form={form}
                    name="description"
                    label="Descrição do Produto"
                    placeholder="Descrição"
                />
                <FormMoneyInput
                    form={form}
                    name="priceInCents"
                    label="Preço"
                    placeholder="Preço"
                />
                <FormCheck form={form} name="isActive" label="Ativo" />
                <FormImageUploader name="images" />
                <div className="flex justify-start gap-4 bg-zinc-100 p-4 rounded-lg">
                    <Button>Salvar</Button>
                    <Button variant="outline">Cancelar</Button>
                </div>
            </form>
        </Form>
    );
}
