import { type Locator, type Page } from '@playwright/test';

export class FooterReturnPolicy{
    readonly page: Page;
    readonly privacySection: Locator;
    readonly continueButton: Locator;

    constructor(page:Page){
      this.page = page;
      this.privacySection = page.locator('.contentpanel').filter({ hasText: 'Return Policy' });
      this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    async clickContinueButton(){
      await this.continueButton.click();
    }
}