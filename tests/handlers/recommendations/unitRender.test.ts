import { trackStructEvent } from "@snowplow/browser-tracker";

import { recsUnitRenderHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import {
    mockEvent,
    mockRecommendationUnitCtx,
    mockRecommendedItemsCtx,
} from "../../utils/mocks";

test("sends snowplow event", () => {
    recsUnitRenderHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "recommendation-unit",
        action: "impression-render",
        property: "pdp",
        context: [
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
    });
});
