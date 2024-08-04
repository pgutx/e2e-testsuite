import { type Locator, type Page } from '@playwright/test';
import { randomInt } from "crypto"

export class AccountInformation{
    readonly page: Page;
    readonly accountFormSection: Locator;
    readonly accountFormFirstNameField: Locator;
    readonly accountFormLastNameField: Locator;
    readonly accountFormEmailField: Locator;
    readonly backButton: Locator;
    readonly continueButton: Locator;
    readonly accountBreadcrumb: Locator;
    readonly successAccountUpdateAlert: Locator;

    constructor(page: Page){
      this.page = page;
      this.accountFormSection = page.locator('#AccountFrm');
      this.accountFormFirstNameField = page.locator('#AccountFrm_firstname');
      this.accountFormLastNameField = page.locator('#AccountFrm_lastname');
      this.accountFormEmailField = page.locator('#AccountFrm_email');
      this.backButton = page.getByRole('link', { name: ' Back' });
      this.continueButton = page.getByTitle('Continue');
      this.accountBreadcrumb = page.locator('.breadcrumb').getByRole('link', { name: 'Account' });
      this.successAccountUpdateAlert = page.getByText('Success: Your account has been successfully updated.');
    }

    async fillAccountFormFirstNameField(){
      await this.accountFormFirstNameField.fill('AccountInformationFirstName');
    }

    async fillAccountFormLastNameField(){
      await this.accountFormLastNameField.fill('AccountInformationLastName');
    }

    async fillAccountFormEmailField(){
      await this.accountFormEmailField.fill('AccountInformationEmail' + randomInt(1, 5000) + '@test.com');
    }

    async clickBackButton(){
      await this.backButton.click();
    }

    async clickContinueButton(){
      await this.continueButton.click();
    }

    async clickAccountBreadcrumb(){
      await this.accountBreadcrumb.click();
    }
}