export type Page = {
    number: number;
    size: number;
};

export type PaginatedResult<T> = {
    number: number;
    size: number;
    items: T[];
    totalElements: number;
};
