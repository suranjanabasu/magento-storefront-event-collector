import { recsItemClickHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import {
    mockRecommendationUnitCtx,
    mockRecommendedItemsCtx,
} from "../../utils/mocks/context";

test("sends snowplow event", () => {
    recsItemClickHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "recommendation-unit",
        "rec-click",
        undefined,
        "<pageType>",
        1,
        [
            {
                data: mockRecommendationUnitCtx,
                schema: schemas.RECOMMENDATION_UNIT_SCHEMA_URL,
            },
            {
                data: mockRecommendedItemsCtx[0],
                schema: schemas.RECOMMENDED_ITEM_SCHEMA_URL,
            },
        ],
    );
});
