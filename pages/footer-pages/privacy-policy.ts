import { type Locator, type Page } from '@playwright/test';

export class FooterPrivacyPolicy{
    readonly page: Page;
    readonly privacySection: Locator;
    readonly continueButton: Locator;

    constructor(page:Page){
      this.page = page;
      this.privacySection = page.locator('.contentpanel').filter({ hasText: 'Privacy Policy for Automation Test Store' });
      this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    async clickContinueButton(){
      await this.continueButton.click();
    }
}