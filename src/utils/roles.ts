import { Roles } from "@/types/globals";
import { auth } from "@clerk/nextjs/server";

export const isAdmin = async (): Promise<boolean> => {
    return checkRole("admin");
    // return Promise.resolve(true);
};

export const checkRole = async (role: Roles): Promise<boolean> => {
    const { sessionClaims } = await auth();
    return sessionClaims?.metadata?.role === role;
};
