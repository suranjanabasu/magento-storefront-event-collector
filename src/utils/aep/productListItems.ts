import { ShoppingCart } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { SelectedOption } from "../../types/aep";
import { ProductListItem } from "../../types/aep";

const createProductListItems = (
    shoppingCartContext: ShoppingCart,
): ProductListItem[] => {
    const returnList: ProductListItem[] = [];
    if (shoppingCartContext.items?.length) {
        shoppingCartContext.items.forEach(item => {
            const selectedOptions: SelectedOption[] = [];
            item.configurableOptions?.forEach(option => {
                selectedOptions.push({
                    type: option.optionLabel,
                    value: option.valueLabel,
                });
            });
            const productListItem = {
                SKU: item.product.sku,
                name: item.product.name,
                quantity: item.quantity,
                priceTotal: item.prices.price.value,
                currencyCode: item.prices.price.currency,
                // TODO discountAmount: add when sdk schema is fixed
                selectedOptions: selectedOptions,
            };

            returnList.push(productListItem);
        });
    }
    return returnList;
};

export { createProductListItems };