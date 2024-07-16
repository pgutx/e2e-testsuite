import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';

test('Scenario: Clicking Add to cart button whilst on the homepage', async ({ featured, headerTop, basket, checkout }) => {

  await test.step('AC: The button can be clicked', async() => {

    // await specials.hoverFirstItem();

    await featured.clickFirstItemCartButton();

    await headerTop.hoverCartPopup();

    await headerTop.clickViewCart();

    await basket.clickFirstCheckoutButton();

    await checkout.clickEditShippingButton();

    // await basket.selectCountryOption();

    // await basket.selectStateOption();

    // await basket.fillZipCode();

    // await 

    // await basket.clickSecondCheckoutButton();

  });
  
  // await test.step('AC: The item is added to the cart', async() => {
  //   await expect(headerBot.page).toHaveURL(`/index.php?rt=product/category&path=68_70`);
  // });
  
});