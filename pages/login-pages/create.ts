import { type Locator, type Page } from '@playwright/test';
import { user } from '../../utils/variables/user';

export const newUser = {
    emailAddress: 'accountcreation@test.com',
    loginName: 'accountcreationlogin1'
}

export class CreatePage {
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly addressField: Locator;
    readonly cityField: Locator;
    readonly stateOption: Locator;
    readonly zipField: Locator;
    readonly countryOption: Locator;
    readonly loginField: Locator;
    readonly passwordField: Locator;
    readonly passwordConfirmField: Locator;
    readonly subscribeNo: Locator;
    readonly privacyPolicy: Locator;
    readonly continueButton: Locator;

    constructor(page: Page){
      this.page = page;
      this.firstNameField = page.locator('#AccountFrm_firstname');
      this.lastNameField = page.locator('#AccountFrm_lastname');
      this.emailField = page.locator('#AccountFrm_email');
      this.addressField = page.locator('#AccountFrm_address_1');
      this.cityField = page.locator('#AccountFrm_city');
      this.stateOption = page.locator('#AccountFrm_zone_id');
      this.zipField = page.locator('#AccountFrm_postcode');
      this.countryOption = page.locator('#AccountFrm_country_id');
      this.loginField = page.locator('#AccountFrm_loginname');
      this.passwordField = page.locator('#AccountFrm_password');
      this.passwordConfirmField = page.locator('#AccountFrm_confirm');
      this.subscribeNo = page.locator('#AccountFrm_newsletter0');
      this.privacyPolicy = page.locator('#AccountFrm_agree');
      this.continueButton = page.getByTitle('Continue');
    }

    async fillFirstNameField(){
      await this.firstNameField.fill(user.firstName);
    }

    async fillLastNameField(){
      await this.lastNameField.fill(user.lastName);
    }

    async fillEmailField(){
      await this.emailField.fill(newUser.emailAddress);
    }

    async fillAddressField(){
      await this.addressField.fill(user.address1);
    }

    async fillCityField(){
      await this.cityField.fill(user.city);
    }

    async selectStateOption(){
      await this.stateOption.selectOption('2637');
    }

    async fillZipField(){
      await this.zipField.fill(user.zipCode);
    }

    async selectCountryOption(){
      await this.countryOption.selectOption('170');
    }

    async fillLoginField(){
      await this.loginField.fill(newUser.loginName);
    }

    async fillPasswordField(){
      await this.passwordField.fill(user.password);
    }

    async fillPasswordConfirmField(){
      await this.passwordConfirmField.fill(user.passwordConfirm);
    }

    async clickNoSubscribeRadio(){
      await this.subscribeNo.click();
    }

    async clickAcceptPolicy(){
      await this.privacyPolicy.click();
    }

    async clickContinueButton(){
      await this.continueButton.click();
    }

}