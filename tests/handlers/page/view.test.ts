import { trackPageView } from "@snowplow/browser-tracker";

import { pageViewHandler } from "../../../src/handlers";

test("sends snowplow event", () => {
    pageViewHandler();
    expect(trackPageView).toHaveBeenCalledTimes(1);
});
