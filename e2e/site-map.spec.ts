import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';

test('Scenario: Clicking the Apparel & Accessories link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickApparelLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.apparelPage);
  });
  
});

test('Scenario: Clicking the Shoes link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickShoesLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.shoesCategoryPage);
  });
  
});

test('Scenario: Clicking the T-shirts link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickTshirtLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.tshirtsCategoryPage);
  });
  
});

test('Scenario: Clicking the Makeup link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickMakeupLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.makeupPage);
  });
  
});

test('Scenario: Clicking the Makeup Cheeks link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickMakeupCheeksLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.makeupCheeksCategoryPage);
  });
  
});

test('Scenario: Clicking the Makeup Eyes link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickMakeupEyesLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.makeupEyesCategoryPage);
  });
  
});

test('Scenario: Clicking the Makeup Face link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickMakeupFaceLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.makeupFaceCategoryPage);
  });
  
});

test('Scenario: Clicking the Makeup Lips link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickMakeupLipsLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.makeupLipsCategoryPage);
  });
  
});

test('Scenario: Clicking the Makeup Nails link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickMakeupNailsLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.makeupNailsCategoryPage);
  });
  
});

test('Scenario: Clicking the Makeup Value Sets link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickMakeupSetsLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.makeupSetsCategoryPage);
  });
  
});

test('Scenario: Clicking the Skincare link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickSkincareLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.skincarePage);
  });
  
});

test('Scenario: Clicking the Skincare Eyes link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickSkincareEyesLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.skincareEyesCategoryPage);
  });
  
});

test('Scenario: Clicking the Skincare Face link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickSkincareFaceLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.skincareFaceCategoryPage);
  });
  
});

test('Scenario: Clicking the Skincare Gift Ideas & Sets link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickSkincareGiftIdeasLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.skincareGiftsCategoryPage);
  });
  
});

test('Scenario: Clicking the Skincare Hands & Nails link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickSkincareHandsNailsLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.skincareHandsNailsCategoryPage);
  });
  
});

test('Scenario: Clicking the Skincare Sun link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickSkincareSunLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.skincareSunCategoryPage);
  });
  
});

test('Scenario: Clicking the Fragrance link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickFragranceLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.fragrancePage);
  });
  
});

test('Scenario: Clicking the Fragrance Men link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickFragranceMenLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.fragranceMenCategoryPage);
  });
  
});

test('Scenario: Clicking the Fragrance Women link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickFragranceWomenLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.fragranceWomenCategoryPage);
  });
  
});

test('Scenario: Clicking the Men category link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickMenLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.menPage);
  });
  
});

test('Scenario: Clicking the Men Body & Shower link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickMenBodyShowerLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.menBodyShowerCategoryPage);
  });
  
});

test('Scenario: Clicking the Men Fragrance Sets link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickMenFragranceLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.menFragranceCategoryPage);
  });
  
});

test('Scenario: Clicking the Men Pre-Shave & Shaving link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickMenShaveLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.menShaveCategoryPage);
  });
  
});

test('Scenario: Clicking the Men Skincare link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickMenSkincareLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.menSkincareCategoryPage);
  });
  
});

test('Scenario: Clicking the Hair Care link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickHaircareLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.haircarePage);
  });
  
});

test('Scenario: Clicking the Conditioner link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickHaircareConditionerLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.hairConditionerCategoryPage);
  });
  
});

test('Scenario: Clicking the Shampoo link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickHaircareShampooLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.hairShampooCategoryPage);
  });
  
});

test('Scenario: Clicking the Books link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickBooksLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.booksPage);
  });
  
});

test('Scenario: Clicking the Audio CD link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickBooksAudioLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.booksAudioCategoryPage);
  });
  
});

test('Scenario: Clicking the Paperback link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickBooksPaperbackLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.booksPaperbackCategoryPage);
  });
  
});

test('Scenario: Clicking the Special Offers link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickSpecialOffersLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.specialsPage);
  });
  
});

test('Scenario: Clicking the My Account link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickAccountLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.accountPage);
  });
  
});

test('Scenario: Clicking the Account Information link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickAccountInformationLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.editAccountDetails);
  });
  
});

test('Scenario: Clicking the Password link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickAccountPasswordLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.changePassword);
  });
  
});

test('Scenario: Clicking the Address Book link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickAccountAddressBookLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.manageAddressBook);
  });
  
});

test('Scenario: Clicking the Order History link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickAccountOrderHistoryLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.orderHistory);
  });
  
});

test('Scenario: Clicking the Downloads link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickAccountDownloadsLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.downloads);
  });
  
});

test('Scenario: Clicking the Shopping Cart link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickShoppingCartLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.cartPage);
  });
  
});

test('Scenario: Clicking the Checkout link whilst on the site map page', async ({ featured, headerTop, basket, footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await featured.clickFirstItemCartButton();
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickCheckoutLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.checkoutPage);
  });

  await test.step('Cleanup', async() => {
    await headerTop.clickCartButton();
    await basket.clickRemoveButton();
  });
  
});

test('Scenario: Clicking the Search link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickSearchLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL('/index.php?rt=product/search');
  });
  
});

test('Scenario: Clicking the About Us link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickAboutUsLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.aboutUsPage);
  });
  
});

test('Scenario: Clicking the Privacy Policy link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickPrivacyPolicyLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.privacyPolicyPage);
  });
  
});

test('Scenario: Clicking the Return Policy link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickReturnPolicyLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.returnPolicyPage);
  });
  
});

test('Scenario: Clicking the Shipping link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickShippingLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.shippingPage);
  });
  
});

test('Scenario: Clicking the Contact Us link whilst on the site map page', async ({ footer, footerSiteMap }) => {

  await test.step('Navigate to the Site Map page', async() => {
    await footer.clickSiteMapButton();
  });
        
  await test.step('AC: The link can be clicked', async() => {
    await footerSiteMap.clickContactUsLink();
  });

  await test.step('AC: The link should lead to correct page', async() => {
    await expect(footerSiteMap.page).toHaveURL(urls.contactUsPage);
  });
  
});