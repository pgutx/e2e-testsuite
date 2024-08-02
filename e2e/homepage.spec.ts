import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';
import { title } from '../utils/variables/title';
import { items } from '../utils/variables/items';

test.use({ storageState: { cookies: [], origins: [] } });

test('Scenario: Clicking the logo whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The logo can be clicked', async() => {
    await headerTop.clickHomepageLogo();
  });
      
  await test.step('AC: The logo should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL('/');
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerTop.page).toHaveTitle(title.homepageTitle);
  });

});

test('Scenario: Clicking the Specials button whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickSpecialsButton();
  });
      
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.specialsPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerTop.page).toHaveTitle(title.specialsPage);
  });

});

test('Scenario: Hovering over the Home button whilst on the homepage', async ({ headerBot }) => {

  await test.step('AC: The home button can be interacted with', async() => {
    await headerBot.hoverHomeButton();
  });

  await test.step('AC: Correct links are visible', async() => {
    await expect(headerBot.specialsLink).toBeVisible();
    await expect(headerBot.accountLink).toBeVisible();
    await expect(headerBot.cartLink).toBeVisible();
    await expect(headerBot.checkoutLink).toBeVisible();
  });

});

test('Scenario: Clicking the Home button whilst on the homepage', async ({ headerBot }) => {

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickHomeButton();
  });
      
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL('/');
  });

});

test('Scenario: Clicking the Specials button whilst on the expanded home menu', async ({ headerBot }) => {

  await test.step('Expand the Home button', async() => {
    await headerBot.hoverHomeButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickSpecialsLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.specialsPage);
  });

});

test('Scenario: Clicking the Account button whilst on the expanded home menu', async ({ headerBot }) => {

  await test.step('Expand the Home button', async() => {
    await headerBot.hoverHomeButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickAccountLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    //change to account page
    await expect(headerBot.page).toHaveURL(urls.loginPage);
  });

});

test('Scenario: Clicking the Cart button whilst on the expanded home menu', async ({ headerBot }) => {

  await test.step('Expand the Home button', async() => {
    await headerBot.hoverHomeButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickCartLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.cartPage);
  });

});

test('Scenario: Clicking the Checkout button whilst on the expanded home menu', async ({ headerBot }) => {

  await test.step('Expand the Home button', async() => {
    await headerBot.hoverHomeButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickCheckoutLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.cartPage);
  });

});

test('Scenario: Clicking the Search field whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The field can be interacted with', async() => {
    await headerTop.clickSearchField();
  });
      
  await test.step('AC: Correct options are listed', async() => {
    await expect(headerTop.categoryAll).toBeVisible();
    await expect(headerTop.categoryApparel).toBeVisible();
    await expect(headerTop.categoryMakeup).toBeVisible();
    await expect(headerTop.categorySkincare).toBeVisible();
    await expect(headerTop.categoryFragrance).toBeVisible();
    await expect(headerTop.categoryMen).toBeVisible();
    await expect(headerTop.categoryHairCare).toBeVisible();
    await expect(headerTop.categoryBooks).toBeVisible();
  });

  await test.step('AC: Options can be picked', async() => {
    await headerTop.clickCategoriesAll();
    await expect(headerTop.categorySelected).toHaveText('All Categories');
  });

});

test('Scenario: Clicking the Category options in the expanded Search field whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The field can be interacted with', async() => {
    await headerTop.clickSearchField();
  });
      
  await test.step('AC: Option can be picked - All categories', async() => {
    await headerTop.clickCategoriesAll();
    await expect(headerTop.categorySelected).toHaveText('All Categories');
  });

  await test.step('AC: Option can be picked - Apparel & accessories', async() => {
    await headerTop.clickCategoriesApparel();
    await expect(headerTop.categorySelected).toHaveText('Apparel & accessories');
  });

  await test.step('AC: Option can be picked - Makeup', async() => {
    await headerTop.clickCategoriesMakeup();
    await expect(headerTop.categorySelected).toHaveText('Makeup');
  });

  await test.step('AC: Option can be picked - Skincare', async() => {
    await headerTop.clickCategoriesSkincare();
    await expect(headerTop.categorySelected).toHaveText('Skincare');
  });

  await test.step('AC: Option can be picked - Fragrance', async() => {
    await headerTop.clickCategoriesFragrance();
    await expect(headerTop.categorySelected).toHaveText('Fragrance');
  });

  await test.step('AC: Option can be picked - Men', async() => {
    await headerTop.clickCategoriesMen();
    await expect(headerTop.categorySelected).toHaveText('Men');
  });

  await test.step('AC: Option can be picked - Hair Care', async() => {
    await headerTop.clickCategoriesHaircare();
    await expect(headerTop.categorySelected).toHaveText('Hair Care');
  });

  await test.step('AC: Option can be picked - Books', async() => {
    await headerTop.clickCategoriesBooks();
    await expect(headerTop.categorySelected).toHaveText('Books');
  });

});

test('Scenario: Searching a keyword in the Search field whilst on the homepage', async ({ headerTop, search }) => {

  await test.step('AC: The field can be interacted with', async() => {
    await headerTop.clickSearchField();
  });
      
  await test.step('AC: User can type a phrase', async() => {
    await headerTop.fillSearchField();
  });

  await test.step('AC: Find button can be clicked', async() => {
    await headerTop.clickSearchButton();
  });

  await test.step('AC: The search function should work', async() => {
    await expect(search.searchCriteriaField).toHaveValue('keyword');
  });

});

test('Scenario: Clicking the Facebook button whilst on the expanded home menu', async ({ headerTop }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickFacebookButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.facebook).toHaveAttribute('href','http://www.facebook.com');
  });

});

test('Scenario: Clicking the Twitter button whilst on the expanded home menu', async ({ headerTop }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickTwitterButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.twitter).toHaveAttribute('href','https://twitter.com/');
  });

});

test('Scenario: Clicking the Linkedin button whilst on the expanded home menu', async ({ headerTop }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickLinkedinButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL('https://uk.linkedin.com/');
  });

});

test('Scenario: Hovering over the Apparels and Accessories button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be interacted with', async() => {
    await headerBot.hoverApparelsButton();
  });

  await test.step('AC: Correct options are listed', async() => {
    await expect(headerBot.shoesLink).toBeVisible();
    await expect(headerBot.tshirtsLink).toBeVisible();
  });

});

test('Scenario: Hovering over the Makeup button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be interacted with', async() => {
    await headerBot.hoverMakeupButton();
  });

  await test.step('AC: Correct options are listed', async() => {
    await expect(headerBot.makeupCheeksLink).toBeVisible();
    await expect(headerBot.makeupEyesLink).toBeVisible();
    await expect(headerBot.makeupFaceLink).toBeVisible();
    await expect(headerBot.makeupLipsLink).toBeVisible();
    await expect(headerBot.makeupNailsLink).toBeVisible();
    await expect(headerBot.makeupSetsLink).toBeVisible();
  });

});

test('Scenario: Hovering over the Skincare button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be interacted with', async() => {
    await headerBot.hoverSkincareButton();
  });

  await test.step('AC: Correct options are listed', async() => {
    await expect(headerBot.skincareEyesLink).toBeVisible();
    await expect(headerBot.skincareFaceLink).toBeVisible();
    await expect(headerBot.skincareGiftLink).toBeVisible();
    await expect(headerBot.skincareHandsNailsLink).toBeVisible();
    await expect(headerBot.skincareSunLink).toBeVisible();
  });

});

test('Scenario: Hovering over the Fragrance button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be interacted with', async() => {
    await headerBot.hoverFragranceButton();
  });

  await test.step('AC: Correct options are listed', async() => {
    await expect(headerBot.fragranceMenLink).toBeVisible();
    await expect(headerBot.fragranceWomenLink).toBeVisible();
  });

});

test('Scenario: Hovering over the Men button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be interacted with', async() => {
    await headerBot.hoverMenButton();
  });

  await test.step('AC: Correct options are listed', async() => {
    await expect(headerBot.menBodyLink).toBeVisible();
    await expect(headerBot.menFragranceLink).toBeVisible();
    await expect(headerBot.menShaveLink).toBeVisible();
    await expect(headerBot.menSkincareLink).toBeVisible();
  });

});

test('Scenario: Hovering over the Haircare button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be interacted with', async() => {
    await headerBot.hoverHaircareButton();
  });

  await test.step('AC: Correct options are listed', async() => {
    await expect(headerBot.hairConditionerLink).toBeVisible();
    await expect(headerBot.hairShampooLink).toBeVisible();
  });

});

test('Scenario: Hovering over the Books button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be interacted with', async() => {
    await headerBot.hoverBooksButton();
  });

  await test.step('AC: Correct options are listed', async() => {
    await expect(headerBot.booksAudioLink).toBeVisible();
    await expect(headerBot.booksPaperbackLink).toBeVisible();
  });

});

test('Scenario: Clicking the Apparel and Accessories button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickApparelsButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.apparelPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.apparelTitle);
  });

});

test('Scenario: Clicking the Makeup button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickMakeupButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.makeupPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.makeupTitle);
  });

});

test('Scenario: Clicking the Skincare button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickSkincareButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.skincarePage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.skincareTitle);
  });

});

test('Scenario: Clicking the Fragrance button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickFragranceButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.fragrancePage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.fragranceTitle);
  });

});

test('Scenario: Clicking the Men button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickMenButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.menPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.menTitle);
  });

});

test('Scenario: Clicking the Haircare button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickHaircareButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.haircarePage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.haircareTitle);
  });

});

test('Scenario: Clicking the Books button whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickBooksButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.booksPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.booksTitle);
  });

});

test('Scenario: Clicking the Shoes button whilst on the Apparel and Accessories dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Apparel and Accessories dropdown', async() => {
    await headerBot.hoverApparelsButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickShoesLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.shoesCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.shoesTitle);
  });

});

test('Scenario: Clicking the T-shirts button whilst on the Apparel and Accessories dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Apparel and Accessories dropdown', async() => {
    await headerBot.hoverApparelsButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickTshirtsLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.tshirtsCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.tshirtsTitle);
  });

});

test('Scenario: Clicking the Cheeks button whilst on the Makeup dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Makeup dropdown', async() => {
    await headerBot.hoverMakeupButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickMakeupCheeksLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.makeupCheeksCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.makeupCheeksTitle);
  });

});

test('Scenario: Clicking the Eyes button whilst on the Makeup dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Makeup dropdown', async() => {
    await headerBot.hoverMakeupButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickMakeupEyesLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.makeupEyesCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.makeupEyesTitle);
  });

});

test('Scenario: Clicking the Face button whilst on the Makeup dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Makeup dropdown', async() => {
    await headerBot.hoverMakeupButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickMakeupFaceLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.makeupFaceCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.makeupFaceTitle);
  });

});

test('Scenario: Clicking the Lips button whilst on the Makeup dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Makeup dropdown', async() => {
    await headerBot.hoverMakeupButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickMakeupLipsLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.makeupLipsCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.makeupLipsTitle);
  });

});

test('Scenario: Clicking the Nails button whilst on the Makeup dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Makeup dropdown', async() => {
    await headerBot.hoverMakeupButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickMakeupNailsLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.makeupNailsCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.makeupNailsTitle);
  });

});

test('Scenario: Clicking the Value Sets button whilst on the Makeup dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Makeup dropdown', async() => {
    await headerBot.hoverMakeupButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickMakeupSetsLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.makeupSetsCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.makeupSetsTitle);
  });

});

test('Scenario: Clicking the Eyes button whilst on the Skin Care dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Skincare dropdown', async() => {
    await headerBot.hoverSkincareButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickSkincareEyesLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.skincareEyesCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.skincareEyesTitle);
  });

});

test('Scenario: Clicking the Face button whilst on the Skin Care dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Skincare dropdown', async() => {
    await headerBot.hoverSkincareButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickSkincareFaceLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.skincareFaceCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.skincareFaceTitle);
  });

});

test('Scenario: Clicking the Gift Ideas & Sets button whilst on the Skin Care dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Skincare dropdown', async() => {
    await headerBot.hoverSkincareButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickSkincareGiftLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.skincareGiftsCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.skincareGiftsTitle);
  });

});

test('Scenario: Clicking the Hands & Nails button whilst on the Skin Care dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Skincare dropdown', async() => {
    await headerBot.hoverSkincareButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickSkincareHandsNailsLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.skincareHandsNailsCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.skincareHandsNailsTitle);
  });

});

test('Scenario: Clicking the Sun button whilst on the Skin Care dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Skincare dropdown', async() => {
    await headerBot.hoverSkincareButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickSkincareSunLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.skincareSunCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.skincareSunTitle);
  });

});

test('Scenario: Clicking the Men button whilst on the Fragrance dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Fragrance dropdown', async() => {
    await headerBot.hoverFragranceButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickFragranceMenLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.fragranceMenCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.fragranceMenTitle);
  });

});

test('Scenario: Clicking the Women button whilst on the Fragrance dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Fragrance dropdown', async() => {
    await headerBot.hoverFragranceButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickFragranceWomenLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.fragranceWomenCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.fragranceWomenTitle);
  });

});

test('Scenario: Clicking the Body & Shower button whilst on the Men dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Men dropdown', async() => {
    await headerBot.hoverMenButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickMenBodyLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.menBodyShowerCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.menBodyShowerTitle);
  });

});

test('Scenario: Clicking the Fragrance Sets button whilst on the Men dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Men dropdown', async() => {
    await headerBot.hoverMenButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickMenFragranceLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.menFragranceCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.menFragranceTitle);
  });

});

test('Scenario: Clicking the Pre Shave & Shaving button whilst on the Men dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Men dropdown', async() => {
    await headerBot.hoverMenButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickMenShaveLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.menShaveCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.menShaveTitle);
  });

});

test('Scenario: Clicking the Skincare button whilst on the Men dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Men dropdown', async() => {
    await headerBot.hoverMenButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickMenSkincareLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.menSkincareCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.menSkincareTitle);
  });

});

test('Scenario: Clicking the Conditioner button whilst on the Haircare dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Hair Care dropdown', async() => {
    await headerBot.hoverHaircareButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickHaircareConditionerLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.hairConditionerCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.hairConditionerTitle);
  });

});

test('Scenario: Clicking the Shampoo button whilst on the Haircare dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Hair Care dropdown', async() => {
    await headerBot.hoverHaircareButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickHairCareShampooLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.hairShampooCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.hairShampooTitle);
  });

});

test('Scenario: Clicking the Audio CD button whilst on the Books dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Books dropdown', async() => {
    await headerBot.hoverBooksButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickBooksAudioLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.booksAudioCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.booksAudioCDTitle);
  });

});

test('Scenario: Clicking the Paperback button whilst on the Books dropdown', async ({ headerBot }) => {
   
  await test.step('Expand the Books dropdown', async() => {
    await headerBot.hoverBooksButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickBooksPaperbackLink();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerBot.page).toHaveURL(urls.booksPaperbackCategoryPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(headerBot.page).toHaveTitle(title.booksPaperbackTitle);
  });

});

test('Scenario: Checking out the slides section whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The section is visible', async() => {
    await expect(headerBot.slideSection).toBeVisible();
    await expect(headerBot.firstSlide).toBeVisible();
  });

});

test('Scenario: Clicking the previous slide button whilst on the homepage', async ({ headerBot }) => {

  await test.step('Hover over the slide section', async() => {
    await headerBot.hoverSlideSection();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickPreviousSlideButton();
  });

  await test.step('AC: The slides change', async() => {
    await expect(headerBot.thirdSlide).toBeVisible();
  });

});

test('Scenario: Clicking the next slide button whilst on the homepage', async ({ headerBot }) => {

  await test.step('Hover over the slide section', async() => {
    await headerBot.hoverSlideSection();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerBot.clickNextSlideButton();
  });

  await test.step('AC: The slides change', async() => {
    await expect(headerBot.secondSlide).toBeVisible();
  });

});

test('Scenario: Checking out the promotional section whilst on the homepage', async ({ headerBot }) => {
   
  await test.step('AC: The section is visible', async() => {
    await expect(headerBot.promotionalSection).toBeVisible();
  });

});

test('Scenario: Checking out the featured products section whilst on the homepage', async ({ featured }) => {
   
  await test.step('AC: The section is visible', async() => {
    await expect(featured.featuredSection).toBeVisible();
  });

});

test('Scenario: Checking out an Item in the featured section whilst on the homepage', async ({ featured }) => {
   
  await test.step('AC: The item is displayed', async() => {
    await expect(featured.firstItem).toBeVisible();
  });

  await test.step('AC: Item has correct elements displayed', async() => {
    await expect(featured.firstItemName).toBeVisible();
    await expect(featured.firstItemImg).toBeVisible();
    await expect(featured.firstItemPrice).toBeVisible();
    await expect(featured.firstItemCartButton).toBeVisible();
  });

});

test('Scenario: Clicking Item name in the featured section whilst on the homepage', async ({ featured }) => {
   
  await test.step('AC: The name can be clicked', async() => {
    await featured.clickFirstItemName();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(featured.page).toHaveURL(urls.firstFeaturedItem);
  });

});

test('Scenario: Hovering over an Item in the featured section whilst on the homepage', async ({ featured }) => {
   
  await test.step('Hover over an item', async() => {
    await featured.hoverFirstItem();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(featured.firstItemViewButton).toBeVisible();
    await expect(featured.firstItemReviewButton).toBeVisible();
  });

});

test('Scenario: Clicking View button of a hovered over item in the featured section whilst on the homepage', async ({ featured }) => {
   
  await test.step('Hover over an item', async() => {
    await featured.hoverFirstItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await featured.clickFirstItemViewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(featured.page).toHaveURL(urls.firstFeaturedItem);
  });

});

test('Scenario: Clicking Write review button of a hovered over item in the featured section whilst on the homepage', async ({ featured, skinsheenBronzeStickProduct }) => {
   
  await test.step('Hover over an item', async() => {
    await featured.hoverFirstItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await featured.clickFirstItemReviewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(skinsheenBronzeStickProduct.reviewForm).toBeVisible();
  });

});

test('Scenario: Checking out an Item price in the featured section whilst on the homepage', async ({ featured }) => {
  
  await test.step('AC: Item price is displayed', async() => {
    await expect(featured.firstItemPrice).toHaveText(`$${items.firstFeaturedItemPrice.toFixed(2)}`);
  });

});

test('Scenario: Checking out the latest products section whilst on the homepage', async ({ latest }) => {
   
  await test.step('AC: The section is visible', async() => {
    await expect(latest.latestSection).toBeVisible();
  });

});

test('Scenario: Checking out an Item in the latest section whilst on the homepage', async ({ latest }) => {
   
  await test.step('AC: The item is displayed', async() => {
    await expect(latest.firstItem).toBeVisible();
  });

  await test.step('AC: Item has correct elements displayed', async() => {
    await expect(latest.firstItemName).toBeVisible();
    await expect(latest.firstItemImg).toBeVisible();
    await expect(latest.firstItemPrice).toBeVisible();
    await expect(latest.firstItemCartButton).toBeVisible();
  });

});

test('Scenario: Clicking Item name in the latest section whilst on the homepage', async ({ latest }) => {
   
  await test.step('AC: The name can be clicked', async() => {
    await latest.clickFirstItemName();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(latest.page).toHaveURL(urls.firstLatestItem);
  });

});

test('Scenario: Hovering over an Item in the latest section whilst on the homepage', async ({ latest }) => {
   
  await test.step('Hover over an item', async() => {
    await latest.hoverFirstItem();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(latest.firstItemViewButton).toBeVisible();
    await expect(latest.firstItemReviewButton).toBeVisible();
  });

});

test('Scenario: Clicking View button of a hovered over item in the latest section whilst on the homepage', async ({ latest }) => {
   
  await test.step('Hover over an item', async() => {
    await latest.hoverFirstItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await latest.clickFirstItemViewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(latest.page).toHaveURL(urls.firstLatestItem);
  });

});

test('Scenario: Clicking Write review button of a hovered over item in the latest section whilst on the homepage', async ({ latest, absoluteAntiAgeProduct }) => {
   
  await test.step('Hover over an item', async() => {
    await latest.hoverFirstItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await latest.clickFirstItemReviewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(absoluteAntiAgeProduct.reviewForm).toBeVisible();
  });

});

test('Scenario: Checking out an Item price in the latest section whilst on the homepage', async ({ latest }) => {
  
  await test.step('AC: Item price is displayed', async() => {
    await expect(latest.firstItemPrice).toHaveText(`$${items.firstLatestItemPrice.toFixed(2)}`);
  });

});

test('Scenario: Checking out the bestsellers products section whilst on the homepage', async ({ bestsellers }) => {
   
  await test.step('AC: The section is visible', async() => {
    await expect(bestsellers.bestsellersSection).toBeVisible();
  });

});

test('Scenario: Checking out an Item in the bestsellers section whilst on the homepage', async ({ bestsellers }) => {
   
  await test.step('AC: The item is displayed', async() => {
    await expect(bestsellers.firstItem).toBeVisible();
  });

  await test.step('AC: Item has correct elements displayed', async() => {
    await expect(bestsellers.firstItemName).toBeVisible();
    await expect(bestsellers.firstItemImg).toBeVisible();
    await expect(bestsellers.firstItemPrice).toBeVisible();
    await expect(bestsellers.firstItemCartButton).toBeVisible();
  });

});

test('Scenario: Clicking Item name in the bestsellers section whilst on the homepage', async ({ bestsellers }) => {
   
  await test.step('AC: The name can be clicked', async() => {
    await bestsellers.clickFirstItemName();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(bestsellers.page).toHaveURL(urls.firstBestsellersItem);
  });

});

test('Scenario: Hovering over an Item in the bestsellers section whilst on the homepage', async ({ bestsellers }) => {
   
  await test.step('Hover over an item', async() => {
    await bestsellers.hoverFirstItem();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(bestsellers.firstItemViewButton).toBeVisible();
    await expect(bestsellers.firstItemReviewButton).toBeVisible();
  });

});

test('Scenario: Clicking View button of a hovered over item in the bestsellers section whilst on the homepage', async ({ bestsellers }) => {
   
  await test.step('Hover over an item', async() => {
    await bestsellers.hoverFirstItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await bestsellers.clickFirstItemViewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(bestsellers.page).toHaveURL(urls.firstBestsellersItem);
  });

});

test('Scenario: Clicking Write review button of a hovered over item in the bestsellers section whilst on the homepage', async ({ bestsellers, baseballTshirtProduct }) => {
   
  await test.step('Hover over an item', async() => {
    await bestsellers.hoverFirstItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await bestsellers.clickFirstItemReviewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(baseballTshirtProduct.reviewForm).toBeVisible();
  });

});

test('Scenario: Checking out an Item price in the bestsellers section whilst on the homepage', async ({ bestsellers }) => {
  
  await test.step('AC: Item price is displayed', async() => {
    await expect(bestsellers.firstItemPrice).toHaveText(`$${items.firstBestsellersItemPrice.toFixed(2)}`);
  });

});

test('Scenario: Checking out the specials products section whilst on the homepage', async ({ specials }) => {
   
  await test.step('AC: The section is visible', async() => {
    await expect(specials.specialsSection).toBeVisible();
  });

});

test('Scenario: Checking out an Item in the specials section whilst on the homepage', async ({ specials }) => {
   
  await test.step('AC: The item is displayed', async() => {
    await expect(specials.firstItem).toBeVisible();
  });

  await test.step('AC: Item has correct elements displayed', async() => {
    await expect(specials.firstItemName).toBeVisible();
    await expect(specials.firstItemImg).toBeVisible();
    await expect(specials.firstItemSaleTag).toBeVisible();
    await expect(specials.firstItemOldPrice).toBeVisible();
    await expect(specials.firstItemNewPrice).toBeVisible();
    await expect(specials.firstItemCartButton).toBeVisible();
  });

});

test('Scenario: Clicking Item name in the specials section whilst on the homepage', async ({ specials }) => {
   
  await test.step('AC: The name can be clicked', async() => {
    await specials.clickFirstItemName();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(specials.page).toHaveURL(urls.firstSpecialsItem);
  });

});

test('Scenario: Hovering over an Item in the specials section whilst on the homepage', async ({ specials }) => {
   
  await test.step('Hover over an item', async() => {
    await specials.hoverFirstItem();
  });

  await test.step('AC: The name should lead to correct page', async() => {
    await expect(specials.firstItemViewButton).toBeVisible();
    await expect(specials.firstItemReviewButton).toBeVisible();
  });

});

test('Scenario: Clicking View button of a hovered over item in the specials section whilst on the homepage', async ({ specials }) => {
   
  await test.step('Hover over an item', async() => {
    await specials.hoverFirstItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await specials.clickFirstItemViewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(specials.page).toHaveURL(urls.firstSpecialsItem);
  });

});

test('Scenario: Clicking Write review button of a hovered over item in the specials section whilst on the homepage', async ({ specials, absoluteEyeProduct }) => {
   
  await test.step('Hover over an item', async() => {
    await specials.hoverFirstItem();
  });

  await test.step('AC: The button can be clicked', async() => {
    await specials.clickFirstItemReviewButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(absoluteEyeProduct.reviewForm).toBeVisible();
  });

});

test('Scenario: Checking out an Item new price in the specials section whilst on the homepage', async ({ specials }) => {
  
  await test.step('AC: Item price is displayed', async() => {
    await expect(specials.firstItemNewPrice).toHaveText(`$${items.firstSpecialsItemNewPrice.toFixed(2)}`);
  });

});

test('Scenario: Checking out an Item old price in the specials section whilst on the homepage', async ({ specials }) => {
  
  await test.step('AC: Item price is displayed', async() => {
    await expect(specials.firstItemOldPrice).toHaveText(`$${items.firstSpecialsItemOldPrice.toFixed(2)}`);
  });

});

test('Scenario: Clicking Benefit manufacturer button whilst on the homepage', async ({ brands }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await brands.clickBenefitBrand();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(brands.page).toHaveURL(urls.benefitManufacturer);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(brands.page).toHaveTitle(title.benefitTitle);
  });

});

test('Scenario: Clicking Pantene manufacturer button whilst on the homepage', async ({ brands }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await brands.clickPanteneBrand();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(brands.page).toHaveURL(urls.panteneManufacturer);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(brands.page).toHaveTitle(title.panteneTitle);
  });

});

test('Scenario: Clicking MAC manufacturer button whilst on the homepage', async ({ brands }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await brands.clickMacBrand();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(brands.page).toHaveURL(urls.macManufacturer);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(brands.page).toHaveTitle(title.macTitle);
  });

});

test('Scenario: Clicking Lancome manufacturer button whilst on the homepage', async ({ brands }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await brands.clickLancomeBrand();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(brands.page).toHaveURL(urls.lancomeManufacturer);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(brands.page).toHaveTitle(title.lancomeTitle);
  });

});

test('Scenario: Clicking Gucci manufacturer button whilst on the homepage', async ({ brands }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await brands.clickGucciBrand();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(brands.page).toHaveURL(urls.gucciManufacturer);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(brands.page).toHaveTitle(title.gucciTitle);
  });

});

test('Scenario: Clicking Giorgio Armani manufacturer button whilst on the homepage', async ({ brands }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await brands.clickArmaniBrand();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(brands.page).toHaveURL(urls.armaniManufacturer);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(brands.page).toHaveTitle(title.armaniTitle);
  });

});

test('Scenario: Clicking Dove manufacturer button whilst on the homepage', async ({ brands }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await brands.clickDoveBrand();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(brands.page).toHaveURL(urls.doveManufacturer);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(brands.page).toHaveTitle(title.doveTitle);
  });

});

test('Scenario: Clicking Calvin Klein manufacturer button whilst on the homepage', async ({ brands }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await brands.clickCalvinKleinBrand();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(brands.page).toHaveURL(urls.calvinManufacturer);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(brands.page).toHaveTitle(title.calvinTitle);
  });

});

test('Scenario: Clicking Bvlgari manufacturer button whilst on the homepage', async ({ brands }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await brands.clickBulgariBrand();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(brands.page).toHaveURL(urls.bulgariManufacturer);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(brands.page).toHaveTitle(title.bulgariTitle);
  });

});

test('Scenario: Clicking Sephora manufacturer button whilst on the homepage', async ({ brands }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await brands.clickSephoraBrand();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(brands.page).toHaveURL(urls.sephoraManufacturer);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(brands.page).toHaveTitle(title.sephoraTitle);
  });

});

test('Scenario: Checking out footer section whilst on the homepage', async ({ footer }) => {
   
  await test.step('AC: The section is visible', async() => {
    await expect(footer.footer).toBeVisible();
  });

});

test('Scenario: Checking out about us section in the footer whilst on the homepage', async ({ footer }) => {
   
  await test.step('AC: The section is visible', async() => {
    await expect(footer.aboutUsSection).toBeVisible();
  });

});

test('Scenario: Checking out contact us section in the footer whilst on the homepage', async ({ footer }) => {
   
  await test.step('AC: The section is visible', async() => {
    await expect(footer.contactUsSection).toBeVisible();
  });

});

test('Scenario: Checking out testimonials section in the footer whilst on the homepage', async ({ footer }) => {
   
  await test.step('AC: The section is visible', async() => {
    await expect(footer.testimonialsSection).toBeVisible();
  });

});

test('Scenario: Checking out newsletter signup section in the footer whilst on the homepage', async ({ footer }) => {
   
  await test.step('AC: The section is visible', async() => {
    await expect(footer.newsletterSection).toBeVisible();
  });

});

test('Scenario: Clicking testimonials buttons in the testimonials section whilst on the homepage', async ({ footer }) => {
   
  await test.step('AC: The button can be clicked - first', async() => {
    await footer.clickFirstTestimonialButton();
  });

  await test.step('AC: Testimonials change when the button is clicked - first', async() => {
    await expect(footer.testimonialsFirstSlide).toBeVisible();
  });

  await test.step('AC: The button can be clicked - second', async() => {
    await footer.clickSecondTestimonialButton();
  });

  await test.step('AC: Testimonials change when the button is clicked - second', async() => {
    await expect(footer.testimonialsSecondSlide).toBeVisible();
  });

  await test.step('AC: The button can be clicked - third', async() => {
    await footer.clickThirdTestimonialButton();
  });

  await test.step('AC: Testimonials change when the button is clicked - third', async() => {
    await expect(footer.testimonialsThirdSlide).toBeVisible();
  });

  await test.step('AC: The button can be clicked - fourth', async() => {
    await footer.clickFourthTestimonialButton();
  });

  await test.step('AC: Testimonials change when the button is clicked - fourth', async() => {
    await expect(footer.testimonialsFourthSlide).toBeVisible();
  });

});

test('Scenario: Filling out newsletter signup field in the footer whilst on the homepage', async ({ footer }) => {
   
  await test.step('AC: The field can be filled out', async() => {
    await footer.fillSubscribeNewsletterField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(footer.subscribeNewsletterField).toHaveValue('email@example.com');
  });

});

test('Scenario: Subscribing to a newsletter in the footer whilst on the homepage', async ({ footer }) => {
   
  await test.step('Fill out the field', async() => {
    await footer.fillSubscribeNewsletterField();
  });

  await test.step('AC: The button can be clicked', async() => {
    await footer.clickSubscribeNewsletterButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(footer.page).toHaveURL(urls.notifications);
  });

});

test('Scenario: Clicking About us button whilst on the homepage', async ({ footer }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await footer.clickAboutUsButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(footer.page).toHaveURL(urls.aboutUsPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(footer.page).toHaveTitle(title.aboutUsTitle);
  });

});

test('Scenario: Clicking Privacy Policy button whilst on the homepage', async ({ footer }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await footer.clickPrivacyPolicyButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(footer.page).toHaveURL(urls.privacyPolicyPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(footer.page).toHaveTitle(title.privacyPolicyTitle);
  });

});

test('Scenario: Clicking Return Policy button whilst on the homepage', async ({ footer }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await footer.clickReturnPolicyButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(footer.page).toHaveURL(urls.returnPolicyPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(footer.page).toHaveTitle(title.returnPolicyTitle);
  });

});

test('Scenario: Clicking Shipping button whilst on the homepage', async ({ footer }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await footer.clickShippingButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(footer.page).toHaveURL(urls.shippingPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(footer.page).toHaveTitle(title.shippingTitle);
  });

});

test('Scenario: Clicking Contact Us button whilst on the homepage', async ({ footer }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await footer.clickContactUsButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(footer.page).toHaveURL(urls.contactUsPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(footer.page).toHaveTitle(title.contactUsTitle);
  });

});

test('Scenario: Clicking Site map button whilst on the homepage', async ({ footer }) => {
   
  await test.step('AC: The button can be clicked', async() => {
    await footer.clickSiteMapButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(footer.page).toHaveURL(urls.siteMapPage);
  });

  await test.step('AC: Correct Title is displayed', async() => {
    await expect(footer.page).toHaveTitle(title.siteMapTitle);
  });

});

test('Scenario: Clicking Go top button whilst on the homepage', async ({ footer, headerTop }) => {
   
  await test.step('Scroll down', async() => {
    await footer.footer.scrollIntoViewIfNeeded();
  });

  await test.step('AC: The button can be clicked', async() => {
    await footer.clickGoTopButton();
  });

  await test.step('AC: The button should return the user to the top', async() => {
    await expect(headerTop.logo).toBeInViewport();
  });

});