import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';

test('Scenario: Clicking the Conditioner link whilst on the Books page', async ({ headerBot, categoryBooks }) => {

  await test.step('Navigate to the Books page', async() => {
    await headerBot.clickBooksButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryBooks.clickAudioLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksAudioCategoryPage);
  });
  
});

test('Scenario: Clicking the Shampoo link whilst on the Books page', async ({ headerBot, categoryBooks }) => {

  await test.step('Navigate to the Books page', async() => {
    await headerBot.clickBooksButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await categoryBooks.clickPaperbackLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksPaperbackCategoryPage);
  });
  
});

test('Scenario: Clicking Home breadcrumb whilst on the Books page', async ({ headerBot, categoryBooks }) => {

  await test.step('Navigate to the Books page', async() => {
    await headerBot.clickBooksButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await categoryBooks.clickHomeBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryBooks.page).toHaveURL('/');
  });

});

test('Scenario: Choosing Sort option whilst on the Books page', async ({ headerBot, categoryBooks }) => {

  await test.step('Navigate to the Books page', async() => {
    await headerBot.clickBooksButton();
  });
      
  await test.step('AC: An option can be picked - Name Ascending', async() => {
    await categoryBooks.selectOptionNameAsc();
  });

  await test.step('AC: Filtering is applied - Name Ascending', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksFilterNameAsc);
    await expect(categoryBooks.sortOptionNameAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Name Descending', async() => {
    await categoryBooks.selectOptionNameDesc();
  });

  await test.step('AC: Filtering is applied - Name Descending', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksFilterNameDesc);
    await expect(categoryBooks.sortOptionNameDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Ascending', async() => {
    await categoryBooks.selectOptionPriceAsc();
  });

  await test.step('AC: Filtering is applied - Price Ascending', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksFilterPriceAsc);
    await expect(categoryBooks.sortOptionPriceAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Descending', async() => {
    await categoryBooks.selectOptionPriceDesc();
  });

  await test.step('AC: Filtering is applied - Price Descending', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksFilterPriceDesc);
    await expect(categoryBooks.sortOptionPriceDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Descending', async() => {
    await categoryBooks.selectOptionRatingDesc();
  });

  await test.step('AC: Filtering is applied - Rating Descending', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksFilterRatingDesc);
    await expect(categoryBooks.sortOptionRatingDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Ascending', async() => {
    await categoryBooks.selectOptionRatingAsc();
  });

  await test.step('AC: Filtering is applied - Rating Ascending', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksFilterRatingAsc);
    await expect(categoryBooks.sortOptionRatingAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Descending', async() => {
    await categoryBooks.selectOptionDateDesc();
  });

  await test.step('AC: Filtering is applied - Date Descending', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksFilterDateDesc);
    await expect(categoryBooks.sortOptionDateDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Ascending', async() => {
    await categoryBooks.selectOptionDateAsc();
  });

  await test.step('AC: Filtering is applied - Date Ascending', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksFilterDateAsc);
    await expect(categoryBooks.sortOptionDateAsc).toHaveAttribute('selected');
  });

});

test('Scenario: Choosing Item display option whilst on the Books page', async ({ headerBot, categoryBooks }) => {

  await test.step('Navigate to the Books page', async() => {
    await headerBot.clickBooksButton();
  });
      
  await test.step('AC: The button can be clicked - List', async() => {
    await categoryBooks.clickListDisplayButton();
    await categoryBooks.itemSectionGrid.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - List', async() => {
    await expect(categoryBooks.itemSectionList).toBeVisible();
  });

  await test.step('AC: The button can be clicked - Grid', async() => {
    await categoryBooks.clickGridDisplayButton();
    await categoryBooks.itemSectionList.waitFor({state: 'hidden'});
  });

  await test.step('AC: The item section is changed - Grid', async() => {
    await expect(categoryBooks.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Choosing number of items per page option whilst on the Books page', async ({ headerBot, categoryBooks }) => {

  await test.step('Navigate to the Books page', async() => {
    await headerBot.clickBooksButton();
  });
      
  await test.step('AC: An option can be picked - 10 items', async() => {
    await categoryBooks.selectLimitTenOption();
  });

  await test.step('AC: Filtering is applied - 10 items', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksFilterTenItems);
    await expect(categoryBooks.limitTenOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 20 items', async() => {
    await categoryBooks.selectLimitTwentyOption();
  });

  await test.step('AC: Filtering is applied - 20 items', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksFilterTwentyItems);
    await expect(categoryBooks.limitTwentyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 30 items', async() => {
    await categoryBooks.selectLimitThirtyOption();
  });

  await test.step('AC: Filtering is applied - 30 items', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksFilterThirtyItems);
    await expect(categoryBooks.limitThirtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 40 items', async() => {
    await categoryBooks.selectLimitFourtyOption();
  });

  await test.step('AC: Filtering is applied - 40 items', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksFilterFourtyItems);
    await expect(categoryBooks.limitFourtyOption).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - 50 items', async() => {
    await categoryBooks.selectLimitFiftyOption();
  });

  await test.step('AC: Filtering is applied - 50 items', async() => {
    await expect(categoryBooks.page).toHaveURL(urls.booksFilterFiftyItems);
    await expect(categoryBooks.limitFiftyOption).toHaveAttribute('selected');
  });

});

test('Scenario: Checking out the item section whilst on the Books page', async ({ headerBot, categoryBooks }) => {

  await test.step('Navigate to the Books page', async() => {
    await headerBot.clickBooksButton();
  });
      
  await test.step('AC: The item section is displayed', async() => {
    await expect(categoryBooks.itemSectionGrid).toBeVisible();
  });

});

test('Scenario: Checking out an item whilst on the Books page', async ({ headerBot, categoryBooks }) => {

  await test.step('Navigate to the Books page', async() => {
    await headerBot.clickBooksButton();
  });
      
  await test.step('AC: The item has correct elements displayed', async() => {
    await expect(categoryBooks.itemName).toBeVisible();
    await expect(categoryBooks.itemImage).toBeVisible();
    await expect(categoryBooks.itemPrice).toBeVisible();
    await expect(categoryBooks.itemCartButton).toBeVisible();
  });

});

test('Scenario: Clicking Item name in whilst on the Books page', async ({ headerBot, categoryBooks }) => {

  await test.step('Navigate to the Books page', async() => {
    await headerBot.clickBooksButton();
  });
      
  await test.step('AC: The name can be clicked', async() => {
    await categoryBooks.clickItemName();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(categoryBooks.page).toHaveURL('/index.php?rt=product/product&path=65&product_id=113');
  });

});

test('Scenario: Hovering over an item whilst on the Books page', async ({ headerBot, categoryBooks }) => {

  await test.step('Navigate to the Books page', async() => {
    await headerBot.clickBooksButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryBooks.hoverItem();
  });

  await test.step('AC: Correct buttons are visible', async() => {
    await expect(categoryBooks.itemViewButton).toBeVisible();
    await expect(categoryBooks.itemReviewButton).toBeVisible();
  });

});

test('Scenario: Clicking View button of a hovered over item whilst on the Books page', async ({ headerBot, categoryBooks }) => {

  await test.step('Navigate to the Books page', async() => {
    await headerBot.clickBooksButton();
  });
      
  await test.step('Hover over the item', async() => {
    await categoryBooks.hoverItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await categoryBooks.clickViewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(categoryBooks.page).toHaveURL('/index.php?rt=product/product&path=65&product_id=113');
  });

});