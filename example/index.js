import {
    mockDataServicesExtension,
    mockExtension,
    mockOrder,
    mockPage,
    mockProduct,
    mockRecommendations,
    mockRecommendationsExtension,
    mockSearchExtension,
    mockSearchInput,
    mockSearchResults,
    mockShopper,
    mockShoppingCart,
    mockStorefront,
} from "../tests/utils/mocks";

const mse = window.magentoStorefrontEvents;

mse.context.setMagentoExtension(mockExtension);
mse.context.setDataServicesExtension(mockDataServicesExtension);
mse.context.setRecommendationsExtension(mockRecommendationsExtension);
mse.context.setSearchExtension(mockSearchExtension);
mse.context.setOrder(mockOrder);
mse.context.setPage(mockPage);
mse.context.setProduct(mockProduct);
mse.context.setRecommendations(mockRecommendations);
mse.context.setSearchInput(mockSearchInput);
mse.context.setSearchResults(mockSearchResults);
mse.context.setShopper(mockShopper);
mse.context.setShoppingCart(mockShoppingCart);
mse.context.setStorefrontInstance(mockStorefront);

/* beacon/experience platform specific code below*/
mse.context.setAEP({
    imsOrgId: "53A16ACB5CC1D3760A495C99@AdobeOrg",
    datastreamId: "1144fb8d-b234-4c44-85ac-af91ed64c2dd:dev",
});
mse.context.setEventForwarding({
    snowplow: true,
    aep: true,
});
/* end beacon */

// mse.publish.pageView();
