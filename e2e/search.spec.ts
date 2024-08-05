import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';
import { title } from '../utils/variables/title';

test('Scenario: Validate page URL', async ({ headerTop }) => {

  await test.step('Navigate to the Search page', async() => {
    await headerTop.clickSearchButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await expect(headerTop.page).toHaveURL(urls.emptySearchPage);
  });

});

test('Scenario: Validate page Title', async ({ headerTop }) => {

  await test.step('Navigate to the Search page', async() => {
    await headerTop.clickSearchButton();
  });
      
  await test.step('AC: The link can be clicked', async() => {
    await expect(headerTop.page).toHaveTitle(title.searchPage);
  });

});

test('Scenario: Filling out the Search criteria field whilst on the search page', async ({ headerTop, search }) => {

  await test.step('Navigate to the Search page', async() => {
    await headerTop.clickSearchButton();
  });
      
  await test.step('AC: The field can be filled', async() => {
    await search.fillSearchCriteriaField();
  });

  await test.step('AC: Correct data is entered', async() => {
    await expect(search.searchCriteriaField).toHaveValue('shoe');
  });

});

test('Scenario: Choosing Search category whilst on the search page', async ({ headerTop, search }) => {

  await test.step('Navigate to the Search page', async() => {
    await headerTop.clickSearchButton();
  });

  await test.step('AC: An option can be picked - Apparel & accessories', async() => {
    await search.selectCategoryApparelOption();
  });

  await test.step('AC: Correct option is picked - Apparel & accessories', async() => {
    await expect(search.categoryOption).toHaveValue('0,68');
  });

  await test.step('AC: An option can be picked - Makeup', async() => {
    await search.selectCategoryMakeupOption();
  });

  await test.step('AC: Correct option is picked - Makeup', async() => {
    await expect(search.categoryOption).toHaveValue('0,36');
  });

  await test.step('AC: An option can be picked - Skincare', async() => {
    await search.selectCategorySkincareOption();
  });

  await test.step('AC: Correct option is picked - Skincare', async() => {
    await expect(search.categoryOption).toHaveValue('0,43');
  });

  await test.step('AC: An option can be picked - Fragrance', async() => {
    await search.selectCategoryFragranceOption();
  });

  await test.step('AC: Correct option is picked - Fragrance', async() => {
    await expect(search.categoryOption).toHaveValue('0,49');
  });

  await test.step('AC: An option can be picked - Men', async() => {
    await search.selectCategoryMenOption();
  });

  await test.step('AC: Correct option is picked - Men', async() => {
    await expect(search.categoryOption).toHaveValue('0,58');
  });

  await test.step('AC: An option can be picked - Haircare', async() => {
    await search.selectCategoryHaircareOption();
  });

  await test.step('AC: Correct option is picked - Haircare', async() => {
    await expect(search.categoryOption).toHaveValue('0,52');
  });

  await test.step('AC: An option can be picked - Books', async() => {
    await search.selectCategoryBooksOption();
  });

  await test.step('AC: Correct option is picked - Books', async() => {
    await expect(search.categoryOption).toHaveValue('0,65');
  });

});

test('Scenario: Clicking search in product description checkbox whilst on the search page', async ({ headerTop, search }) => {

  await test.step('Navigate to the Search page', async() => {
    await headerTop.clickSearchButton();
  });
      
  await test.step('AC: The checkbox can be interacted with', async() => {
    await search.tickProductDescriptionCheckbox();
  });

  await test.step('AC: The checkbox is ticked', async() => {
    await expect(search.productDescriptionSearchCheckbox).toBeChecked();
  });

});

test('Scenario: Clicking search in product model checkbox whilst on the search page', async ({ headerTop, search }) => {

  await test.step('Navigate to the Search page', async() => {
    await headerTop.clickSearchButton();
  });
      
  await test.step('AC: The checkbox can be interacted with', async() => {
    await search.tickProductModelCheckbox();
  });

  await test.step('AC: The checkbox is ticked', async() => {
    await expect(search.productModelSearchCheckbox).toBeChecked();
  });

});

test('Scenario: Searching for an item on the search page', { tag: '@smoke' }, async ({ headerTop, search }) => {

  await test.step('Navigate to the Search page', async() => {
    await headerTop.clickSearchButton();
  });
      
  await test.step('AC: All the fields are interactable', async() => {
    await search.fillSearchCriteriaField();
    await search.selectCategoryApparelOption();
    await search.tickProductDescriptionCheckbox();
    await search.tickProductModelCheckbox();
  });

  await test.step('AC: The search button can be clicked', async() => {
    await search.clickSearchButton();
  });

  await test.step('AC: The search was successfull', async() => {
    await expect(search.emptySearch).not.toBeVisible();
  });

});