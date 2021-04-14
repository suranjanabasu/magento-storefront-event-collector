import { shoppingCartViewHandler } from "../../src/handlers";
import { mockEvent } from "../utils/mocks";

test("sends snowplow event", () => {
    shoppingCartViewHandler(mockEvent);

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "shopping-cart",
        "view",
        undefined,
        "pdp",
        0,
        undefined,
    );
});
