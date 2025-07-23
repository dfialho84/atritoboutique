import { expect } from "@jest/globals";
import { cn } from "./utils";

describe("cn", () => {
    it("should merge class names", () => {
        expect(cn("foo", "bar")).toBe("foo bar");
    });

    it("should handle conditional classes", () => {
        expect(cn("foo", false && "bar", "baz")).toBe("foo baz");
        expect(cn("foo", 0 && "bar", "baz")).toBe("foo baz");
        expect(cn("foo", null, undefined, "bar")).toBe("foo bar");
    });

    it("should merge tailwind classes correctly", () => {
        expect(cn("p-2", "p-4")).toBe("p-4");
        expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
    });

    it("should handle arrays of classes", () => {
        expect(cn(["foo", "bar"], "baz")).toBe("foo bar baz");
        expect(cn(["foo", false && "bar"], "baz")).toBe("foo baz");
    });

    it("should return an empty string if no classes are provided", () => {
        expect(cn()).toBe("");
        expect(cn(null, undefined, false, 0)).toBe("");
    });
});
