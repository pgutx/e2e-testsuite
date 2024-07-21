import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';
import { title } from '../utils/variables/title';
import { items } from '../utils/variables/items';

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

test('Scenario: Adding Featured section first item to the cart', async ({ headerTop, featured }) => {

  await test.step('AC: The button can be clicked', async() => {
    await featured.clickFirstItemCartButton();
  });
  
  await test.step('AC: Successfull box should be visible', async() => {
    await expect(featured.itemAddedToCart).toBeVisible();
  });

  await test.step('AC: Cart dropdown should not be empty', async() => {
    await headerTop.hoverCartPopup();

    await expect(headerTop.emptyCartPopup).not.toBeVisible();
  });
  
});

test('Scenario: Adding Featured section last item to the cart', async ({ headerTop, featured }) => {

  await test.step('AC: The button can be clicked', async() => {
    await featured.clickLastItemCartButton();
  });
  
  await test.step('AC: Successfull box should be visible', async() => {
    await expect(featured.itemAddedToCart).toBeVisible();
  });

  await test.step('AC: Cart dropdown should not be empty', async() => {
    await headerTop.hoverCartPopup();

    await expect(headerTop.emptyCartPopup).not.toBeVisible();
  });
  
});

test('Scenario: Adding Bestseller section first item to the cart', async ({ headerTop, bestsellers }) => {

  await test.step('AC: The button can be clicked', async() => {
    await bestsellers.clickFirstItemCartButton();
  });
  
  await test.step('AC: Successfull box should be visible', async() => {
    await expect(bestsellers.itemAddedToCart).toBeVisible();
  });

  await test.step('AC: Cart dropdown should not be empty', async() => {
    await headerTop.hoverCartPopup();

    await expect(headerTop.emptyCartPopup).not.toBeVisible();
  });
  
});

test('Scenario: Adding Bestseller section last item to the cart', async ({ headerTop, bestsellers }) => {

  await test.step('AC: The button can be clicked', async() => {
    await bestsellers.clickLastItemCartButton();
  });
  
  await test.step('AC: Successfull box should be visible', async() => {
    await expect(bestsellers.itemAddedToCart).toBeVisible();
  });

  await test.step('AC: Cart dropdown should not be empty', async() => {
    await headerTop.hoverCartPopup();

    await expect(headerTop.emptyCartPopup).not.toBeVisible();
  });
  
});

test('Scenario: Adding Specials section first item to the cart', async ({ headerTop, specials }) => {

  await test.step('AC: The button can be clicked', async() => {
    await specials.clickFirstItemCartButton();
  });
  
  await test.step('AC: Successfull box should be visible', async() => {
    await expect(specials.itemAddedToCart).toBeVisible();
  });

  await test.step('AC: Cart dropdown should not be empty', async() => {
    await headerTop.hoverCartPopup();

    await expect(headerTop.emptyCartPopup).not.toBeVisible();
  });
  
});

test('Scenario: Clicking Checkout button whilst on the homepage after adding an item to the cart', async ({ headerTop, featured }) => {

  await test.step('Add an item to the cart', async() => {
    await featured.clickFirstItemCartButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickCheckoutButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.checkoutPage);
  });
  
});

test('Scenario: Clicking Checkout button whilst hovering over the cart dropdown after adding an item to the cart', async ({ headerTop, featured }) => {

  await test.step('Add an item to the cart', async() => {
    await featured.clickFirstItemCartButton();
  });

  await test.step('Hover over the cart popup', async() => {
    await headerTop.hoverCartPopup();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickViewCheckout();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.checkoutPage);
  });
  
});

test('Scenario: Clicking Item name whilst hovering over the cart dropdown', async ({ headerTop, featured }) => {

  await test.step('Add an item to the cart', async() => {
    await featured.clickFirstItemCartButton();
  });

  await test.step('Hover over the cart popup', async() => {
    await headerTop.hoverCartPopup();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickItemName();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.firstFeaturedItem);
  });
  
});

test('Scenario: Checking out the price of an added item on the cart dropdown', async ({ headerTop, featured }) => {

  await test.step('Add an item to the cart', async() => {
    await featured.clickFirstItemCartButton();
  });

  await test.step('Hover over the cart popup', async() => {
    await headerTop.hoverCartPopup();
  });
  
  await test.step('AC: The field has correct price displayed', async() => {
    await expect(headerTop.itemTotalPrice).toHaveText(items.firstFeaturedItemPrice);
  });
  
});