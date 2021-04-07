import { shoppingCartViewHandler } from "../../src/handlers";

test("sends snowplow event", () => {
    shoppingCartViewHandler();

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
