import { recsUnitRenderHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import {
    mockRecommendationUnitCtx,
    mockRecommendedItemsCtx,
} from "../../utils/mocks/context";

test("sends snowplow event", () => {
    recsUnitRenderHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "recommendation-unit",
        "impression-render",
        undefined,
        "pdp",
        undefined,
        [
            {
                data: mockRecommendationUnitCtx,
                schema: schemas.RECOMMENDATION_UNIT_SCHEMA_URL,
            },
            {
                data: mockRecommendedItemsCtx[0],
                schema: schemas.RECOMMENDED_ITEM_SCHEMA_URL,
            },
            {
                data: mockRecommendedItemsCtx[1],
                schema: schemas.RECOMMENDED_ITEM_SCHEMA_URL,
            },
        ],
    );
});
