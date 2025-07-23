import AdminNavbar from "@/components/admin/AdminNavbar";
import Footer from "@/components/Footer";
import BreadcrumbProvider from "@/contexts/BreadcrumbProvider";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <BreadcrumbProvider>
            <div className="flex flex-col min-h-screen">
                <AdminNavbar />
                <div className="flex-1 container mx-auto">{children}</div>
                <Footer />
            </div>
        </BreadcrumbProvider>
    );
}
