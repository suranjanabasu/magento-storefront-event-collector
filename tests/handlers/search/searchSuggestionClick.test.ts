import { searchSuggestionClickHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import {
    mockEvent,
    mockSearchInputCtx,
    mockSearchResultsCtx,
    mockSearchResultSuggestionCtx,
} from "../../utils/mocks";

test("sends snowplow event", () => {
    searchSuggestionClickHandler(mockEvent);

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "search",
        "suggestion-click",
        "red pants",
        "pdp",
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
            {
                data: mockSearchResultSuggestionCtx,
                schema: schemas.SEARCH_RESULT_SUGGESTION_SCHEMA_URL,
            },
        ],
    );
});
