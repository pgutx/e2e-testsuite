import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';
import { title } from '../utils/variables/title';
import { quantity } from '../pages/purchase-flow-pages/basket';
import { user } from '../utils/variables/user';

test('Scenario: Validate page URL', async ({ featured }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('AC: Correct URL is displayed', async() => {
    await expect(featured.page).toHaveURL(urls.firstFeaturedItem);
  });

});

test('Scenario: Validate page Title', async ({ featured }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('AC: Correct Title is displayed', async() => {
    await expect(featured.page).toHaveTitle(title.firstFeaturedItemTitle);
  });

});

test('Scenario: Checking out Latest Products section whilst on the item page', { tag: '@smoke' }, async ({ featured, skinsheenBronzeStickProduct }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('AC: The section is visible', async() => {
    await expect(skinsheenBronzeStickProduct.latestProductsSection).toBeVisible();
  });

});

test('Scenario: Clicking Item name on Latest Products section whilst on the item page', async ({ featured, skinsheenBronzeStickProduct }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('AC: The item name can be clicked', async() => {
    await skinsheenBronzeStickProduct.clickLatestSectionFirstProductName();
  });

  await test.step('AC: The item name should lead to correct page', async() => {
    await expect(skinsheenBronzeStickProduct.page).toHaveURL(urls.firstLatestItem);
  });

});

test('Scenario: Checking out an item whilst on the item page', { tag: '@smoke' }, async ({ featured, skinsheenBronzeStickProduct }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('AC: Correct elements are visible', async() => {
    await expect(skinsheenBronzeStickProduct.productDetailsSection).toBeVisible();
    await expect(skinsheenBronzeStickProduct.productImage).toBeVisible();
    await expect(skinsheenBronzeStickProduct.productName).toBeVisible();
    await expect(skinsheenBronzeStickProduct.productQuantityField).toBeVisible();
    await expect(skinsheenBronzeStickProduct.totalPriceField).toBeVisible();
  });

});

test('Scenario: Changing the quantity of an item on the item page', async ({ featured, skinsheenBronzeStickProduct }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('AC: The field can be filled out', async() => {
    await skinsheenBronzeStickProduct.page.waitForLoadState('domcontentloaded');
    await skinsheenBronzeStickProduct.fillQuantityField();
  });

  await test.step('AC: Correct data is entered', async() => {
    await expect(skinsheenBronzeStickProduct.productQuantityField).toHaveValue(`${quantity.quantityField}`);
  });

});

test('Scenario: Clicking Add to cart button on the item page', { tag: '@smoke' }, async ({ featured, skinsheenBronzeStickProduct, headerTop, basket }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await skinsheenBronzeStickProduct.page.waitForLoadState('domcontentloaded');
    await skinsheenBronzeStickProduct.clickAddToCartButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(skinsheenBronzeStickProduct.page).toHaveURL(urls.cartPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });

});

test('Scenario: Clicking Add to wishlist button on the item page', { tag: '@smoke' }, async ({ featured, skinsheenBronzeStickProduct, headerTop, wishList }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await skinsheenBronzeStickProduct.page.waitForLoadState('domcontentloaded');
    await skinsheenBronzeStickProduct.clickAddToWishList();
  });

  await test.step('Navigate to the wishlist page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickWishListButton();
  });

  await test.step('AC: The item was added to the wishlist', async() => {
    await expect(wishList.emptyWishList).not.toBeVisible();
    await expect(wishList.populatedWishList).toBeVisible();
  });

});

test('Scenario: Clicking Description section button on the item page', async ({ featured, skinsheenBronzeStickProduct }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await skinsheenBronzeStickProduct.clickDescriptionSectionButton();
  });

  await test.step('AC: Correct section is displayed', async() => {
    await expect(skinsheenBronzeStickProduct.descriptionSection).toBeVisible();
  });

});

test('Scenario: Clicking Review section button on the item page', { tag: '@smoke' }, async ({ featured, skinsheenBronzeStickProduct }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await skinsheenBronzeStickProduct.page.waitForLoadState('domcontentloaded');
    await skinsheenBronzeStickProduct.clickReviewSectionButton();
  });

  await test.step('AC: Correct section is displayed', async() => {
    await skinsheenBronzeStickProduct.reviewForm.waitFor({ state: 'visible' });
    await expect(skinsheenBronzeStickProduct.reviewForm).toBeVisible();
  });

});

test('Scenario: Clicking Tag section button on the item page', async ({ featured, skinsheenBronzeStickProduct }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await skinsheenBronzeStickProduct.page.waitForLoadState('domcontentloaded');
    await skinsheenBronzeStickProduct.clickTagSectionButton();
  });

  await test.step('AC: Correct section is displayed', async() => {
    await skinsheenBronzeStickProduct.tagSection.waitFor({ state: 'visible' });
    await expect(skinsheenBronzeStickProduct.tagSection).toBeVisible();
  });

});

test('Scenario: Clicking Manufacturer button in the Description section whilst on the item page', async ({ featured, skinsheenBronzeStickProduct }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await skinsheenBronzeStickProduct.clickManufacturerButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(skinsheenBronzeStickProduct.page).toHaveURL(urls.macManufacturer);
  });

});

test('Scenario: Clicking Rating star button in the Review section whilst on the item page', async ({ featured, skinsheenBronzeStickProduct }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('Open Review section', async() => {
    await skinsheenBronzeStickProduct.page.waitForLoadState('domcontentloaded');
    await skinsheenBronzeStickProduct.clickReviewSectionButton();
    await expect(skinsheenBronzeStickProduct.reviewForm).toBeVisible();
  });

  await test.step('AC: The star can be clicked - one', async() => {
    await skinsheenBronzeStickProduct.tickOneStarRating();
  });

  await test.step('AC: The star is ticked - one', async() => {
    await expect(skinsheenBronzeStickProduct.ratingFirstStar).toHaveClass(/star-rating-on/);
  });

  await test.step('AC: The star can be clicked - two', async() => {
    await skinsheenBronzeStickProduct.tickTwoStarRating();
  });

  await test.step('AC: The star is ticked - two', async() => {
    await expect(skinsheenBronzeStickProduct.ratingSecondStar).toHaveClass(/star-rating-on/);
  });

  await test.step('AC: The star can be clicked - three', async() => {
    await skinsheenBronzeStickProduct.tickThreeStarRating();
  });

  await test.step('AC: The star is ticked - three', async() => {
    await expect(skinsheenBronzeStickProduct.ratingThirdStar).toHaveClass(/star-rating-on/);
  });

  await test.step('AC: The star can be clicked - four', async() => {
    await skinsheenBronzeStickProduct.tickFourStarRating();
  });

  await test.step('AC: The star is ticked - four', async() => {
    await expect(skinsheenBronzeStickProduct.ratingFourthStar).toHaveClass(/star-rating-on/);
  });

  await test.step('AC: The star can be clicked - five', async() => {
    await skinsheenBronzeStickProduct.tickFiveStarRating();
  });

  await test.step('AC: The star is ticked - five', async() => {
    await expect(skinsheenBronzeStickProduct.ratingFifthStar).toHaveClass(/star-rating-on/);
  });

});

test('Scenario: Filling out Name field in the Review section whilst on the item page', async ({ featured, skinsheenBronzeStickProduct }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('Open Review section', async() => {
    await skinsheenBronzeStickProduct.page.waitForLoadState('domcontentloaded');
    await skinsheenBronzeStickProduct.clickReviewSectionButton();
    await expect(skinsheenBronzeStickProduct.reviewForm).toBeVisible();
  });

  await test.step('AC: The field can be filled out', async() => {
    await skinsheenBronzeStickProduct.fillNameField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(skinsheenBronzeStickProduct.reviewName).toHaveValue('AccountInformationFirstName');
  });

});

test('Scenario: Filling out Review field in the Review section whilst on the item page', async ({ featured, skinsheenBronzeStickProduct }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('Open Review section', async() => {
    await skinsheenBronzeStickProduct.page.waitForLoadState('domcontentloaded');
    await skinsheenBronzeStickProduct.clickReviewSectionButton();
    await expect(skinsheenBronzeStickProduct.reviewForm).toBeVisible();
  });

  await test.step('AC: The field can be filled out', async() => {
    await skinsheenBronzeStickProduct.fillReviewText();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(skinsheenBronzeStickProduct.reviewText).toHaveValue(/Test review/);
  });

});

test('Scenario: Filling out Captcha field in the Review section whilst on the item page', async ({ featured, skinsheenBronzeStickProduct, request }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('Open Review section', async() => {
    await skinsheenBronzeStickProduct.page.waitForLoadState('domcontentloaded');
    await skinsheenBronzeStickProduct.clickReviewSectionButton();
    await expect(skinsheenBronzeStickProduct.reviewForm).toBeVisible();
  });

  await test.step('AC: The field can be filled out', async() => {
    await skinsheenBronzeStickProduct.fillCaptchaField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(skinsheenBronzeStickProduct.captchaField).toHaveValue(/test123/);
  });

});

test('Scenario: Posting a failed review in the Review section whilst on the item page', { tag: '@smoke' }, async ({ featured, skinsheenBronzeStickProduct, request }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('Open Review section', async() => {
    await skinsheenBronzeStickProduct.page.waitForLoadState('domcontentloaded');
    await skinsheenBronzeStickProduct.clickReviewSectionButton();
    await expect(skinsheenBronzeStickProduct.reviewForm).toBeVisible();
  });

  await test.step('Fill out the fields', async() => {
    await skinsheenBronzeStickProduct.fillNameField();
    await skinsheenBronzeStickProduct.fillReviewText();
    await skinsheenBronzeStickProduct.fillCaptchaField();
  });

  await test.step('AC: The submit button can be clicked', async() => {
    await skinsheenBronzeStickProduct.clickSubmitReviewButton();
  });

  await test.step('AC: The captcha error is displayed', async() => {
    await expect(skinsheenBronzeStickProduct.captchaErrorAlert).toBeVisible();
  });

});

test('Scenario: Clicking Tag button in the Tags section whilst on the item page', async ({ featured, skinsheenBronzeStickProduct, search }) => {

  await test.step('Navigate to the product page', async() => {
    await featured.clickFirstItemName();
  });
      
  await test.step('Open Tag section', async() => {
    await skinsheenBronzeStickProduct.page.waitForLoadState('domcontentloaded');
    await skinsheenBronzeStickProduct.clickTagSectionButton();
    await expect(skinsheenBronzeStickProduct.tagCheeks).toBeVisible();
  });

  await test.step('AC: The tag button can be clicked', async() => {
    await skinsheenBronzeStickProduct.clickCheeksTag();
  });

  await test.step('AC: The search with tag name should be successfull', async() => {
    await expect(search.searchCriteriaField).toHaveValue(/cheeks/);
  });

});