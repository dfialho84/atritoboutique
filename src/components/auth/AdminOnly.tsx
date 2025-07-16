import { isAdmin } from "@/utils/roles";

type AdminOnlyProps = {
    children: React.ReactNode;
};

export default async function AdminOnly({ children }: AdminOnlyProps) {
    const adminUser = await isAdmin();

    return adminUser ? <>{children}</> : null;
}
