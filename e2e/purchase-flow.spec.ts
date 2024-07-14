import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';

test('Scenario: Clicking Add to cart button whilst on the homepage', async ({ headerBot }) => {

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.hoverApparelsButton();

    await headerBot.clickTshirtsLink();
  });
  
  await test.step('AC: The item is added to the cart', async() => {
    await expect(headerBot.page).toHaveURL(`/index.php?rt=product/category&path=68_70`);
  });
  
});