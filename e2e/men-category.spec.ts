import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';

test('Scenario: Clicking the Body & Shower link whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryMen.clickBodyLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menBodyShowerCategoryPage);
  });
  
});

test('Scenario: Clicking the Fragrance link whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryMen.clickFragranceLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFragranceCategoryPage);
  });
  
});

test('Scenario: Clicking the Pre-Shave & Shaving link whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryMen.clickShaveLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menShaveCategoryPage);
  });
  
});

test('Scenario: Clicking the Skincare link whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryMen.clickSkincareLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menSkincareCategoryPage);
  });
  
});

test('Scenario: Clicking Home breadcrumb whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await categoryMen.clickHomeBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryMen.page).toHaveURL('/');
  });

});

test('Scenario: Choosing Sort option whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('AC: An option can be picked - Name Ascending', async() => {
    await categoryMen.selectOptionNameAsc();
  });

  await test.step('AC: Filtering is applied - Name Ascending', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFilterNameAsc);
    await expect(categoryMen.sortOptionNameAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Name Descending', async() => {
    await categoryMen.selectOptionNameDesc();
  });

  await test.step('AC: Filtering is applied - Name Descending', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFilterNameDesc);
    await expect(categoryMen.sortOptionNameDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Ascending', async() => {
    await categoryMen.selectOptionPriceAsc();
  });

  await test.step('AC: Filtering is applied - Price Ascending', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFilterPriceAsc);
    await expect(categoryMen.sortOptionPriceAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Descending', async() => {
    await categoryMen.selectOptionPriceDesc();
  });

  await test.step('AC: Filtering is applied - Price Descending', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFilterPriceDesc);
    await expect(categoryMen.sortOptionPriceDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Descending', async() => {
    await categoryMen.selectOptionRatingDesc();
  });

  await test.step('AC: Filtering is applied - Rating Descending', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFilterRatingDesc);
    await expect(categoryMen.sortOptionRatingDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Ascending', async() => {
    await categoryMen.selectOptionRatingAsc();
  });

  await test.step('AC: Filtering is applied - Rating Ascending', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFilterRatingAsc);
    await expect(categoryMen.sortOptionRatingAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Descending', async() => {
    await categoryMen.selectOptionDateDesc();
  });

  await test.step('AC: Filtering is applied - Date Descending', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFilterDateDesc);
    await expect(categoryMen.sortOptionDateDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Ascending', async() => {
    await categoryMen.selectOptionDateAsc();
  });

  await test.step('AC: Filtering is applied - Date Ascending', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFilterDateAsc);
    await expect(categoryMen.sortOptionDateAsc).toHaveAttribute('selected');
  });

});

test('Scenario: Choosing Item display option whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('AC: The button can be clicked - List', async() => {
    await categoryMen.clickListDisplayButton();
    await categoryMen.itemSectionGrid.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - List', async() => {
    await expect(categoryMen.itemSectionList).toBeVisible();
  });

  await test.step('AC: The button can be clicked - Grid', async() => {
    await categoryMen.clickGridDisplayButton();
    await categoryMen.itemSectionList.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - Grid', async() => {
    await expect(categoryMen.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Choosing number of items per page option whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('AC: An option can be picked - 10 items', async() => {
    await categoryMen.selectLimitTenOption();
  });

  await test.step('AC: Filtering is applied - 10 items', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFilterTenItems);
    await expect(categoryMen.limitTenOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 20 items', async() => {
    await categoryMen.selectLimitTwentyOption();
  });

  await test.step('AC: Filtering is applied - 20 items', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFilterTwentyItems);
    await expect(categoryMen.limitTwentyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 30 items', async() => {
    await categoryMen.selectLimitThirtyOption();
  });

  await test.step('AC: Filtering is applied - 30 items', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFilterThirtyItems);
    await expect(categoryMen.limitThirtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 40 items', async() => {
    await categoryMen.selectLimitFourtyOption();
  });

  await test.step('AC: Filtering is applied - 40 items', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFilterFourtyItems);
    await expect(categoryMen.limitFourtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 50 items', async() => {
    await categoryMen.selectLimitFiftyOption();
  });

  await test.step('AC: Filtering is applied - 50 items', async() => {
    await expect(categoryMen.page).toHaveURL(urls.menFilterFiftyItems);
    await expect(categoryMen.limitFiftyOption).toHaveAttribute('selected');
  });

});

test('Scenario: Checking out the item section whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('AC: The item section is displayed', async() => {
    await expect(categoryMen.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Checking out an item whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('AC: The item has correct elements displayed', async() => {
    await expect(categoryMen.itemName).toBeVisible();
    await expect(categoryMen.itemImage).toBeVisible();
    await expect(categoryMen.itemPrice).toBeVisible();
    await expect(categoryMen.itemCartButton).toBeVisible();
  });

});

test('Scenario: Clicking Item name in whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('AC: The name can be clicked', async() => {
    await categoryMen.clickItemName();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(categoryMen.page).toHaveURL('/index.php?rt=product/product&path=58&product_id=78');
  });

});

test('Scenario: Hovering over an item whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryMen.hoverItem();
  });

  await test.step('AC: Correct buttons are visible', async() => {
    await expect(categoryMen.itemViewButton).toBeVisible();
    await expect(categoryMen.itemReviewButton).toBeVisible();
  });

});

test('Scenario: Clicking View button of a hovered over item whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryMen.hoverItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await categoryMen.clickViewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryMen.page).toHaveURL('/index.php?rt=product/product&path=58&product_id=78');
  });

});

test('Scenario: Clicking Write review button of a hovered over item whilst on the Men page', async ({ headerBot, categoryMen }) => {

  await test.step('Navigate to the Men page', async() => {
    await headerBot.clickMenButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryMen.hoverItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await categoryMen.clickReviewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryMen.page.locator('#review')).toBeVisible();
  });

});