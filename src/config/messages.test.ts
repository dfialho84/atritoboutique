import { expect } from "@jest/globals";
import { errorMessages, ErrorDictionary, ErrorMessage } from "./messages";

describe("errorMessages", () => {
    it("should have the correct message for 'only-admin'", () => {
        expect(errorMessages["only-admin"]).toBe(
            "Você precisa ser um administrador para acessar esta página."
        );
    });

    it("should have all keys of type ErrorMessage", () => {
        const keys: (keyof typeof errorMessages)[] = Object.keys(
            errorMessages
        ) as ErrorMessage[];
        expect(keys).toContain("only-admin");
        expect(keys.length).toBe(1);
    });

    it("should match the ErrorDictionary type", () => {
        const dict: ErrorDictionary = errorMessages;
        expect(dict["only-admin"]).toBeDefined();
    });
});
