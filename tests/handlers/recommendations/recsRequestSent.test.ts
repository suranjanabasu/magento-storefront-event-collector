import { recsRequestSentHandler } from "../../../src/handlers";
import { mockEvent } from "../../utils/mocks";

test("sends snowplow event", () => {
    recsRequestSentHandler(mockEvent);

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "recommendation-unit",
        "api-request-sent",
        undefined,
        "pdp",
        undefined,
        undefined,
    );
});
