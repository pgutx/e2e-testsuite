import { type Locator, type Page } from '@playwright/test';

export class FooterAboutUs{
    readonly page: Page;
    readonly aboutUsSection: Locator;
    readonly continueButton: Locator;

    constructor(page:Page){
      this.page = page;
      this.aboutUsSection = page.locator('.contentpanel').filter({ hasText: 'some description' });
      this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    async clickContinueButton(){
      await this.continueButton.click();
    }
}