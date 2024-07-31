import { type Locator, type Page } from '@playwright/test';

export class AccountOrderHistory{
    readonly page: Page;
    readonly orderSection: Locator;
    readonly viewButton: Locator;
    readonly continueButton: Locator;
    readonly invoice: Locator;

    constructor(page: Page){
      this.page = page;
      this.orderSection = page.getByText('My Order History Order ID: #');
      this.viewButton = page.getByRole('button', { name: ' View' })
      this.continueButton = page.getByTitle('Continue');
      this.invoice = page.locator('.ct_padding_right').filter({ hasText: 'Order Details' });
    }

    async clickViewButton(){
      await this.viewButton.click();
    }

    async clickContinueButton(){
      await this.continueButton.click();
    }
}