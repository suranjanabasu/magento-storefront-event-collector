import { createSearchResultCategoryCtx } from "../../../src/contexts";

test("creates context", () => {
    const ctx = createSearchResultCategoryCtx();

    expect(ctx).toEqual({
        data: {
            name: "Pants",
            rank: 1,
            url: "https://magento.com/category/pants",
        },
        schema:
            "iglu:com.adobe.magento.entity/search-result-category/jsonschema/1-0-1",
    });
});
