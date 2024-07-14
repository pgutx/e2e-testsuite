import { type Locator, type Page } from '@playwright/test';
import { user } from '../../utils/variables/user';

export class LoginPage {
    readonly page: Page;
    readonly continueRegistration: Locator;
    readonly loginNameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
      this.page = page;
      this.continueRegistration = page.getByTitle('Continue');
      this.loginNameField = page.locator('#loginFrm_loginname');
      this.passwordField = page.locator('#loginFrm_loginname');
      this.loginButton = page.getByTitle('Login');
    }

    async clickContinueRegistrationButton(){
      await this.continueRegistration.click();
    }

    async fillLoginNameField(){
      await this.loginNameField.fill(user.loginName);
    }

    async fillPasswordField(){
      await this.passwordField.fill(user.password);
    }

    async clickLoginButton(){
      await this.loginButton.click();
    }
}