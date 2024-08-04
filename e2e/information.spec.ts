import { test, expect } from '../utils/fixtures/fixtures';

test('Scenario: Checking out the About us page content', async ({ footer, footerAboutUs }) => {

  await test.step('Navigate to the About Us page', async() => {
    await footer.clickAboutUsButton();
  });
      
  await test.step('AC: The content is visible', async() => {
    await expect(footerAboutUs.aboutUsSection).toBeVisible();
  });

});

test('Scenario: Clicking continue button on the About us page', async ({ footer, footerAboutUs }) => {

  await test.step('Navigate to the About Us page', async() => {
    await footer.clickAboutUsButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await footerAboutUs.clickContinueButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(footerAboutUs.page).toHaveURL('/');
  });

});

test('Scenario: Checking out the Privacy Policy page content', async ({ footer, footerPrivacyPolicy }) => {

  await test.step('Navigate to the Privacy Policy page', async() => {
    await footer.clickPrivacyPolicyButton();
  });
      
  await test.step('AC: The content is visible', async() => {
    await expect(footerPrivacyPolicy.privacySection).toBeVisible();
  });

});

test('Scenario: Clicking continue button on the Privacy Policy page', async ({ footer, footerPrivacyPolicy }) => {

  await test.step('Navigate to the Privacy Policy page', async() => {
    await footer.clickPrivacyPolicyButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await footerPrivacyPolicy.clickContinueButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(footerPrivacyPolicy.page).toHaveURL('/');
  });

});

test('Scenario: Checking out the Return Policy page content', async ({ footer, footerReturnPolicy }) => {

  await test.step('Navigate to the Return Policy page', async() => {
    await footer.clickReturnPolicyButton();
  });
      
  await test.step('AC: The content is visible', async() => {
    await expect(footerReturnPolicy.privacySection).toBeVisible();
  });

});

test('Scenario: Clicking continue button on the Return Policy page', async ({ footer, footerReturnPolicy }) => {

  await test.step('Navigate to the Return Policy page', async() => {
    await footer.clickReturnPolicyButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await footerReturnPolicy.clickContinueButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(footerReturnPolicy.page).toHaveURL('/');
  });

});

test('Scenario: Checking out the Shipping page content', async ({ footer, footerShipping }) => {

  await test.step('Navigate to the Shipping page', async() => {
    await footer.clickShippingButton();
  });
      
  await test.step('AC: The content is visible', async() => {
    await expect(footerShipping.shippingSection).toBeVisible();
  });

});

test('Scenario: Clicking continue button on the Shipping page', async ({ footer, footerShipping }) => {

  await test.step('Navigate to the Shipping page', async() => {
    await footer.clickShippingButton();
  });
      
  await test.step('AC: The button can be clicked', async() => {
    await footerShipping.clickContinueButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(footerShipping.page).toHaveURL('/');
  });

});