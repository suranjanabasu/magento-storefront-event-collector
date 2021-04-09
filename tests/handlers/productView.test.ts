import { productViewHandler } from "../../src/handlers";
import schemas from "../../src/schemas";
import { mockProductCtx } from "../utils/mocks";

test("sends snowplow event", () => {
    productViewHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "product",
        "view",
        undefined,
        "<pageType>",
        undefined,
        [
            {
                data: mockProductCtx,
                schema: schemas.PRODUCT_SCHEMA_URL,
            },
        ],
    );
});
