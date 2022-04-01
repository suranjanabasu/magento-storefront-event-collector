import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { SearchResultSuggestion } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { sendEvent } from "../../alloy";
import { createSearchResultsCtx } from "../../contexts";
import { BeaconSchema } from "../../types/aep";
import { SearchResultProduct } from "../../types/contexts";

const XDM_EVENT_TYPE = "commerce.searchResponse";

const handler = async (event: Event): Promise<void> => {
    const { searchUnitId, searchResultsContext, debugContext } =
        event.eventInfo;

    const searchResultsCtx = createSearchResultsCtx(
        searchUnitId as string,
        searchResultsContext,
    );

    const suggestionsFromCtx: SearchResultSuggestion[] =
        (searchResultsCtx?.data?.suggestions as SearchResultSuggestion[]) ?? [];

    const suggestions: string[] = suggestionsFromCtx.map(
        (suggestion: SearchResultSuggestion) => suggestion.suggestion,
    );

    const productsFromCtx: SearchResultProduct[] =
        (searchResultsCtx?.data?.products as SearchResultProduct[]) ?? [];

    const productListItems = productsFromCtx.map(
        (product: SearchResultProduct) => {
            return { SKU: product.sku, name: product.name };
        },
    );

    const payload: BeaconSchema = {
        _id: debugContext?.eventId,
        eventType: XDM_EVENT_TYPE,
        commerce: {
            searchResponse: {
                value: 1,
                id: "1",
            },
            search: {
                suggestions: suggestions,
                numberOfResults: searchResultsCtx?.data?.productCount as number,
            },
        },
        productListItems,
    };

    sendEvent(payload);
};

export default handler;
