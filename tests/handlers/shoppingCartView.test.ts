import { trackStructEvent } from "@snowplow/browser-tracker";

import { shoppingCartViewHandler } from "../../src/handlers";
import { mockEvent } from "../utils/mocks";

test("sends snowplow event", () => {
    shoppingCartViewHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "shopping-cart",
        action: "view",
        property: "pdp",
        value: 0,
    });
});
