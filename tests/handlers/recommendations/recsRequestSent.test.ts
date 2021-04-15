import { trackStructEvent } from "@snowplow/browser-tracker";

import { recsRequestSentHandler } from "../../../src/handlers";
import { mockEvent } from "../../utils/mocks";

test("sends snowplow event", () => {
    recsRequestSentHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "recommendation-unit",
        action: "api-request-sent",
        property: "pdp",
    });
});
