import {
    createFilters,
    getCategory,
    getProduct,
    getSuggestion,
} from "../src/utils/search";
import {
    mockSearchInput,
    mockSearchInputCtx,
    mockSearchResults,
} from "./utils/mocks";

test("gets category", () => {
    const category = getCategory("Pants", mockSearchResults);
    expect(category).toEqual(mockSearchResults.categories[0]);
});

test("gets product", () => {
    const product = getProduct("abc123", mockSearchResults);
    expect(product).toEqual(mockSearchResults.products[0]);
});

test("gets suggestion", () => {
    const suggestion = getSuggestion("red pants", mockSearchResults);
    expect(suggestion).toEqual(mockSearchResults.suggestions[0]);
});

test("creates filters", () => {
    const filters = createFilters(mockSearchInput);
    expect(filters).toEqual(mockSearchInputCtx.filters);
});
