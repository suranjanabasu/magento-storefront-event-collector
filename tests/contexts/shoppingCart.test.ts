import { createShoppingCartCtx } from "../../src/contexts";

test("creates context", () => {
    const ctx = createShoppingCartCtx();

    expect(ctx).toEqual({
        data: {
            cartId: 111111,
            giftMessageSelected: false,
            giftWrappingSelected: false,
            items: [
                {
                    basePrice: undefined,
                    cartItemId: 0,
                    mainImageUrl: undefined,
                    offerPrice: 19.99,
                    productName: "T-Shirt",
                    productSku: "ts001",
                    qty: 1,
                },
                {
                    basePrice: undefined,
                    cartItemId: 0,
                    mainImageUrl: undefined,
                    offerPrice: 49.99,
                    productName: "Hoodie",
                    productSku: "h001",
                    qty: 1,
                },
            ],
            itemsCount: 2,
            possibleOnepageCheckout: false,
            subtotalAmount: 69.98,
            subtotalExcludingTax: 69.98,
            subtotalIncludingTax: 69.98,
        },
        schema: "iglu:com.adobe.magento.entity/shopping-cart/jsonschema/1-0-1",
    });
});
