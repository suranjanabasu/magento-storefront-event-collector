import { createSearchInputCtx } from "../../../src/contexts";

test("creates context", () => {
    const ctx = createSearchInputCtx();

    expect(ctx).toEqual({
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
        schema: "iglu:com.adobe.magento.entity/search-input/jsonschema/1-0-2",
    });
});
