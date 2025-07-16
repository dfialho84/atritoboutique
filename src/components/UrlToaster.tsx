"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { ErrorMessage, errorMessages } from "@/config/messages";

export default function UrlToaster() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const error = searchParams.get("error");

        if (error && error in errorMessages) {
            toast.error(errorMessages[error as ErrorMessage]);
            const newParams = new URLSearchParams(searchParams.toString());
            newParams.delete("error");
            router.replace(`${pathname}?${newParams.toString()}`, {
                scroll: false,
            });
        }
    });

    return null;
}
