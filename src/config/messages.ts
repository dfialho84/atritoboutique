export type ErrorMessage = "only-admin";

export type ErrorDictionary = Record<ErrorMessage, string>;

export const errorMessages: ErrorDictionary = {
    "only-admin": "Você precisa ser um administrador para acessar esta página.",
};
