import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';

test('Scenario: Clicking the Men link whilst on the Fragrance page', async ({ headerBot, categoryFragrance }) => {

  await test.step('Navigate to the Fragrance page', async() => {
    await headerBot.clickFragranceButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryFragrance.clickMenLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceMenCategoryPage);
  });
  
});

test('Scenario: Clicking the Women link whilst on the Fragrance page', async ({ headerBot, categoryFragrance }) => {

  await test.step('Navigate to the Fragrance page', async() => {
    await headerBot.clickFragranceButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryFragrance.clickWomenLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceWomenCategoryPage);
  });
  
});

test('Scenario: Clicking Home breadcrumb whilst on the Fragrance page', async ({ headerBot, categoryFragrance }) => {

  await test.step('Navigate to the Fragrance page', async() => {
    await headerBot.clickFragranceButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await categoryFragrance.clickHomeBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryFragrance.page).toHaveURL('/');
  });

});

test('Scenario: Choosing Sort option whilst on the Fragrance page', async ({ headerBot, categoryFragrance }) => {

  await test.step('Navigate to the Fragrance page', async() => {
    await headerBot.clickFragranceButton();
  });
      
  await test.step('AC: An option can be picked - Name Ascending', async() => {
    await categoryFragrance.selectOptionNameAsc();
  });

  await test.step('AC: Filtering is applied - Name Ascending', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceFilterNameAsc);
    await expect(categoryFragrance.sortOptionNameAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Name Descending', async() => {
    await categoryFragrance.selectOptionNameDesc();
  });

  await test.step('AC: Filtering is applied - Name Descending', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceFilterNameDesc);
    await expect(categoryFragrance.sortOptionNameDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Ascending', async() => {
    await categoryFragrance.selectOptionPriceAsc();
  });

  await test.step('AC: Filtering is applied - Price Ascending', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceFilterPriceAsc);
    await expect(categoryFragrance.sortOptionPriceAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Descending', async() => {
    await categoryFragrance.selectOptionPriceDesc();
  });

  await test.step('AC: Filtering is applied - Price Descending', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceFilterPriceDesc);
    await expect(categoryFragrance.sortOptionPriceDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Descending', async() => {
    await categoryFragrance.selectOptionRatingDesc();
  });

  await test.step('AC: Filtering is applied - Rating Descending', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceFilterRatingDesc);
    await expect(categoryFragrance.sortOptionRatingDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Ascending', async() => {
    await categoryFragrance.selectOptionRatingAsc();
  });

  await test.step('AC: Filtering is applied - Rating Ascending', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceFilterRatingAsc);
    await expect(categoryFragrance.sortOptionRatingAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Descending', async() => {
    await categoryFragrance.selectOptionDateDesc();
  });

  await test.step('AC: Filtering is applied - Date Descending', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceFilterDateDesc);
    await expect(categoryFragrance.sortOptionDateDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Ascending', async() => {
    await categoryFragrance.selectOptionDateAsc();
  });

  await test.step('AC: Filtering is applied - Date Ascending', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceFilterDateAsc);
    await expect(categoryFragrance.sortOptionDateAsc).toHaveAttribute('selected');
  });

});

test('Scenario: Choosing Item display option whilst on the Fragrance page', async ({ headerBot, categoryFragrance }) => {

  await test.step('Navigate to the Fragrance page', async() => {
    await headerBot.clickFragranceButton();
  });
      
  await test.step('AC: The button can be clicked - List', async() => {
    await categoryFragrance.clickListDisplayButton();
    await categoryFragrance.itemSectionGrid.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - List', async() => {
    await expect(categoryFragrance.itemSectionList).toBeVisible();
  });

  await test.step('AC: The button can be clicked - Grid', async() => {
    await categoryFragrance.clickGridDisplayButton();
    await categoryFragrance.itemSectionList.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - Grid', async() => {
    await expect(categoryFragrance.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Choosing number of items per page option whilst on the Fragrance page', async ({ headerBot, categoryFragrance }) => {

  await test.step('Navigate to the Fragrance page', async() => {
    await headerBot.clickFragranceButton();
  });
      
  await test.step('AC: An option can be picked - 10 items', async() => {
    await categoryFragrance.selectLimitTenOption();
  });

  await test.step('AC: Filtering is applied - 10 items', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceFilterTenItems);
    await expect(categoryFragrance.limitTenOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 20 items', async() => {
    await categoryFragrance.selectLimitTwentyOption();
  });

  await test.step('AC: Filtering is applied - 20 items', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceFilterTwentyItems);
    await expect(categoryFragrance.limitTwentyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 30 items', async() => {
    await categoryFragrance.selectLimitThirtyOption();
  });

  await test.step('AC: Filtering is applied - 30 items', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceFilterThirtyItems);
    await expect(categoryFragrance.limitThirtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 40 items', async() => {
    await categoryFragrance.selectLimitFourtyOption();
  });

  await test.step('AC: Filtering is applied - 40 items', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceFilterFourtyItems);
    await expect(categoryFragrance.limitFourtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 50 items', async() => {
    await categoryFragrance.selectLimitFiftyOption();
  });

  await test.step('AC: Filtering is applied - 50 items', async() => {
    await expect(categoryFragrance.page).toHaveURL(urls.fragranceFilterFiftyItems);
    await expect(categoryFragrance.limitFiftyOption).toHaveAttribute('selected');
  });

});

test('Scenario: Checking out the item section whilst on the Fragrance page', async ({ headerBot, categoryFragrance }) => {

  await test.step('Navigate to the Fragrance page', async() => {
    await headerBot.clickFragranceButton();
  });
      
  await test.step('AC: The item section is displayed', async() => {
    await expect(categoryFragrance.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Checking out an item whilst on the Fragrance page', async ({ headerBot, categoryFragrance }) => {

  await test.step('Navigate to the Fragrance page', async() => {
    await headerBot.clickFragranceButton();
  });
      
  await test.step('AC: The item has correct elements displayed', async() => {
    await expect(categoryFragrance.itemName).toBeVisible();
    await expect(categoryFragrance.itemImage).toBeVisible();
    await expect(categoryFragrance.itemPrice).toBeVisible();
    await expect(categoryFragrance.itemCartButton).toBeVisible();
  });

});

test('Scenario: Clicking Item name in whilst on the Fragrance page', async ({ headerBot, categoryFragrance }) => {

  await test.step('Navigate to the Fragrance page', async() => {
    await headerBot.clickFragranceButton();
  });
      
  await test.step('AC: The name can be clicked', async() => {
    await categoryFragrance.clickItemName();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(categoryFragrance.page).toHaveURL('/index.php?rt=product/product&path=49&product_id=62');
  });

});

test('Scenario: Hovering over an item whilst on the Fragrance page', async ({ headerBot, categoryFragrance }) => {

  await test.step('Navigate to the Fragrance page', async() => {
    await headerBot.clickFragranceButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryFragrance.hoverItem();
  });

  await test.step('AC: Correct buttons are visible', async() => {
    await expect(categoryFragrance.itemViewButton).toBeVisible();
    await expect(categoryFragrance.itemReviewButton).toBeVisible();
  });

});

test('Scenario: Clicking View button of a hovered over item whilst on the Fragrance page', async ({ headerBot, categoryFragrance }) => {

  await test.step('Navigate to the Fragrance page', async() => {
    await headerBot.clickFragranceButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryFragrance.hoverItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await categoryFragrance.clickViewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryFragrance.page).toHaveURL('/index.php?rt=product/product&path=49&product_id=62');
  });

});

test('Scenario: Clicking Write review button of a hovered over item whilst on the Fragrance page', async ({ headerBot, categoryFragrance }) => {

  await test.step('Navigate to the Fragrance page', async() => {
    await headerBot.clickFragranceButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryFragrance.hoverItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await categoryFragrance.clickReviewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryFragrance.page.locator('#review')).toBeVisible();
  });

});