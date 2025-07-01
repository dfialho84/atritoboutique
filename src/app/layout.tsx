import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Atrito Boutique",
    description: "Loja de roupas e acessórios",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
