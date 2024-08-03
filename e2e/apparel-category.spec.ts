import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';

test('Scenario: Clicking the Shoes link whilst on the Apparel & Accessories page', async ({ headerBot, categoryApparel }) => {

  await test.step('Navigate to the Apparel & Accessories page', async() => {
    await headerBot.clickApparelsButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryApparel.clickShoesLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.shoesCategoryPage);
  });
  
});

test('Scenario: Clicking the T-Shirts link whilst on the Apparel & Accessories page', async ({ headerBot, categoryApparel }) => {

  await test.step('Navigate to the Apparel & Accessories page', async() => {
    await headerBot.clickApparelsButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryApparel.clickTshirtsLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.tshirtsCategoryPage);
  });

});

test('Scenario: Clicking Home breadcrumb whilst on the Apparel & Accessories page', async ({ headerBot, categoryApparel }) => {

  await test.step('Navigate to the Apparel & Accessories page', async() => {
    await headerBot.clickApparelsButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await categoryApparel.clickHomeBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryApparel.page).toHaveURL('/');
  });

});

test('Scenario: Choosing Sort option whilst on the Apparel & Accessories page', async ({ headerBot, categoryApparel }) => {

  await test.step('Navigate to the Apparel & Accessories page', async() => {
    await headerBot.clickApparelsButton();
  });
      
  await test.step('AC: An option can be picked - Name Ascending', async() => {
    await categoryApparel.selectOptionNameAsc();
  });

  await test.step('AC: Filtering is applied - Name Ascending', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.apparelFilterNameAsc);
    await expect(categoryApparel.sortOptionNameAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Name Descending', async() => {
    await categoryApparel.selectOptionNameDesc();
  });

  await test.step('AC: Filtering is applied - Name Descending', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.apparelFilterNameDesc);
    await expect(categoryApparel.sortOptionNameDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Ascending', async() => {
    await categoryApparel.selectOptionPriceAsc();
  });

  await test.step('AC: Filtering is applied - Price Ascending', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.apparelFilterPriceAsc);
    await expect(categoryApparel.sortOptionPriceAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Descending', async() => {
    await categoryApparel.selectOptionPriceDesc();
  });

  await test.step('AC: Filtering is applied - Price Descending', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.apparelFilterPriceDesc);
    await expect(categoryApparel.sortOptionPriceDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Descending', async() => {
    await categoryApparel.selectOptionRatingDesc();
  });

  await test.step('AC: Filtering is applied - Rating Descending', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.apparelFilterRatingDesc);
    await expect(categoryApparel.sortOptionRatingDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Ascending', async() => {
    await categoryApparel.selectOptionRatingAsc();
  });

  await test.step('AC: Filtering is applied - Rating Ascending', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.apparelFilterRatingAsc);
    await expect(categoryApparel.sortOptionRatingAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Descending', async() => {
    await categoryApparel.selectOptionDateDesc();
  });

  await test.step('AC: Filtering is applied - Date Descending', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.apparelFilterDateDesc);
    await expect(categoryApparel.sortOptionDateDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Ascending', async() => {
    await categoryApparel.selectOptionDateAsc();
  });

  await test.step('AC: Filtering is applied - Date Ascending', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.apparelFilterDateAsc);
    await expect(categoryApparel.sortOptionDateAsc).toHaveAttribute('selected');
  });

});

test('Scenario: Choosing Item display option whilst on the Apparel & Accessories page', async ({ headerBot, categoryApparel }) => {

  await test.step('Navigate to the Apparel & Accessories page', async() => {
    await headerBot.clickApparelsButton();
  });
      
  await test.step('AC: The button can be clicked - List', async() => {
    await categoryApparel.clickListDisplayButton();
    await categoryApparel.itemSectionGrid.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - List', async() => {
    await expect(categoryApparel.itemSectionList).toBeVisible();
  });

  await test.step('AC: The button can be clicked - Grid', async() => {
    await categoryApparel.clickGridDisplayButton();
    await categoryApparel.itemSectionList.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - Grid', async() => {
    await expect(categoryApparel.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Choosing number of items per page option whilst on the Apparel & Accessories page', async ({ headerBot, categoryApparel }) => {

  await test.step('Navigate to the Apparel & Accessories page', async() => {
    await headerBot.clickApparelsButton();
  });
      
  await test.step('AC: An option can be picked - 10 items', async() => {
    await categoryApparel.selectLimitTenOption();
  });

  await test.step('AC: Filtering is applied - 10 items', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.apparelFilterTenItems);
    await expect(categoryApparel.limitTenOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 20 items', async() => {
    await categoryApparel.selectLimitTwentyOption();
  });

  await test.step('AC: Filtering is applied - 20 items', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.apparelFilterTwentyItems);
    await expect(categoryApparel.limitTwentyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 30 items', async() => {
    await categoryApparel.selectLimitThirtyOption();
  });

  await test.step('AC: Filtering is applied - 30 items', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.apparelFilterThirtyItems);
    await expect(categoryApparel.limitThirtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 40 items', async() => {
    await categoryApparel.selectLimitFourtyOption();
  });

  await test.step('AC: Filtering is applied - 40 items', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.apparelFilterFourtyItems);
    await expect(categoryApparel.limitFourtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 50 items', async() => {
    await categoryApparel.selectLimitFiftyOption();
  });

  await test.step('AC: Filtering is applied - 50 items', async() => {
    await expect(categoryApparel.page).toHaveURL(urls.apparelFilterFiftyItems);
    await expect(categoryApparel.limitFiftyOption).toHaveAttribute('selected');
  });

});

test('Scenario: Checking out the item section whilst on the Apparel & Accessories page', async ({ headerBot, categoryApparel }) => {

  await test.step('Navigate to the Apparel & Accessories page', async() => {
    await headerBot.clickApparelsButton();
  });
      
  await test.step('AC: The item section is displayed', async() => {
    await expect(categoryApparel.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Checking out an item whilst on the Apparel & Accessories page', async ({ headerBot, categoryApparel }) => {

  await test.step('Navigate to the Apparel & Accessories page', async() => {
    await headerBot.clickApparelsButton();
  });
      
  await test.step('AC: The item has correct elements displayed', async() => {
    await expect(categoryApparel.itemName).toBeVisible();
    await expect(categoryApparel.itemImage).toBeVisible();
    await expect(categoryApparel.itemPrice).toBeVisible();
    await expect(categoryApparel.itemCartButton).toBeVisible();
  });

});

test('Scenario: Clicking Item name in whilst on the Apparel & Accessories page', async ({ headerBot, categoryApparel }) => {

  await test.step('Navigate to the Apparel & Accessories page', async() => {
    await headerBot.clickApparelsButton();
  });
      
  await test.step('AC: The name can be clicked', async() => {
    await categoryApparel.clickItemName();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(categoryApparel.page).toHaveURL('/index.php?rt=product/product&path=68&product_id=115');
  });

});

test('Scenario: Hovering over an item whilst on the Apparel & Accessories page', async ({ headerBot, categoryApparel }) => {

  await test.step('Navigate to the Apparel & Accessories page', async() => {
    await headerBot.clickApparelsButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryApparel.hoverItem();
  });

  await test.step('AC: Correct buttons are visible', async() => {
    await expect(categoryApparel.itemViewButton).toBeVisible();
    await expect(categoryApparel.itemReviewButton).toBeVisible();
  });

});

test('Scenario: Clicking View button of a hovered over item whilst on the Apparel & Accessories page', async ({ headerBot, categoryApparel }) => {

  await test.step('Navigate to the Apparel & Accessories page', async() => {
    await headerBot.clickApparelsButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryApparel.hoverItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await categoryApparel.clickViewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryApparel.page).toHaveURL('/index.php?rt=product/product&path=68&product_id=115');
  });

});

test('Scenario: Clicking Write review button of a hovered over item whilst on the Apparel & Accessories page', async ({ headerBot, categoryApparel }) => {

  await test.step('Navigate to the Apparel & Accessories page', async() => {
    await headerBot.clickApparelsButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryApparel.hoverItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await categoryApparel.clickReviewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryApparel.page.locator('#review')).toBeVisible();
  });

});