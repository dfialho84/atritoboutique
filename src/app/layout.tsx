import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import { Toaster } from "sonner";
import UrlToaster from "@/components/UrlToaster";
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
            <body>
                <ClerkProvider
                    localization={ptBR}
                    afterSignOutUrl="/"
                    signInUrl="/signup"
                    signUpForceRedirectUrl="/"
                    signInForceRedirectUrl="/"
                >
                    <main className="min-h-screen bg-white text-neutral-900">
                        {children}
                    </main>
                    <Toaster richColors position="bottom-center" />
                    <UrlToaster />
                </ClerkProvider>
            </body>
        </html>
    );
}
