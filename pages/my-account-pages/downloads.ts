import { type Locator, type Page } from '@playwright/test';

export class AccountMyDownloads{
    readonly page: Page;
    readonly downloadsSection: Locator;
    readonly continueButton: Locator;

    constructor(page:Page){
      this.page = page;
      this.downloadsSection = page.locator('.ct_padding_right').filter({ hasText: 'Account Downloads' });
      this.continueButton = page.getByTitle('Continue');
    }

    async clickContinueButton(){
      await this.continueButton.click();
    }
}