import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';
import { title } from '../utils/variables/title';
import { items } from '../utils/variables/items';
import { quantity } from '../pages/purchase-flow-pages/basket';
import { newAddressVariables } from '../utils/variables/address';

test('Scenario: Clicking Cart button whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickCartButton();
  });
  
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.cartPage);
  });
  
});

test('Scenario: Validate Shopping cart page title', async ({ headerTop }) => {

  await test.step('Navigate to the cart page', async() => {
    await headerTop.clickCartButton();
  });
  
  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerTop.page).toHaveTitle(title.cartTitle);
  });
  
});

test('Scenario: Clicking Checkout button whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.cartPage);
  });
  
});

test('Scenario: Validate Checkout page title', async ({ headerTop }) => {

  await test.step('Navigate to the checkout page', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerTop.page).toHaveTitle(title.cartTitle);
  });
  
});

test('Scenario: Hovering over the currency field whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The field can be interacted with', async() => {
    await headerTop.hoverCurrencyField();
  });
  
  await test.step('AC: Correct currencies are displayed', async() => {
    await expect(headerTop.euro).toBeVisible();
    await expect(headerTop.sterling).toBeVisible();
    await expect(headerTop.dollar).toBeVisible();
  });
  
});

test('Scenario: Hovering over Cart dropdown whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The field can be interacted with', async() => {
    await headerTop.hoverCartPopup();
  });
  
  await test.step('AC: Correct elements are visible', async() => {
    await expect(headerTop.emptyCartPopup).toBeVisible();
    await expect(headerTop.viewCart).toBeVisible();
    await expect(headerTop.viewCheckout).toBeVisible();
  });
  
});

test('Scenario: Clicking Cart dropdown whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickCartPopup();
  });
  
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.cartPage);
  });
  
});

test.describe('Serial tests', () => {

  test.describe.configure({ mode: 'default' });

test('Scenario: Changing the currency to Euro', async ({ headerTop }) => {

  await test.step('Hover over the currency field', async() => {
    await headerTop.hoverCurrencyField();
  });
    
  await test.step('AC: Currency can be changed', async() => {
    await headerTop.clickEuroCurrency();
  });
  
  await test.step('AC: Correct currency is displayed', async() => {
    await expect(headerTop.page).toHaveURL(urls.euroPage);
  });
  
});
  
test('Scenario: Changing the currency to Sterling', async ({ headerTop }) => {
  
  await test.step('Hover over the currency field', async() => {
    await headerTop.hoverCurrencyField();
  });
    
  await test.step('AC: Currency can be changed', async() => {
    await headerTop.clickGBPCurrency();
  });
  
  await test.step('AC: Correct currency is displayed', async() => {
    await expect(headerTop.page).toHaveURL(urls.sterlingPage);
  });
  
});
  
test('Scenario: Changing the currency to Dollar', async ({ headerTop }) => {
  
  await test.step('Hover over the currency field', async() => {
    await headerTop.hoverCurrencyField();
  });
    
  await test.step('AC: Currency can be changed', async() => {
    await headerTop.clickDollarCurrency();
  });
  
  await test.step('AC: Correct currency is displayed', async() => {
    await expect(headerTop.page).toHaveURL(urls.dollarPage);
  });
  
});

test('Scenario: Clicking Cart button whilst hovering over the cart dropdown', async ({ headerTop }) => {

  await test.step('Hover over the cart popup', async() => {
    await headerTop.hoverCartPopup();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickViewCart();
  });
  
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.cartPage);
  });
  
});

test('Scenario: Clicking Checkout button whilst hovering over the cart dropdown', async ({ headerTop }) => {

  await test.step('Hover over the cart popup', async() => {
    await headerTop.hoverCartPopup();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickViewCheckout();
  });
  
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.cartPage);
  });
  
});

test('Scenario: Adding Featured section first item to the cart', async ({ headerTop, featured, basket }) => {

  await test.step('AC: The button can be clicked', async() => {
    await featured.clickFirstItemCartButton();
  });
  
  await test.step('AC: Successfull box should be visible', async() => {
    await expect.soft(featured.itemAddedToCart).toBeVisible();
  });

  await test.step('AC: Cart dropdown should not be empty', async() => {
    await headerTop.hoverCartPopup();

    await expect.soft(headerTop.emptyCartPopup).not.toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Adding Featured section last item to the cart', async ({ headerTop, featured }) => {

  await test.step('AC: The button can be clicked', async() => {
    await featured.clickLastItemCartButton();
  });
  
  await test.step('AC: Successfull box should be visible', async() => {
    await expect.soft(featured.itemAddedToCart).toBeVisible();
  });

  await test.step('AC: Cart dropdown should not be empty', async() => {
    await headerTop.hoverCartPopup();

    await expect.soft(headerTop.emptyCartPopup).not.toBeVisible();
  });

});

test('Scenario: Adding Bestseller section first item to the cart', async ({ headerTop, bestsellers }) => {

  await test.step('AC: The button can be clicked', async() => {
    await bestsellers.clickFirstItemCartButton();
  });
  
  await test.step('AC: Successfull box should be visible', async() => {
    await expect.soft(bestsellers.itemAddedToCart).toBeVisible();
  });

  await test.step('AC: Cart dropdown should not be empty', async() => {
    await headerTop.hoverCartPopup();

    await expect.soft(headerTop.emptyCartPopup).not.toBeVisible();
  });
  
});

test('Scenario: Adding Bestseller section last item to the cart', async ({ headerTop, bestsellers, basket }) => {

  await test.step('AC: The button can be clicked', async() => {
    await bestsellers.clickLastItemCartButton();
  });
  
  await test.step('AC: Successfull box should be visible', async() => {
    await expect.soft(bestsellers.itemAddedToCart).toBeVisible();
  });

  await test.step('AC: Cart dropdown should not be empty', async() => {
    await headerTop.hoverCartPopup();

    await expect.soft(headerTop.emptyCartPopup).not.toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Adding Specials section first item to the cart', async ({ headerTop, specials, basket }) => {

  await test.step('AC: The button can be clicked', async() => {
    await specials.clickFirstItemCartButton();
  });
  
  await test.step('AC: Successfull box should be visible', async() => {
    await expect.soft(specials.itemAddedToCart).toBeVisible();
  });

  await test.step('AC: Cart dropdown should not be empty', async() => {
    await headerTop.hoverCartPopup();

    await expect.soft(headerTop.emptyCartPopup).not.toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test.describe('Serial tests with setup hooks', () => {

test.beforeEach('Add an item to the cart', async({ featured }) => {
  await featured.clickFirstItemCartButton();
});

test('Scenario: Clicking Checkout button whilst on the homepage after adding an item to the cart', async ({  headerTop, basket }) => {

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickCheckoutButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect.soft(headerTop.page).toHaveURL(urls.checkoutPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Clicking Checkout button whilst hovering over the cart dropdown after adding an item to the cart', async ({ headerTop, basket }) => {

  await test.step('Hover over the cart popup', async() => {
    await headerTop.hoverCartPopup();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickViewCheckout();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.checkoutPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Clicking Item name whilst hovering over the cart dropdown', async ({ headerTop, basket }) => {

  await test.step('Hover over the cart popup', async() => {
    await headerTop.hoverCartPopup();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickItemName();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.firstFeaturedItem);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Checking out the price of an added item on the cart dropdown', async ({ headerTop, basket }) => {

  await test.step('Hover over the cart popup', async() => {
    await headerTop.hoverCartPopup();
  });
  
  await test.step('AC: The field has correct price displayed', async() => {
    await expect(headerTop.itemTotalPrice).toHaveText(`\$${items.firstFeaturedItemPrice.toFixed(2)}`);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Checking the item on the cart page', async ({ headerTop, basket }) => {

  await test.step('Click the cart button', async() => {
    await headerTop.clickCartButton();
  });
  
  await test.step('AC: The item is visible', async() => {
    await expect(basket.cartSection).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Clicking item name button on the cart page', async ({ headerTop, basket }) => {

  await test.step('Click the cart button', async() => {
    await headerTop.clickCartButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await basket.clickItemName();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(basket.page).toHaveURL(urls.firstFeaturedItem + `&key=50`);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Changing the quantity of an added item on the cart page', async ({ headerTop, basket }) => {

  await test.step('Click the cart button', async() => {
    await headerTop.clickCartButton();
  });
  
  await test.step('AC: The field can be filled out', async() => {
    await basket.fillCartQuantityField();
  });

  await test.step('AC: The button can be clicked', async() => {
    await basket.clickUpdateButton();
  });

  await test.step('AC: Total price is updated', async() => {
    const price = quantity.quantityField * items.firstFeaturedItemPrice;
    await expect(basket.totalPriceField).toHaveText(`\$${price.toFixed(2)}`);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Clicking Remove item button on the cart page', async ({ headerTop, basket }) => {

  await test.step('Click the cart button', async() => {
    await headerTop.clickCartButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await basket.clickRemoveButton();
  });

  await test.step('AC: The item is removed', async() => {
    await expect(basket.cartSection).not.toBeVisible();
  });
  
});

test('Scenario: Apply coupon code section is visible on the cart page', async ({ headerTop, basket }) => {

  await test.step('Click the cart button', async() => {
    await headerTop.clickCartButton();
  });
  
  await test.step('AC: The field is visible', async() => {
    await expect(basket.couponForm).toBeVisible();
  });

  await test.step('AC: The Coupon field is visible', async() => {
    await expect(basket.couponFormField).toBeVisible();
  });

  await test.step('AC: The Apply coupon button is visible', async() => {
    await expect(basket.couponFormButton).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Estimate shipping and tax is visible and interactable on the cart page', async ({ headerTop, basket }) => {

  await test.step('Click the cart button', async() => {
    await headerTop.clickCartButton();
  });
  
  await test.step('AC: The section is visible', async() => {
    await expect(basket.estimateForm).toBeVisible();
  });

  await test.step('AC: Country field is interactable', async() => {
    await basket.selectCountryOption();

    await expect(basket.estimateFormCountry).toHaveText(/Czech Republic/);
  });

  await test.step('AC: State field is interactable', async() => {
    await basket.selectStateOption();

    await expect(basket.estimateFormState).toHaveText(/Praha/);
  });

  await test.step('AC: Zip/Postal code field is interactable', async() => {
    await basket.fillZipCode();

    await expect(basket.estimateFormZip).toHaveValue(/12345/);
  });

  await test.step('AC: Estimate button can be clicked', async() => {
    await basket.clickEstimateButton();

    await expect(basket.estimateFormButton).toBeEnabled();
  });

  await test.step('AC: Shipments option is visible', async() => {
    await expect(basket.estimateFormShippings).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Totals table is visible on the cart page', async ({ headerTop, basket }) => {

  await test.step('Click the cart button', async() => {
    await headerTop.clickCartButton();
  });
  
  await test.step('AC: The item is removed', async() => {
    await expect(basket.totalTable).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Clicking continue shopping button on the cart page', async ({ headerTop, basket }) => {

  await test.step('Click the cart button', async() => {
    await headerTop.clickCartButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await basket.clickContinueButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(basket.page).toHaveURL('/');
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Clicking first Checkout button on the cart page', async ({ headerTop, basket }) => {

  await test.step('Click the cart button', async() => {
    await headerTop.clickCartButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await basket.clickFirstCheckoutButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(basket.page).toHaveURL(urls.checkoutPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Clicking second Checkout button on the cart page', async ({ headerTop, basket }) => {

  await test.step('Click the cart button', async() => {
    await headerTop.clickCartButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await basket.clickSecondCheckoutButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(basket.page).toHaveURL(urls.checkoutPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Checkout confirmation is present on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The fields are visible', async() => {
    await expect(checkout.checkoutInformation).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Confirm breadcrumb on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await checkout.clickConfirmBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(checkout.page).toHaveURL(urls.checkoutPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Payment breadcrumb on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await checkout.clickPaymentBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(checkout.page).toHaveURL(urls.editPaymentPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Shipping breadcrumb on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await checkout.clickShippingBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(checkout.page).toHaveURL(urls.editShippingPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Basket breadcrumb on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await checkout.clickBasketBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(checkout.page).toHaveURL(urls.cartPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Home breadcrumb on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await checkout.clickHomeBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(checkout.page).toHaveURL('/');
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Checking out shipping table whilst on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The section is displayed', async() => {
    await expect(checkout.shippingField).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Edit shipping whilst on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await checkout.clickEditShippingButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(checkout.page).toHaveURL(urls.editShippingPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Checking out payment table whilst on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The section is displayed', async() => {
    await expect(checkout.paymentField).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Edit payment whilst on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(checkout.page).toHaveURL(urls.editPaymentPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Edit coupon whilst on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await checkout.clickEditCouponButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(checkout.page).toHaveURL(urls.editPaymentPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Edit cart whilst on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await checkout.clickEditCartButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(checkout.page).toHaveURL(urls.cartPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Checking out item table whilst on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The section is displayed', async() => {
    await expect(checkout.itemField).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Checking out item image whilst on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The image is displayed', async() => {
    await expect(checkout.itemImg).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking item name on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await checkout.clickItemNameLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(checkout.page).toHaveURL(urls.firstFeaturedItem);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Checking out item price on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: Correct price is listed', async() => {
    await expect(checkout.itemPriceField).toHaveText(`\$${items.firstFeaturedItemPrice.toFixed(2)}`);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Totals table is visible on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The section is displayed', async() => {
    await expect(checkout.totalPriceField).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Order summary is visible on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The section is displayed', async() => {
    await expect(checkout.orderSummaryField).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Back button whilst on the checkout page', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await checkout.clickBackButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(checkout.page).toHaveURL(urls.editPaymentPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Placing an order on the checkout page', async ({ headerTop, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await checkout.clickConfirmOrderButton();
  });

  await test.step('AC: The order is placed', async() => {
    await expect(checkout.page).toHaveURL(urls.placeOrderSuccess);
  });

});

test('Scenario: Validate Shipping page title', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit shipping button', async() => {
    await checkout.clickEditShippingButton();
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(checkout.page).toHaveTitle(title.shippingAddressTitle);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Delivery information section is visible whilst on the shipping page', async ({ headerTop, basket, checkout, shipping }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit shipping button', async() => {
    await checkout.clickEditShippingButton();
  });

  await test.step('AC: The section is displayed', async() => {
    await expect(shipping.shippingInformation).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Change Address button whilst on the shipping page', async ({ headerTop, basket, checkout, shipping }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit shipping button', async() => {
    await checkout.clickEditShippingButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await shipping.clickChangeAddressButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(shipping.page).toHaveURL(urls.newShippingAddress);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Adding a comment whilst on the shipping page', async ({ headerTop, basket, checkout, shipping }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit shipping button', async() => {
    await checkout.clickEditShippingButton();
  });

  await test.step('AC: The field is fillable', async() => {
    await shipping.fillCommentField();
  });

  await test.step('AC: Correct data is entered', async() => {
    await expect(shipping.commentField).toHaveValue(/This is a test comment/);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Back button whilst on the shipping page', async ({ headerTop, basket, checkout, shipping }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit shipping button', async() => {
    await checkout.clickEditShippingButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await shipping.clickBackButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(shipping.page).toHaveURL(urls.cartPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Continue button whilst on the shipping page', async ({ headerTop, basket, checkout, shipping }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit shipping button', async() => {
    await checkout.clickEditShippingButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await shipping.clickContinueButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(shipping.page).toHaveURL(urls.checkoutPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Checking out Address Book Entries section on new shipping address page', async ({ headerTop, basket, checkout, shipping, newAddress }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit shipping button', async() => {
    await checkout.clickEditShippingButton();
  });

  await test.step('Click the change address button', async() => {
    await shipping.clickChangeAddressButton();
  });

  await test.step('AC: The section is displayed', async() => {
    await expect(newAddress.actualAddressForm).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Address Book Entries section Continue button whilst on the new shipping address page', async ({ headerTop, basket, checkout, shipping, newAddress }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit shipping button', async() => {
    await checkout.clickEditShippingButton();
  });

  await test.step('Click the change address button', async() => {
    await shipping.clickChangeAddressButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await newAddress.clickActualAddressFormContinueButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(newAddress.page).toHaveURL(urls.checkoutPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Checking out New Address form on new shipping address page', async ({ headerTop, basket, checkout, shipping, newAddress }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit shipping button', async() => {
    await checkout.clickEditShippingButton();
  });

  await test.step('Click the change address button', async() => {
    await shipping.clickChangeAddressButton();
  });

  await test.step('AC: The section is displayed', async() => {
    await expect(newAddress.newAddressForm).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Adding new shipping address', async ({ headerTop, basket, checkout, shipping, newAddress }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit shipping button', async() => {
    await checkout.clickEditShippingButton();
  });

  await test.step('Click the change address button', async() => {
    await shipping.clickChangeAddressButton();
  });

  await test.step('AC: Each of the fields is interactable', async() => {
    await newAddress.fillNewAddressFirstNameField();
    await newAddress.fillNewAddressLastNameField();
    await newAddress.fillNewAddressAddressField();
    await newAddress.fillNewAddressCityField();
    await newAddress.selectNewAddressCountryOption();
    await newAddress.fillNewAddressZipCodeField();
    await newAddress.selectNewAddressRegionOption();
  });

  await test.step('AC: Continue button can be clicked', async() => {
    await newAddress.clickNewAddressContinueButton();
  });

  await test.step('AC: New address is added', async() => {
    await expect(checkout.shippingTableFirstCell).toHaveText(newAddressVariables.newFirstName + ' ' + newAddressVariables.newLastName);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Validate Payment page title', async ({ headerTop, basket, checkout }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(checkout.page).toHaveTitle(title.paymentTitle);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Payment information section is visible whilst on the payment page', async ({ headerTop, basket, checkout, payment }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('AC: The section is displayed', async() => {
    await expect(payment.paymentInformation).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Change Address button whilst on the payment page', async ({ headerTop, basket, checkout, payment }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await payment.clickChangeAddressButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(payment.page).toHaveURL(urls.newPaymentAddress);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Filling out the Coupon field whilst on the payment page', async ({ headerTop, basket, checkout, payment }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('AC: The field is fillable', async() => {
    await payment.fillCouponField();
  });

  await test.step('AC: Correct data is entered', async() => {
    await expect(payment.couponField).toHaveValue(/Coupon/);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Apply Coupon button whilst on the payment page', async ({ headerTop, basket, checkout, payment }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('Fill the coupon field', async() => {
    await payment.fillCouponField();
  });

  await test.step('AC: The button can be clicked', async() => {
    await payment.clickCouponButton();
  });

  await test.step('AC: Correct popup is displayed', async() => {
    //Invalid coupon alert has to be visible due to a lack of correct coupons known
    await expect(payment.invalidCouponAlert).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Remove Coupon button whilst on the payment page', async ({ headerTop, basket, checkout, payment }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('Fill the coupon field', async() => {
    await payment.fillCouponField();
  });

  await test.step('Click apply coupon button', async() => {
    await payment.clickCouponButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await payment.clickRemoveCouponButton();
  });

  await test.step('AC: Correct popup is displayed', async() => {
    await expect(payment.successCouponAlert).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Adding a comment whilst on the payment page', async ({ headerTop, basket, checkout, payment }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('AC: The field is fillable', async() => {
    await payment.fillCommentField();
  });

  await test.step('AC: Correct data is entered', async() => {
    await expect(payment.commentField).toHaveValue(/This is a test comment/);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Back button whilst on the payment page', async ({ headerTop, basket, checkout, payment }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await payment.clickBackButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(payment.page).toHaveURL(urls.editShippingPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Checking Policy checkbox whilst on the payment page', async ({ headerTop, basket, checkout, payment }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('AC: The checkbox can be checked', async() => {
    await payment.checkPolicyCheckbox();
  });

  await test.step('AC: The checkbox has correct status', async() => {
    await expect(payment.returnPolicyCheckbox).toBeChecked();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Continue button whilst on the payment page', async ({ headerTop, basket, checkout, payment }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('Tick Return Policy checkbox', async() => {
    await payment.checkPolicyCheckbox();
  });

  await test.step('AC: The button can be clicked', async() => {
    await payment.clickContinueButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(payment.page).toHaveURL(urls.checkoutPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Checking out Address Book Entries section on new payment address page', async ({ headerTop, basket, checkout, payment, newAddress }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('Click the change address button', async() => {
    await payment.clickChangeAddressButton();
  });

  await test.step('AC: The section is displayed', async() => {
    await expect(newAddress.actualAddressForm).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Address Book Entries section Continue button whilst on the new payment address page', async ({ headerTop, basket, checkout, payment, newAddress }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('Click the change address button', async() => {
    await payment.clickChangeAddressButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await newAddress.clickActualAddressFormContinueButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(newAddress.page).toHaveURL(urls.checkoutPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Checking out New Address form on new payment address page', async ({ headerTop, basket, checkout, payment, newAddress }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('Click the change address button', async() => {
    await payment.clickChangeAddressButton();
  });

  await test.step('AC: The section is displayed', async() => {
    await expect(newAddress.newAddressForm).toBeVisible();
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Adding new payment address', async ({ headerTop, basket, checkout, payment, newAddress }) => {

  await test.step('Click the checkout button', async() => {
    await headerTop.clickCheckoutButton();
  });
  
  await test.step('Click the edit payment button', async() => {
    await checkout.clickEditPaymentButton();
  });

  await test.step('Click the change address button', async() => {
    await payment.clickChangeAddressButton();
  });

  await test.step('AC: Each of the fields is interactable', async() => {
    await newAddress.fillNewAddressFirstNameField();
    await newAddress.fillNewAddressLastNameField();
    await newAddress.fillNewAddressAddressField();
    await newAddress.fillNewAddressCityField();
    await newAddress.selectNewAddressCountryOption();
    await newAddress.fillNewAddressZipCodeField();
    await newAddress.selectNewAddressRegionOption();
  });

  await test.step('AC: Continue button can be clicked', async() => {
    await newAddress.clickNewAddressContinueButton();
  });

  await test.step('AC: New address is added', async() => {
    await expect(checkout.paymentTableFirstCell).toHaveText(newAddressVariables.newFirstName + ' ' + newAddressVariables.newLastName);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

});

});