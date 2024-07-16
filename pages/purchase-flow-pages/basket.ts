import { type Locator, type Page } from '@playwright/test';

export class PurchaseBasket{
    readonly page:  Page;
    readonly cartSection: Locator;
    readonly itemName: Locator;
    readonly quantityField: Locator;
    readonly totalPriceField: Locator;
    readonly removeButton: Locator;
    readonly updateButton: Locator;
    readonly checkoutButtonTop: Locator;
    readonly couponForm: Locator;
    readonly couponFormField: Locator;
    readonly couponFormButton: Locator;
    readonly invalidCouponAlert: Locator;
    readonly couponFormRemoveButton: Locator;
    readonly estimateForm: Locator;
    readonly estimateFormCountry: Locator;
    readonly estimateFormState: Locator;
    readonly estimateFormZip: Locator;
    readonly estimateFormButton: Locator;
    readonly totalTable: Locator;
    readonly continueButton: Locator;
    readonly checkoutButtonBot: Locator;

    constructor(page: Page){
      this.page = page;
      this.cartSection = page.locator('#cart');
      this.itemName = page.locator('.product-list').getByRole('table').locator('tbody').locator('tr').nth(1).locator('td').nth(1).getByRole('link');
      this.quantityField = page.locator('#cart_quantity50');
      this.totalPriceField = page.locator('.product-list').getByRole('table').locator('tbody').locator('tr').nth(1).locator('td').nth(5);
      this.removeButton = page.locator('.product-list').getByRole('table').locator('tbody').locator('tr').nth(1).locator('td').nth(6).getByRole('link');
      this.updateButton = page.getByTitle('Update');
      this.checkoutButtonTop = page.locator('#cart_checkout1');
      this.couponForm = page.locator('#coupon');
      this.couponFormField = page.locator('#coupon_coupon');
      this.couponFormButton = page.getByTitle('Apply Coupon');
      this.invalidCouponAlert = page.getByText('Error: Coupon is either invalid');
      this.couponFormRemoveButton = page.locator('#remove_coupon_btn');
      this.estimateForm = page.locator('#estimate');
      this.estimateFormCountry = page.locator('#estimate_country');
      this.estimateFormState = page.locator('#estimate_country_zones');
      this.estimateFormZip = page.locator('#estimate_postcode');
      this.estimateFormButton = page.getByTitle('Estimate');
      this.totalTable = page.locator('#totals_table');
      this.continueButton = page.getByRole('link', { name: ' Continue Shopping' });
      this.checkoutButtonBot = page.locator('#cart_checkout2');
    }

    async clickItemName(){
      await this.itemName.click();
    }

    async fillCartQuantityField(){
      await this.quantityField.fill('2');
    }

    async clickRemoveButton(){
      await this.removeButton.click();
    }

    async clickUpdateButton(){
      await this.updateButton.click();
    }

    async clickFirstCheckoutButton(){
      await this.checkoutButtonTop.click();
    }

    async fillCouponField(){
      await this.couponFormField.fill('Coupon');
    }

    async clickCouponButton(){
      await this.couponFormButton.click();
    }

    async clickRemoveCouponButton(){
      await this.couponFormRemoveButton.click();
    }

    async selectCountryOption(){
      await this.estimateFormCountry.selectOption('56');
    }

    async selectStateOption(){
      await this.estimateFormState.selectOption('899');
    }

    async fillZipCode(){
      await this.estimateFormZip.fill('12345');
    }

    async clickEstimateButton(){
      await this.estimateFormButton.click();
    }

    async clickContinueButton(){
      await this.continueButton.click();
    }

    async clickSecondCheckoutButton(){
      await this.checkoutButtonBot.click();
    }
    
}