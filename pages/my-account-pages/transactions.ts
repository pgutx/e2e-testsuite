import { type Locator, type Page } from '@playwright/test';

export class AccountMyTransactions{
    readonly page: Page;
    readonly transactionSection: Locator;
    readonly continueButton: Locator;

    constructor(page:Page){
      this.page = page;
      this.transactionSection = page.locator('.ct_padding_right').filter({ hasText: 'My Transactions' });
      this.continueButton = page.getByTitle('Continue');
    }

    async clickContinueButton(){
      await this.continueButton.click();
    }
}