import { recsUnitViewHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import { mockEvent, mockRecommendationUnitCtx } from "../../utils/mocks";

test("sends snowplow event", () => {
    recsUnitViewHandler(mockEvent);

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "recommendation-unit",
        "view",
        undefined,
        "pdp",
        undefined,
        [
            {
                data: mockRecommendationUnitCtx,
                schema: schemas.RECOMMENDATION_UNIT_SCHEMA_URL,
            },
        ],
    );
});
