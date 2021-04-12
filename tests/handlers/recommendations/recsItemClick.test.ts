import { recsItemClickHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import {
    mockEvent,
    mockRecommendationUnitCtx,
    mockRecommendedItemsCtx,
} from "../../utils/mocks";

test("sends snowplow event", () => {
    recsItemClickHandler(mockEvent);

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "recommendation-unit",
        "rec-click",
        undefined,
        "pdp",
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
