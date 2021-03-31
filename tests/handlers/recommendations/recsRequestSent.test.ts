import { recsRequestSentHandler } from "../../../src/handlers";

test("sends snowplow event", () => {
    recsRequestSentHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "recommendation-unit",
        "api-request-sent",
        undefined,
        "<pageType>",
        undefined,
        undefined,
    );
});
