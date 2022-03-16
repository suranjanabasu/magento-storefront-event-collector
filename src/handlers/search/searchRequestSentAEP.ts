import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import {
    SearchFilter,
    SearchSort,
} from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { getAlloy } from "../../alloy";
import { createSearchInputCtx } from "../../contexts";
import { BeaconSchema, Filter, Sort } from "../../types/aep";

const XDM_EVENT_TYPE = "commerce.searchRequest";

const handler = async (event: Event): Promise<void> => {
    const alloy = await getAlloy();

    const { searchUnitId, searchInputContext, debugContext } = event.eventInfo;

    const searchInputCtx = createSearchInputCtx(
        searchUnitId as string,
        searchInputContext,
    );

    const sortFromCtx: SearchSort[] =
        (searchInputCtx?.data.sort as SearchSort[]) ?? [];

    const sort: Sort[] = sortFromCtx.map((searchSort: SearchSort) => {
        return {
            attribute: searchSort.attribute,
            order: searchSort.direction,
        } as Sort;
    });

    const filtersFromCtx: SearchFilter[] =
        (searchInputCtx?.data.filter as SearchFilter[]) ?? [];

    const filters: Filter[] = filtersFromCtx.map(
        (searchFilter: SearchFilter) => {
            let value: string[] = [];
            let isRange = false;
            if (searchFilter.eq) {
                value.push(searchFilter.eq);
            } else if (searchFilter.in) {
                value = searchFilter.in;
            } else if (searchFilter.range) {
                // we represent range in the event as "from value[0] to value[1]"
                isRange = true;
                value.push(String(searchFilter.range.from));
                value.push(String(searchFilter.range.to));
            }
            return {
                attribute: searchFilter.attribute,
                value,
                isRange,
            } as Filter;
        },
    );

    const payload: BeaconSchema = {
        _id: debugContext?.eventId,
        eventType: XDM_EVENT_TYPE,
        commerce: {
            searchRequest: {
                value: 1,
                id: "1",
            },
            search: {
                query: searchInputContext.units[0].phrase,
                sort,
                refinements: filters,
            },
        },
    };

    alloy("sendEvent", { xdm: payload });
};

export default handler;
