import { searchProductClickHandler } from "../../../src/handlers";

test("sends snowplow event", () => {
    searchProductClickHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "search",
        "product-click",
        "<sku>",
        "<pageType>",
        undefined,
        [
            {
                data: {
                    page: 1,
                    perPage: 20,
                    query: "red patns",
                    refinementAttribute: undefined,
                    refinementSelection: undefined,
                    sortOrder: "descending",
                    sortType: "relevance",
                    source: "search-bar",
                },
                schema:
                    "iglu:com.adobe.magento.entity/search-input/jsonschema/1-0-2",
            },
            {
                data: {
                    categories: [
                        {
                            name: "Pants",
                            rank: 1,
                            url: "https://magento.com/category/pants",
                        },
                        {
                            name: "Bottoms",
                            rank: 2,
                            url: "https://magento.com/category/bottoms",
                        },
                    ],
                    categoryCount: 2,
                    page: 1,
                    perPage: 20,
                    productCount: 1,
                    products: [
                        {
                            imageUrl: "https://magento.com/red-pants.jpg",
                            name: "Red Pants",
                            price: 49.99,
                            rank: 1,
                            sku: "abc123",
                            url: "https://magento.com/red-pants",
                        },
                    ],
                    suggestionCount: 1,
                    suggestions: [{ rank: 1, suggestion: "red pants" }],
                },
                schema:
                    "iglu:com.adobe.magento.entity/search-results/jsonschema/1-0-3",
            },
            {
                data: {
                    imageUrl: "https://magento.com/red-pants.jpg",
                    name: "Red Pants",
                    price: 49.99,
                    rank: 1,
                    sku: "abc123",
                    url: "https://magento.com/red-pants",
                },
                schema:
                    "iglu:com.adobe.magento.entity/search-result-product/jsonschema/1-0-1",
            },
        ],
    );
});
