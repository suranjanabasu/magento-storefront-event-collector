import { searchCategoryClickHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import {
    mockSearchInputCtx,
    mockSearchResultCategoryCtx,
    mockSearchResultsCtx,
} from "../../utils/mocks";

test("sends snowplow event", () => {
    searchCategoryClickHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "search",
        "category-click",
        "https://magento.com/category/pants",
        "<pageType>",
        undefined,
        [
            {
                data: mockSearchInputCtx,
                schema: schemas.SEARCH_INPUT_SCHEMA_URL,
            },
            {
                data: mockSearchResultsCtx,
                schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
            },
            {
                data: mockSearchResultCategoryCtx,
                schema: schemas.SEARCH_RESULT_CATEGORY_SCHEMA_URL,
            },
        ],
    );
});
