"use client";
import {
    createContext,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
} from "react";

export type BreadcrumbItem = {
    label: string;
    href: string;
};

type BreadcrumbContextValue = Optional<
    [BreadcrumbItem[], Dispatch<SetStateAction<BreadcrumbItem[]>>]
>;

const BreadCrumbContext = createContext<BreadcrumbContextValue>(undefined);

export default function BreadcrumbProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
    return (
        <BreadCrumbContext.Provider value={[breadcrumbs, setBreadcrumbs]}>
            {children}
        </BreadCrumbContext.Provider>
    );
}

export function useBreadcrumbContext() {
    const context = useContext(BreadCrumbContext);
    if (!context) {
        throw new Error(
            "useBreadcrumbContext must be used within a BreadcrumbProvider"
        );
    }
    return context;
}
