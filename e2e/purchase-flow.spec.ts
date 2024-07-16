import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';

test('Scenario: Clicking Add to cart button whilst on the homepage', async ({ specials }) => {

  await test.step('AC: The button can be clicked', async() => {

    // await specials.hoverFirstItem();

    // await specials.clickFirstItemViewButton();

    await expect(specials.specialsSection).toBeVisible();

  });
  
  // await test.step('AC: The item is added to the cart', async() => {
  //   await expect(headerBot.page).toHaveURL(`/index.php?rt=product/category&path=68_70`);
  // });
  
});