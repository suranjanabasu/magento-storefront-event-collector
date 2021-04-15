import { trackStructEvent } from "@snowplow/browser-tracker";

import { recsUnitViewHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import { mockEvent, mockRecommendationUnitCtx } from "../../utils/mocks";

test("sends snowplow event", () => {
    recsUnitViewHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "recommendation-unit",
        action: "view",
        property: "pdp",
        context: [
            {
                data: mockRecommendationUnitCtx,
                schema: schemas.RECOMMENDATION_UNIT_SCHEMA_URL,
            },
        ],
    });
});
