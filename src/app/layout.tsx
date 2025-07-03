import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
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
        <ClerkProvider localization={ptBR}>
            <html lang="pt-BR">
                <body>
                    <main className="min-h-screen bg-white text-neutral-900">
                        {children}
                    </main>
                </body>
            </html>
        </ClerkProvider>
    );
}
