import { Product } from "../model";
import { Page, PaginatedResult } from "./pagination";

function getProducts(page: Page): Promise<PaginatedResult<Product>> {
    console.log(page);
    return Promise.resolve({
        number: page.number,
        size: page.size,
        items: [],
        totalElements: 0,
    });
}

const productService = {
    getProducts,
};

export default productService;
