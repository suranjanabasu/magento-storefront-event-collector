import { createRecommendedItemCtx } from "../../../src/contexts";
import schemas from "../../../src/schemas";
import { mockRecommendedItemsCtx } from "../../utils/mocks/context";

test("creates context", () => {
    const ctx = createRecommendedItemCtx("abc123", 2051);

    expect(ctx).toEqual({
        data: mockRecommendedItemsCtx[0],
        schema: schemas.RECOMMENDED_ITEM_SCHEMA_URL,
    });
});
