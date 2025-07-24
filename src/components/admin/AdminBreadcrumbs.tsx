"use client";

import {
    useBreadcrumbContext,
    BreadcrumbItem as Item,
} from "@/contexts/BreadcrumbProvider";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Fragment, useEffect } from "react";

export default function AdminBreadcrumbs() {
    const [breadcrumbs] = useBreadcrumbContext();

    const allButLast = breadcrumbs.slice(0, -1);
    const last = breadcrumbs.at(-1);

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {allButLast.map(({ label, href }) => {
                    return (
                        <Fragment key={href}>
                            <BreadcrumbItem key={href}>
                                <BreadcrumbLink href={href}>
                                    {label}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </Fragment>
                    );
                })}
                {last && (
                    <BreadcrumbItem key={last.href}>
                        <BreadcrumbLink
                            href={last.href}
                            className="hover:text-primary transition-colors"
                        >
                            {last.label}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

export type BreadcrumbContextProps = {
    breadcrombs: Item[];
};

export function AdminbreadcrumbsSetter(props: BreadcrumbContextProps) {
    const [, setBreadcrumbs] = useBreadcrumbContext();

    useEffect(() => {
        setBreadcrumbs(props.breadcrombs);
    });

    return null;
}
