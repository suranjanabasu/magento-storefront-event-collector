import { recsUnitViewHandler } from "../../../src/handlers";

test("sends snowplow event", () => {
    recsUnitViewHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "recommendation-unit",
        "view",
        undefined,
        "pdp",
        undefined,
        [
            {
                data: {
                    backupsCount: 0,
                    configType: "preconfigured",
                    itemsCount: 2,
                    name: "most-viewed",
                    placement: "",
                    recType: "primary",
                    source: "api",
                    unitId: "abc123",
                    yOffsetBottom: null,
                    yOffsetTop: null,
                },
                schema:
                    "iglu:com.adobe.magento.entity/recommendation-unit/jsonschema/1-0-4",
            },
        ],
    );
});
