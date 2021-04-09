import { searchResponseReceivedHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import { mockSearchInputCtx, mockSearchResultsCtx } from "../../utils/mocks";

test("sends snowplow event", () => {
    searchResponseReceivedHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "search",
        "api-response-received",
        "red patns",
        "<pageType>",
        undefined,
        [
            {
                data: mockSearchInputCtx,
                schema: schemas.SEARCH_INPUT_SCHEMA_URL,
            },
            {
                data: mockSearchResultsCtx,
                schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
            },
        ],
    );
});
