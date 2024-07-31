import { type Locator, type Page } from '@playwright/test';

export class AccountNotifications{
    readonly page: Page;
    readonly notificationSection: Locator;
    readonly newsletterCheckbox: Locator;
    readonly backButton: Locator;
    readonly continueButton: Locator;
    readonly successAlert: Locator;

    constructor(page:Page){
      this.page = page;
      this.notificationSection = page.locator('.ct_padding_right').filter({ hasText: 'Notifications and Newsletter' });
      this.newsletterCheckbox = page.locator('#imFrm_settingsnewsletteremail');
      this.backButton = page.getByRole('link', { name: ' Back' });
      this.continueButton = page.getByTitle('Continue');
      this.successAlert = page.getByText('Success: Your notification settings has been successfully updated!');
    }

    async tickNewsletterCheckbox(){
      await this.newsletterCheckbox.check();
    }

    async clickBackButton(){
      await this.backButton.click();
    }

    async clickContinueButton(){
      await this.continueButton.click();
    }
}