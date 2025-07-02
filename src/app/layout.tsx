import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <ClerkProvider>
            <html lang="pt-BR">
                <body>
                    <main className="min-h-screen bg-white text-neutral-900">
                        <Navbar />
                        {children}
                        <Footer />
                    </main>
                </body>
            </html>
        </ClerkProvider>
    );
}
