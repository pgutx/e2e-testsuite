import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';
import { title } from '../utils/variables/title';
import { user } from '../utils/variables/user';
import { newUser } from '../pages/login-pages/create';

test.use({ storageState: { cookies: [], origins: [] } });

test('Scenario: Clicking Login or register button whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.loginPage);
  });

});

test('Scenario: Validate Login page title', async ({ headerTop }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('AC: The page has correct title', async() => {
    await expect(headerTop.page).toHaveTitle(title.loginTitle);
  });

});

test('Scenario: Proceeding with the registration on the login page', async ({ headerTop, loginPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(loginPage.page).toHaveURL(urls.createNewAccount);
  });

});

test('Scenario: Validate Account creation page title', async ({ headerTop, loginPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The page has correct title', async() => {
    await expect(headerTop.page).toHaveTitle(title.createAccount);
  });

});

test('Scenario: Filling out First Name field during registration', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await createPage.fillFirstNameField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(createPage.firstNameField).toHaveValue(user.firstName);
  });

});

test('Scenario: Filling out Last Name field during registration', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await createPage.fillLastNameField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(createPage.lastNameField).toHaveValue(user.lastName);
  });

});

test('Scenario: Filling out Email field during registration', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await createPage.fillEmailField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(createPage.emailField).toHaveValue(newUser.emailAddress);
  });

});

test('Scenario: Filling out Address 1 field during registration', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await createPage.fillAddressField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(createPage.addressField).toHaveValue(user.address1);
  });

});

test('Scenario: Filling out City field during registration', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await createPage.fillCityField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(createPage.cityField).toHaveValue(user.city);
  });

});

test('Scenario: Choosing country option during registration', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The option field is clickable', async() => {
    await createPage.selectCountryOption();
  });

  await test.step('AC: The options can be picked', async() => {
    await expect(createPage.countryOption).toHaveText(/Poland/);
  });

});

test('Scenario: Choosing region option during registration', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('Select country option', async() => {
    await createPage.selectCountryOption();
  });

  await test.step('AC: The option field is clickable', async() => {
    await createPage.selectStateOption();
  });

  await test.step('AC: The options can be picked', async() => {
    await expect(createPage.stateOption).toHaveText(/Mazowieckie/);
  });

});

test('Scenario: Filling out ZIP code field during registration', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await createPage.fillZipField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(createPage.zipField).toHaveValue(user.zipCode);
  });

});

test('Scenario: Filling out Login field during registration', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await createPage.fillLoginField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(createPage.loginField).toHaveValue(newUser.loginName);
  });

});

test('Scenario: Filling out Password field during registration', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await createPage.fillPasswordField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(createPage.passwordField).toHaveValue(user.password);
  });

});

test('Scenario: Filling out Confirm password field during registration', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await createPage.fillPasswordConfirmField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(createPage.passwordConfirmField).toHaveValue(user.passwordConfirm);
  });

});

test('Scenario: Clicking Subscribe to Newsletter button during registration', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The radio button can be clicked', async() => {
    await createPage.clickNoSubscribeRadio();
  });

  await test.step('AC: The radio button is checked', async() => {
    await expect(createPage.subscribeNo).toBeChecked();
  });

});

test('Scenario: Accepting Privacy Policy during registration', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: The checkbox can be clicked', async() => {
    await createPage.clickAcceptPolicy();
  });

  await test.step('AC: The checkbox is checked', async() => {
    await expect(createPage.privacyPolicy).toBeChecked();
  });

});

test('Scenario: Registering an account', async ({ headerTop, loginPage, createPage }) => {

  await test.step('Navigate to the login page', async() => {
    await headerTop.clickLoginButton();
  });

  await test.step('Navigate to the registration page', async() => {
    await loginPage.clickContinueRegistrationButton();
  });

  await test.step('AC: Each form field can be filled/interacted with', async() => {
    await createPage.fillFirstNameField();
    await createPage.fillLastNameField();
    await createPage.fillEmailField();
    await createPage.fillAddressField();
    await createPage.fillCityField();
    await createPage.selectCountryOption();
    await createPage.selectStateOption();
    await createPage.fillZipField();
    await createPage.fillLoginField();
    await createPage.fillPasswordField();
    await createPage.fillPasswordConfirmField();
    await createPage.clickNoSubscribeRadio();
    await createPage.clickAcceptPolicy();
  });

  await test.step('AC: The button can be clicked', async() => {
    await createPage.clickContinueButton();
  });

  await test.step('AC: Clicking the button registers the user', async() => {
    await expect(createPage.page).toHaveURL(urls.registerSuccess);
  });

});