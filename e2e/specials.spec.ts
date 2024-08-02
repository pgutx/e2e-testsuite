import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';
import { title } from '../utils/variables/title';

test('Scenario: Validate page URL', async ({ headerTop }) => {

  await test.step('Navigate to the specials page', async() => {
    await headerTop.clickSpecialsButton();
  });
      
  await test.step('AC: Correct URL is displayed', async() => {
    await expect(headerTop.page).toHaveURL(urls.specialsPage);
  });

});

test('Scenario: Validate page Title', async ({ headerTop }) => {

  await test.step('Navigate to the specials page', async() => {
    await headerTop.clickSpecialsButton();
  });
      
  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerTop.page).toHaveTitle(title.specialsPage);
  });

});

test('Scenario: Clicking Home breadcrumb whilst on the specials page', async ({ headerTop, specialsPage }) => {

  await test.step('Navigate to the specials page', async() => {
    await headerTop.clickSpecialsButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await specialsPage.clickHomeBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(specialsPage.page).toHaveURL('/');
  });

});

test('Scenario: Choosing Sort option whilst on the specials page', async ({ headerTop, specialsPage }) => {

  await test.step('Navigate to the specials page', async() => {
    await headerTop.clickSpecialsButton();
  });
      
  await test.step('AC: An option can be picked - Name Ascending', async() => {
    await specialsPage.selectOptionNameAsc();
  });

  await test.step('AC: Filtering is applied - Name Ascending', async() => {
    await expect(specialsPage.page).toHaveURL(urls.filterNameAsc);
    await expect(specialsPage.sortOptionNameAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Name Descending', async() => {
    await specialsPage.selectOptionNameDesc();
  });

  await test.step('AC: Filtering is applied - Name Descending', async() => {
    await expect(specialsPage.page).toHaveURL(urls.filterNameDesc);
    await expect(specialsPage.sortOptionNameDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Ascending', async() => {
    await specialsPage.selectOptionPriceAsc();
  });

  await test.step('AC: Filtering is applied - Price Ascending', async() => {
    await expect(specialsPage.page).toHaveURL(urls.filterPriceAsc);
    await expect(specialsPage.sortOptionPriceAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Price Descending', async() => {
    await specialsPage.selectOptionPriceDesc();
  });

  await test.step('AC: Filtering is applied - Price Descending', async() => {
    await expect(specialsPage.page).toHaveURL(urls.filterPriceDesc);
    await expect(specialsPage.sortOptionPriceDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Descending', async() => {
    await specialsPage.selectOptionRatingDesc();
  });

  await test.step('AC: Filtering is applied - Rating Descending', async() => {
    await expect(specialsPage.page).toHaveURL(urls.filterRatingDesc);
    await expect(specialsPage.sortOptionRatingDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Rating Ascending', async() => {
    await specialsPage.selectOptionRatingAsc();
  });

  await test.step('AC: Filtering is applied - Rating Ascending', async() => {
    await expect(specialsPage.page).toHaveURL(urls.filterRatingAsc);
    await expect(specialsPage.sortOptionRatingAsc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Descending', async() => {
    await specialsPage.selectOptionDateDesc();
  });

  await test.step('AC: Filtering is applied - Date Descending', async() => {
    await expect(specialsPage.page).toHaveURL(urls.filterDateDesc);
    await expect(specialsPage.sortOptionDateDesc).toHaveAttribute('selected');
  });

  await test.step('AC: An option can be picked - Date Ascending', async() => {
    await specialsPage.selectOptionDateAsc();
  });

  await test.step('AC: Filtering is applied - Date Ascending', async() => {
    await expect(specialsPage.page).toHaveURL(urls.filterDateAsc);
    await expect(specialsPage.sortOptionDateAsc).toHaveAttribute('selected');
  });

});

test('Scenario: Choosing Item display option whilst on the specials page', async ({ headerTop, specialsPage }) => {

  await test.step('Navigate to the specials page', async() => {
    await headerTop.clickSpecialsButton();
  });
      
  await test.step('AC: The button can be clicked - List', async() => {
    await specialsPage.clickListDisplayButton();
  });

  await test.step('AC: The item display section is changed - List', async() => {
    await expect(specialsPage.itemSectionList).toBeVisible();
  });

  await test.step('AC: The button can be clicked - Grid', async() => {
    await specialsPage.clickGridDisplayButton();
  });

  await test.step('AC: The item display section is changed - Grid', async() => {
    await expect(specialsPage.itemSectionGrid).toBeVisible();
  });

});