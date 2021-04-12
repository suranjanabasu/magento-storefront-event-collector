import { productViewHandler } from "../../src/handlers";
import schemas from "../../src/schemas";
import { mockEvent, mockProductCtx } from "../utils/mocks";

test("sends snowplow event", () => {
    productViewHandler(mockEvent);

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "product",
        "view",
        undefined,
        "pdp",
        undefined,
        [
            {
                data: mockProductCtx,
                schema: schemas.PRODUCT_SCHEMA_URL,
            },
        ],
    );
});
