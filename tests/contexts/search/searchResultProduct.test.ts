import { createSearchResultProductCtx } from "../../../src/contexts";

test("creates context", () => {
    const ctx = createSearchResultProductCtx();

    expect(ctx).toEqual({
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
    });
});
