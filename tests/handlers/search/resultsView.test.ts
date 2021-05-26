import { trackStructEvent } from "@snowplow/browser-tracker";

import { searchResultsViewHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import { mockEvent, mockSearchResultsCtx } from "../../utils/mocks";

test("sends snowplow event", () => {
    searchResultsViewHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "search",
        action: "results-view",
        label: "abc123",
        property: "pdp",
        context: [
            {
                data: mockSearchResultsCtx,
                schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
            },
        ],
    });
});
