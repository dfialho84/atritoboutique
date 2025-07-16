import { expect } from "@jest/globals";
import { render } from "@testing-library/react";

const useSearchParamsMock = jest.fn().mockImplementation(() => ({
    get: jest.fn(),
}));

const useRouterMock = jest.fn().mockImplementation(() => ({
    replace: jest.fn(),
}));

const usePathnameMock = jest.fn().mockImplementation(() => "/");

jest.mock("next/navigation", () => ({
    usePathname: usePathnameMock,
    useRouter: useRouterMock,
    useSearchParams: useSearchParamsMock,
}));

const toastMock = {
    error: jest.fn(),
};
jest.mock("sonner", () => ({
    toast: toastMock,
}));

describe("UrlToaster", () => {
    it("should return null", async () => {
        const UrlToaster = (await import("./UrlToaster")).default;

        const { container } = render(<UrlToaster />);

        expect(container.firstChild).toBeNull();
    });

    it("should not call a toast if there is no error in search params", async () => {
        const UrlToaster = (await import("./UrlToaster")).default;

        render(<UrlToaster />);

        expect(toastMock.error).not.toHaveBeenCalled();
    });

    it("should not call a toast if the error in search params is not a valid key", async () => {
        const getMock = jest.fn().mockReturnValue("invalid-error");
        useSearchParamsMock.mockImplementation(() => ({
            get: getMock,
        }));

        const UrlToaster = (await import("./UrlToaster")).default;

        render(<UrlToaster />);

        expect(getMock).toHaveBeenCalledWith("error");
        expect(toastMock.error).not.toHaveBeenCalled();
    });

    it("should call a toast if the error in search params is a valid key", async () => {
        useSearchParamsMock.mockImplementation(() => ({
            get: jest.fn().mockReturnValue("only-admin"),
        }));

        const UrlToaster = (await import("./UrlToaster")).default;

        render(<UrlToaster />);

        expect(toastMock.error).toHaveBeenCalled();
        expect(toastMock.error).toHaveBeenCalledWith(
            "Você precisa ser um administrador para acessar esta página."
        );
    });

    it("should replace the search params is a valid key", async () => {
        useSearchParamsMock.mockImplementation(() => ({
            get: jest.fn().mockReturnValue("only-admin"),
            toString: () => "error=only-admin",
        }));
        const replaceMock = jest.fn();
        useRouterMock.mockImplementation(() => ({
            replace: replaceMock,
        }));
        usePathnameMock.mockImplementation(() => "/test-path");

        const UrlToaster = (await import("./UrlToaster")).default;

        render(<UrlToaster />);

        expect(replaceMock).toHaveBeenCalled();
        expect(replaceMock).toHaveBeenCalledWith(
            expect.stringContaining("/test-path"),
            {
                scroll: false,
            }
        );
        expect(replaceMock).not.toHaveBeenCalledWith(
            expect.stringContaining("error"),
            {
                scroll: false,
            }
        );
    });
});
