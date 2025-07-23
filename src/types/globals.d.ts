export {};

// Create a type for the roles
export type Roles = "admin" | "user";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles;
        };
    }
    type Optional<T> = T | undefined | null;
}
