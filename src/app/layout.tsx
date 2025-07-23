import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import { Toaster } from "sonner";
import UrlToaster from "@/components/UrlToaster";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: {
        template: "%s | Atrito Boutique",
        default: "Atrito Boutique",
    },
    description: "Loja de roupas e acessórios",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            localization={ptBR}
            afterSignOutUrl="/"
            signInUrl="/signup"
            signUpForceRedirectUrl="/"
            signInForceRedirectUrl="/"
        >
            <html lang="pt-BR">
                <body>
                    <main className="min-h-screen bg-white text-neutral-900">
                        {children}
                    </main>
                    <Toaster richColors position="bottom-center" />
                    <Suspense>
                        <UrlToaster />
                    </Suspense>
                </body>
            </html>
        </ClerkProvider>
    );
}
