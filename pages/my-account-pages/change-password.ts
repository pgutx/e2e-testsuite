import { type Locator, type Page } from '@playwright/test';
import { user } from '../../utils/variables/user';

export class AccountChangePassword{
    readonly page: Page;
    readonly changePasswordForm: Locator;
    readonly currentPasswordField: Locator;
    readonly newPasswordField: Locator;
    readonly newPasswordConfirmField: Locator;
    readonly backButton: Locator;
    readonly continueButton: Locator;
    readonly accountBreadcrumb: Locator;
    readonly successPasswordChangeAlert: Locator;

    constructor(page: Page){
      this.page = page;
      this.changePasswordForm = page.locator('#PasswordFrm');
      this.currentPasswordField = page.locator('#PasswordFrm_current_password');
      this.newPasswordField = page.locator('#PasswordFrm_password');
      this.newPasswordConfirmField = page.locator('#PasswordFrm_confirm');
      this.backButton = page.getByRole('link', { name: ' Back' });
      this.continueButton = page.getByTitle('Continue');
      this.accountBreadcrumb = page.locator('.breadcrumb').getByRole('link', { name: 'Account' });
      this.successPasswordChangeAlert = page.getByText('Success: Your password has been successfully updated');
    }

    async fillCurrentPasswordField(){
      await this.currentPasswordField.fill(user.password);
    }

    async fillNewPasswordField(){
      await this.newPasswordField.fill('testPassword1234!');
    }

    async fillNewPasswordConfirmField(){
      await this.newPasswordConfirmField.fill('testPassword1234!');
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