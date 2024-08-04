import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';

test('Scenario: Clicking the Cheeks link whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryMakeup.clickCheeksLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupCheeksCategoryPage);
  });
  
});

test('Scenario: Clicking the Eyes link whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryMakeup.clickEyesLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupEyesCategoryPage);
  });
  
});

test('Scenario: Clicking the Face link whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryMakeup.clickFaceLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFaceCategoryPage);
  });
  
});

test('Scenario: Clicking the Lips link whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryMakeup.clickLipsLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupLipsCategoryPage);
  });
  
});

test('Scenario: Clicking the Nails link whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryMakeup.clickNailsLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupNailsCategoryPage);
  });
  
});

test('Scenario: Clicking the Value Sets link whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryMakeup.clickSetsLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupSetsCategoryPage);
  });
  
});

test('Scenario: Clicking Home breadcrumb whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await categoryMakeup.clickHomeBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryMakeup.page).toHaveURL('/');
  });

});

test('Scenario: Choosing Sort option whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('AC: An option can be picked - Name Ascending', async() => {
    await categoryMakeup.selectOptionNameAsc();
  });

  await test.step('AC: Filtering is applied - Name Ascending', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFilterNameAsc);
    await expect(categoryMakeup.sortOptionNameAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Name Descending', async() => {
    await categoryMakeup.selectOptionNameDesc();
  });

  await test.step('AC: Filtering is applied - Name Descending', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFilterNameDesc);
    await expect(categoryMakeup.sortOptionNameDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Ascending', async() => {
    await categoryMakeup.selectOptionPriceAsc();
  });

  await test.step('AC: Filtering is applied - Price Ascending', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFilterPriceAsc);
    await expect(categoryMakeup.sortOptionPriceAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Descending', async() => {
    await categoryMakeup.selectOptionPriceDesc();
  });

  await test.step('AC: Filtering is applied - Price Descending', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFilterPriceDesc);
    await expect(categoryMakeup.sortOptionPriceDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Descending', async() => {
    await categoryMakeup.selectOptionRatingDesc();
  });

  await test.step('AC: Filtering is applied - Rating Descending', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFilterRatingDesc);
    await expect(categoryMakeup.sortOptionRatingDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Ascending', async() => {
    await categoryMakeup.selectOptionRatingAsc();
  });

  await test.step('AC: Filtering is applied - Rating Ascending', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFilterRatingAsc);
    await expect(categoryMakeup.sortOptionRatingAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Descending', async() => {
    await categoryMakeup.selectOptionDateDesc();
  });

  await test.step('AC: Filtering is applied - Date Descending', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFilterDateDesc);
    await expect(categoryMakeup.sortOptionDateDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Ascending', async() => {
    await categoryMakeup.selectOptionDateAsc();
  });

  await test.step('AC: Filtering is applied - Date Ascending', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFilterDateAsc);
    await expect(categoryMakeup.sortOptionDateAsc).toHaveAttribute('selected');
  });

});

test('Scenario: Choosing Item display option whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('AC: The button can be clicked - List', async() => {
    await categoryMakeup.clickListDisplayButton();
    await categoryMakeup.itemSectionGrid.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - List', async() => {
    await expect(categoryMakeup.itemSectionList).toBeVisible();
  });

  await test.step('AC: The button can be clicked - Grid', async() => {
    await categoryMakeup.clickGridDisplayButton();
    await categoryMakeup.itemSectionList.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - Grid', async() => {
    await expect(categoryMakeup.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Choosing number of items per page option whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('AC: An option can be picked - 10 items', async() => {
    await categoryMakeup.selectLimitTenOption();
  });

  await test.step('AC: Filtering is applied - 10 items', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFilterTenItems);
    await expect(categoryMakeup.limitTenOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 20 items', async() => {
    await categoryMakeup.selectLimitTwentyOption();
  });

  await test.step('AC: Filtering is applied - 20 items', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFilterTwentyItems);
    await expect(categoryMakeup.limitTwentyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 30 items', async() => {
    await categoryMakeup.selectLimitThirtyOption();
  });

  await test.step('AC: Filtering is applied - 30 items', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFilterThirtyItems);
    await expect(categoryMakeup.limitThirtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 40 items', async() => {
    await categoryMakeup.selectLimitFourtyOption();
  });

  await test.step('AC: Filtering is applied - 40 items', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFilterFourtyItems);
    await expect(categoryMakeup.limitFourtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 50 items', async() => {
    await categoryMakeup.selectLimitFiftyOption();
  });

  await test.step('AC: Filtering is applied - 50 items', async() => {
    await expect(categoryMakeup.page).toHaveURL(urls.makeupFilterFiftyItems);
    await expect(categoryMakeup.limitFiftyOption).toHaveAttribute('selected');
  });

});

test('Scenario: Checking out the item section whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('AC: The item section is displayed', async() => {
    await expect(categoryMakeup.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Checking out an item whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('AC: The item has correct elements displayed', async() => {
    await expect(categoryMakeup.itemName).toBeVisible();
    await expect(categoryMakeup.itemImage).toBeVisible();
    await expect(categoryMakeup.itemPrice).toBeVisible();
    await expect(categoryMakeup.itemCartButton).toBeVisible();
  });

});

test('Scenario: Clicking Item name in whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('AC: The name can be clicked', async() => {
    await categoryMakeup.clickItemName();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(categoryMakeup.page).toHaveURL('/index.php?rt=product/product&path=36&product_id=59');
  });

});

test('Scenario: Hovering over an item whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryMakeup.hoverItem();
  });

  await test.step('AC: Correct buttons are visible', async() => {
    await expect(categoryMakeup.itemViewButton).toBeVisible();
    await expect(categoryMakeup.itemReviewButton).toBeVisible();
  });

});

test('Scenario: Clicking View button of a hovered over item whilst on the Makeup page', async ({ headerBot, categoryMakeup }) => {

  await test.step('Navigate to the Makeup page', async() => {
    await headerBot.clickMakeupButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryMakeup.hoverItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await categoryMakeup.clickViewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryMakeup.page).toHaveURL('/index.php?rt=product/product&path=36&product_id=59');
  });

});