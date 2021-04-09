import { searchRequestSentHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import { mockSearchInputCtx } from "../../utils/mocks";

test("sends snowplow event", () => {
    searchRequestSentHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "search",
        "api-request-sent",
        "red patns",
        "<pageType>",
        undefined,
        [
            {
                data: mockSearchInputCtx,
                schema: schemas.SEARCH_INPUT_SCHEMA_URL,
            },
        ],
    );
});
