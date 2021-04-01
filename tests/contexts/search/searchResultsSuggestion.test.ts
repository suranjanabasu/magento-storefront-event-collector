import { createSearchResultSuggestionCtx } from "../../../src/contexts";

test("creates context", () => {
    const ctx = createSearchResultSuggestionCtx();

    expect(ctx).toEqual({
        data: {
            rank: 1,
            suggestion: "red pants",
        },
        schema:
            "iglu:com.adobe.magento.entity/search-result-suggestion/jsonschema/1-0-1",
    });
});
