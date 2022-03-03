import { ShoppingCart } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { ProductListItem, SelectedOption } from "../../types/aep";
import { getDiscountAmount } from "./discount";

/**
 * create a list of shopping cart items from the `ShoppingCart` context for AEP
 *
 * @remarks `discountAmount` and `selectedOtions` are not supported in the sdk type yet
 */
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

            const productListItem: ProductListItem = {
                SKU: item.product.sku,
                name: item.product.name,
                quantity: item.quantity,
                priceTotal: item.prices.price.value,
                currencyCode: item.prices.price.currency,
                // TODO discountAmount: add when sdk schema is fixed
                selectedOptions: selectedOptions,
            };

            productListItem.discountAmount = getDiscountAmount(item.product);

            returnList.push(productListItem);
        });
    }
    return returnList;
};

export { createProductListItems };
