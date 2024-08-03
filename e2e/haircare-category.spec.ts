import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';

test('Scenario: Clicking the Conditioner link whilst on the Haircare page', async ({ headerBot, categoryHaircare }) => {

  await test.step('Navigate to the Haircare page', async() => {
    await headerBot.clickHaircareButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryHaircare.clickConditionerLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.hairConditionerCategoryPage);
  });
  
});

test('Scenario: Clicking the Shampoo link whilst on the Haircare page', async ({ headerBot, categoryHaircare }) => {

  await test.step('Navigate to the Haircare page', async() => {
    await headerBot.clickHaircareButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryHaircare.clickShampooLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.hairShampooCategoryPage);
  });
  
});

test('Scenario: Clicking Home breadcrumb whilst on the Haircare page', async ({ headerBot, categoryHaircare }) => {

  await test.step('Navigate to the Haircare page', async() => {
    await headerBot.clickHaircareButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await categoryHaircare.clickHomeBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryHaircare.page).toHaveURL('/');
  });

});

test('Scenario: Choosing Sort option whilst on the Haircare page', async ({ headerBot, categoryHaircare }) => {

  await test.step('Navigate to the Haircare page', async() => {
    await headerBot.clickHaircareButton();
  });
      
  await test.step('AC: An option can be picked - Name Ascending', async() => {
    await categoryHaircare.selectOptionNameAsc();
  });

  await test.step('AC: Filtering is applied - Name Ascending', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.haircareFilterNameAsc);
    await expect(categoryHaircare.sortOptionNameAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Name Descending', async() => {
    await categoryHaircare.selectOptionNameDesc();
  });

  await test.step('AC: Filtering is applied - Name Descending', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.haircareFilterNameDesc);
    await expect(categoryHaircare.sortOptionNameDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Ascending', async() => {
    await categoryHaircare.selectOptionPriceAsc();
  });

  await test.step('AC: Filtering is applied - Price Ascending', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.haircareFilterPriceAsc);
    await expect(categoryHaircare.sortOptionPriceAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Descending', async() => {
    await categoryHaircare.selectOptionPriceDesc();
  });

  await test.step('AC: Filtering is applied - Price Descending', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.haircareFilterPriceDesc);
    await expect(categoryHaircare.sortOptionPriceDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Descending', async() => {
    await categoryHaircare.selectOptionRatingDesc();
  });

  await test.step('AC: Filtering is applied - Rating Descending', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.haircareFilterRatingDesc);
    await expect(categoryHaircare.sortOptionRatingDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Ascending', async() => {
    await categoryHaircare.selectOptionRatingAsc();
  });

  await test.step('AC: Filtering is applied - Rating Ascending', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.haircareFilterRatingAsc);
    await expect(categoryHaircare.sortOptionRatingAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Descending', async() => {
    await categoryHaircare.selectOptionDateDesc();
  });

  await test.step('AC: Filtering is applied - Date Descending', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.haircareFilterDateDesc);
    await expect(categoryHaircare.sortOptionDateDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Ascending', async() => {
    await categoryHaircare.selectOptionDateAsc();
  });

  await test.step('AC: Filtering is applied - Date Ascending', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.haircareFilterDateAsc);
    await expect(categoryHaircare.sortOptionDateAsc).toHaveAttribute('selected');
  });

});

test('Scenario: Choosing Item display option whilst on the Haircare page', async ({ headerBot, categoryHaircare }) => {

  await test.step('Navigate to the Haircare page', async() => {
    await headerBot.clickHaircareButton();
  });
      
  await test.step('AC: The button can be clicked - List', async() => {
    await categoryHaircare.clickListDisplayButton();
    await categoryHaircare.itemSectionGrid.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - List', async() => {
    await expect(categoryHaircare.itemSectionList).toBeVisible();
  });

  await test.step('AC: The button can be clicked - Grid', async() => {
    await categoryHaircare.clickGridDisplayButton();
    await categoryHaircare.itemSectionList.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - Grid', async() => {
    await expect(categoryHaircare.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Choosing number of items per page option whilst on the Haircare page', async ({ headerBot, categoryHaircare }) => {

  await test.step('Navigate to the Haircare page', async() => {
    await headerBot.clickHaircareButton();
  });
      
  await test.step('AC: An option can be picked - 10 items', async() => {
    await categoryHaircare.selectLimitTenOption();
  });

  await test.step('AC: Filtering is applied - 10 items', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.haircareFilterTenItems);
    await expect(categoryHaircare.limitTenOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 20 items', async() => {
    await categoryHaircare.selectLimitTwentyOption();
  });

  await test.step('AC: Filtering is applied - 20 items', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.haircareFilterTwentyItems);
    await expect(categoryHaircare.limitTwentyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 30 items', async() => {
    await categoryHaircare.selectLimitThirtyOption();
  });

  await test.step('AC: Filtering is applied - 30 items', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.haircareFilterThirtyItems);
    await expect(categoryHaircare.limitThirtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 40 items', async() => {
    await categoryHaircare.selectLimitFourtyOption();
  });

  await test.step('AC: Filtering is applied - 40 items', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.haircareFilterFourtyItems);
    await expect(categoryHaircare.limitFourtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 50 items', async() => {
    await categoryHaircare.selectLimitFiftyOption();
  });

  await test.step('AC: Filtering is applied - 50 items', async() => {
    await expect(categoryHaircare.page).toHaveURL(urls.haircareFilterFiftyItems);
    await expect(categoryHaircare.limitFiftyOption).toHaveAttribute('selected');
  });

});

test('Scenario: Checking out the item section whilst on the Haircare page', async ({ headerBot, categoryHaircare }) => {

  await test.step('Navigate to the Haircare page', async() => {
    await headerBot.clickHaircareButton();
  });
      
  await test.step('AC: The item section is displayed', async() => {
    await expect(categoryHaircare.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Checking out an item whilst on the Haircare page', async ({ headerBot, categoryHaircare }) => {

  await test.step('Navigate to the Haircare page', async() => {
    await headerBot.clickHaircareButton();
  });
      
  await test.step('AC: The item has correct elements displayed', async() => {
    await expect(categoryHaircare.itemName).toBeVisible();
    await expect(categoryHaircare.itemImage).toBeVisible();
    await expect(categoryHaircare.itemPrice).toBeVisible();
    await expect(categoryHaircare.itemCartButton).toBeVisible();
  });

});

test('Scenario: Clicking Item name in whilst on the Haircare page', async ({ headerBot, categoryHaircare }) => {

  await test.step('Navigate to the Haircare page', async() => {
    await headerBot.clickHaircareButton();
  });
      
  await test.step('AC: The name can be clicked', async() => {
    await categoryHaircare.clickItemName();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(categoryHaircare.page).toHaveURL('/index.php?rt=product/product&path=52&product_id=71');
  });

});

test('Scenario: Hovering over an item whilst on the Haircare page', async ({ headerBot, categoryHaircare }) => {

  await test.step('Navigate to the Haircare page', async() => {
    await headerBot.clickHaircareButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryHaircare.hoverItem();
  });

  await test.step('AC: Correct buttons are visible', async() => {
    await expect(categoryHaircare.itemViewButton).toBeVisible();
    await expect(categoryHaircare.itemReviewButton).toBeVisible();
  });

});

test('Scenario: Clicking View button of a hovered over item whilst on the Haircare page', async ({ headerBot, categoryHaircare }) => {

  await test.step('Navigate to the Haircare page', async() => {
    await headerBot.clickHaircareButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryHaircare.hoverItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await categoryHaircare.clickViewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryHaircare.page).toHaveURL('/index.php?rt=product/product&path=52&product_id=71');
  });

});

test('Scenario: Clicking Write review button of a hovered over item whilst on the Haircare page', async ({ headerBot, categoryHaircare }) => {

  await test.step('Navigate to the Haircare page', async() => {
    await headerBot.clickHaircareButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryHaircare.hoverItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await categoryHaircare.clickReviewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryHaircare.page.locator('#review')).toBeVisible();
  });

});