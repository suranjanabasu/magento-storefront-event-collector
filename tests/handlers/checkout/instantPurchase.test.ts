import { trackStructEvent } from "@snowplow/browser-tracker";

import { instantPurchaseHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import {
    mockEvent,
    mockOrder,
    mockPage,
    mockProductCtx,
    mockShoppingCartCtx,
} from "../../utils/mocks";

test("sends snowplow event", () => {
    instantPurchaseHandler(mockEvent);

    expect(trackStructEvent).toHaveBeenCalledTimes(1);

    expect(trackStructEvent).toHaveBeenCalledWith({
        category: "checkout",
        action: "instant-purchase",
        label: "111111",
        property: "pdp",
        context: [
            {
                data: mockProductCtx,
                schema: schemas.PRODUCT_SCHEMA_URL,
            },
            {
                data: mockShoppingCartCtx,
                schema: schemas.SHOPPING_CART_SCHEMA_URL,
            },
        ],
    });
});
