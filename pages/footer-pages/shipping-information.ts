import { type Locator, type Page } from '@playwright/test';

export class FooterShippingInformation{
    readonly page: Page;
    readonly shippingSection: Locator;
    readonly continueButton: Locator;

    constructor(page:Page){
      this.page = page;
      this.shippingSection = page.locator('.contentpanel').filter({ hasText: 'Shipping' });
      this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    async clickContinueButton(){
      await this.continueButton.click();
    }
}