import { type Locator, type Page } from '@playwright/test';

export class PurchaseShipping{
    readonly page: Page;
    readonly shippingInformation: Locator;
    readonly shippingAddressField: Locator;
    readonly changeAddressButton: Locator;
    readonly shippingMethodField: Locator;
    readonly commentField: Locator;
    readonly backButton: Locator;
    readonly continueButton: Locator;

    constructor(page: Page){
      this.page = page;
      this.shippingInformation = page.locator('.ct_padding_right').filter({has: page.getByText('Delivery Information')});
      this.shippingAddressField = page.locator('.registerbox').filter({has: page.getByTitle('Change Address')});
      this.changeAddressButton = page.getByTitle('Change Address');
      this.shippingMethodField = page.getByRole('table').locator('tr').nth(1).locator('td').nth(1).locator('label');
      this.commentField = page.locator('#shipping_comment');
      this.backButton = page.getByRole('link', { name: ' Back' });
      this.continueButton = page.getByRole('button', { name: ' Continue' });
    }

    async clickChangeAddressButton(){
      await this.changeAddressButton.click();
    }

    async fillCommentField(){
      await this.commentField.fill('This is a test comment');
    }

    async clickBackButton(){
      await this.backButton.click();
    }
  
    async clickContinueButton(){
      await this.continueButton.click();
    }
    
}