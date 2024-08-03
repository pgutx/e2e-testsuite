import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';

test('Scenario: Clicking the Eyes link whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categorySkincare.clickEyesLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareEyesCategoryPage);
  });
  
});

test('Scenario: Clicking the Face link whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categorySkincare.clickFaceLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFaceCategoryPage);
  });
  
});

test('Scenario: Clicking the Gift Ideas & Sets link whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categorySkincare.clickGiftLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareGiftsCategoryPage);
  });
  
});

test('Scenario: Clicking the Hands & Nails link whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categorySkincare.clickNailsLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareHandsNailsCategoryPage);
  });
  
});

test('Scenario: Clicking the Sun link whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categorySkincare.clickSunLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareSunCategoryPage);
  });
  
});

test('Scenario: Clicking Home breadcrumb whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await categorySkincare.clickHomeBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categorySkincare.page).toHaveURL('/');
  });

});

test('Scenario: Choosing Sort option whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('AC: An option can be picked - Name Ascending', async() => {
    await categorySkincare.selectOptionNameAsc();
  });

  await test.step('AC: Filtering is applied - Name Ascending', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFilterNameAsc);
    await expect(categorySkincare.sortOptionNameAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Name Descending', async() => {
    await categorySkincare.selectOptionNameDesc();
  });

  await test.step('AC: Filtering is applied - Name Descending', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFilterNameDesc);
    await expect(categorySkincare.sortOptionNameDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Ascending', async() => {
    await categorySkincare.selectOptionPriceAsc();
  });

  await test.step('AC: Filtering is applied - Price Ascending', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFilterPriceAsc);
    await expect(categorySkincare.sortOptionPriceAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Descending', async() => {
    await categorySkincare.selectOptionPriceDesc();
  });

  await test.step('AC: Filtering is applied - Price Descending', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFilterPriceDesc);
    await expect(categorySkincare.sortOptionPriceDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Descending', async() => {
    await categorySkincare.selectOptionRatingDesc();
  });

  await test.step('AC: Filtering is applied - Rating Descending', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFilterRatingDesc);
    await expect(categorySkincare.sortOptionRatingDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Ascending', async() => {
    await categorySkincare.selectOptionRatingAsc();
  });

  await test.step('AC: Filtering is applied - Rating Ascending', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFilterRatingAsc);
    await expect(categorySkincare.sortOptionRatingAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Descending', async() => {
    await categorySkincare.selectOptionDateDesc();
  });

  await test.step('AC: Filtering is applied - Date Descending', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFilterDateDesc);
    await expect(categorySkincare.sortOptionDateDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Ascending', async() => {
    await categorySkincare.selectOptionDateAsc();
  });

  await test.step('AC: Filtering is applied - Date Ascending', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFilterDateAsc);
    await expect(categorySkincare.sortOptionDateAsc).toHaveAttribute('selected');
  });

});

test('Scenario: Choosing Item display option whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('AC: The button can be clicked - List', async() => {
    await categorySkincare.clickListDisplayButton();
    await categorySkincare.itemSectionGrid.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - List', async() => {
    await expect(categorySkincare.itemSectionList).toBeVisible();
  });

  await test.step('AC: The button can be clicked - Grid', async() => {
    await categorySkincare.clickGridDisplayButton();
    await categorySkincare.itemSectionList.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - Grid', async() => {
    await expect(categorySkincare.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Choosing number of items per page option whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('AC: An option can be picked - 10 items', async() => {
    await categorySkincare.selectLimitTenOption();
  });

  await test.step('AC: Filtering is applied - 10 items', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFilterTenItems);
    await expect(categorySkincare.limitTenOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 20 items', async() => {
    await categorySkincare.selectLimitTwentyOption();
  });

  await test.step('AC: Filtering is applied - 20 items', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFilterTwentyItems);
    await expect(categorySkincare.limitTwentyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 30 items', async() => {
    await categorySkincare.selectLimitThirtyOption();
  });

  await test.step('AC: Filtering is applied - 30 items', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFilterThirtyItems);
    await expect(categorySkincare.limitThirtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 40 items', async() => {
    await categorySkincare.selectLimitFourtyOption();
  });

  await test.step('AC: Filtering is applied - 40 items', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFilterFourtyItems);
    await expect(categorySkincare.limitFourtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 50 items', async() => {
    await categorySkincare.selectLimitFiftyOption();
  });

  await test.step('AC: Filtering is applied - 50 items', async() => {
    await expect(categorySkincare.page).toHaveURL(urls.skincareFilterFiftyItems);
    await expect(categorySkincare.limitFiftyOption).toHaveAttribute('selected');
  });

});

test('Scenario: Checking out the item section whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('AC: The item section is displayed', async() => {
    await expect(categorySkincare.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Checking out an item whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('AC: The item has correct elements displayed', async() => {
    await expect(categorySkincare.itemName).toBeVisible();
    await expect(categorySkincare.itemImage).toBeVisible();
    await expect(categorySkincare.itemPrice).toBeVisible();
    await expect(categorySkincare.itemCartButton).toBeVisible();
  });

});

test('Scenario: Clicking Item name in whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('AC: The name can be clicked', async() => {
    await categorySkincare.clickItemName();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(categorySkincare.page).toHaveURL('/index.php?rt=product/product&path=43&product_id=66');
  });

});

test('Scenario: Hovering over an item whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categorySkincare.hoverItem();
  });

  await test.step('AC: Correct buttons are visible', async() => {
    await expect(categorySkincare.itemViewButton).toBeVisible();
    await expect(categorySkincare.itemReviewButton).toBeVisible();
  });

});

test('Scenario: Clicking View button of a hovered over item whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categorySkincare.hoverItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await categorySkincare.clickViewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categorySkincare.page).toHaveURL('/index.php?rt=product/product&path=43&product_id=66');
  });

});

test('Scenario: Clicking Write review button of a hovered over item whilst on the Skincare page', async ({ headerBot, categorySkincare }) => {

  await test.step('Navigate to the Skincare page', async() => {
    await headerBot.clickSkincareButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categorySkincare.hoverItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await categorySkincare.clickReviewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categorySkincare.page.locator('#review')).toBeVisible();
  });

});