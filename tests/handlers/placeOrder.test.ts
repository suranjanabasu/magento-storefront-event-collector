import { placeOrderHandler } from "../../src/handlers";
import { mockEvent } from "../utils/mocks";

test("sends snowplow event", () => {
    placeOrderHandler(mockEvent);

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "checkout",
        "place-order",
        "111111",
        "pdp",
        0,
        undefined,
    );
});
