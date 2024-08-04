import { test, expect } from '../utils/fixtures/fixtures';
import { user } from '../utils/variables/user';

test('Scenario: Checking out the Contact us page content', async ({ footer, footerContactUs }) => {

  await test.step('Navigate to the Contact Us page', async() => {
    await footer.clickContactUsButton();
  });
      
  await test.step('AC: The content is visible', async() => {
    await expect(footerContactUs.contactSection).toBeVisible();
  });

});

test('Scenario: Filling out First name field on the Contact us page', async ({ footer, footerContactUs }) => {

  await test.step('Navigate to the Contact Us page', async() => {
    await footer.clickContactUsButton();
  });
      
  await test.step('AC: The field can be filled', async() => {
    await footerContactUs.fillFirstNameField();
  });

  await test.step('AC: Correct data is entered', async() => {
    await expect(footerContactUs.firstNameField).toHaveValue(user.firstName);
  });

});

test('Scenario: Filling out Email field on the Contact us page', async ({ footer, footerContactUs }) => {

  await test.step('Navigate to the Contact Us page', async() => {
    await footer.clickContactUsButton();
  });
      
  await test.step('AC: The field can be filled', async() => {
    await footerContactUs.fillEmailField();
  });

  await test.step('AC: Correct data is entered', async() => {
    await expect(footerContactUs.emailField).toHaveValue(user.emailAddress);
  });

});

test('Scenario: Filling out Enquiry field on the Contact us page', async ({ footer, footerContactUs }) => {

  await test.step('Navigate to the Contact Us page', async() => {
    await footer.clickContactUsButton();
  });
      
  await test.step('AC: The field can be filled', async() => {
    await footerContactUs.fillEnquiryField();
  });

  await test.step('AC: Correct data is entered', async() => {
    await expect(footerContactUs.enquiryField).toHaveValue('This is a test enquiry');
  });

});

test('Scenario: Clicking Reset button on the Contact us page', async ({ footer, footerContactUs }) => {

  await test.step('Navigate to the Contact Us page', async() => {
    await footer.clickContactUsButton();
  });
      
  await test.step('Fill out the fields', async() => {
    await footerContactUs.fillFirstNameField();
    await footerContactUs.fillEmailField();
    await footerContactUs.fillEnquiryField();
  });

  await test.step('AC: The button can be clicked', async() => {
    await footerContactUs.clickResetButton();
  });

  await test.step('AC: The form resets', async() => {
    await expect(footerContactUs.firstNameField).toBeEmpty();
    await expect(footerContactUs.emailField).toBeEmpty();
    await expect(footerContactUs.enquiryField).toBeEmpty();
  });

});

test('Scenario: Submitting the Contact form on the Contact us page', async ({ footer, footerContactUs }) => {

  await test.step('Navigate to the Contact Us page', async() => {
    await footer.clickContactUsButton();
  });
      
  await test.step('Fill out the fields', async() => {
    await footerContactUs.fillFirstNameField();
    await footerContactUs.fillEmailField();
    await footerContactUs.fillEnquiryField();
  });

  await test.step('AC: The Submit button can be clicked', async() => {
    await footerContactUs.clickSubmitButton();
  });

  await test.step('AC: The form can be submitted', async() => {
    await expect(footerContactUs.contactSuccessAlert).toBeVisible();
  });

});