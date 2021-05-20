import { trackStructEvent } from "@snowplow/browser-tracker";

import { placeOrderHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import { mockEvent, mockShoppingCartCtx } from "../../utils/mocks";

test("sends snowplow event", () => {
    placeOrderHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "checkout",
        action: "place-order",
        label: "111111",
        property: "pdp",
        context: [
            {
                data: mockShoppingCartCtx,
                schema: schemas.SHOPPING_CART_SCHEMA_URL,
            },
        ],
    });
});
