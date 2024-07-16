import { type Locator, type Page } from '@playwright/test';

export class PurchasePayment{
    readonly page: Page;
    readonly paymentInformation: Locator;
    readonly paymentAddressField: Locator;
    readonly changeAddressButton: Locator;
    readonly couponField: Locator;
    readonly couponButton: Locator;
    readonly invalidCouponAlert: Locator;
    readonly removeCouponButton: Locator;
    readonly commentField: Locator;
    readonly returnPolicyCheckbox: Locator;
    readonly backButton: Locator;
    readonly continueButton: Locator;

    constructor(page: Page){
      this.page = page;
      this.paymentInformation = page.locator('.ct_padding_right').filter({has: page.getByText('Payment Information')});
      this.paymentAddressField = page.locator('.registerbox').filter({has: page.getByTitle('Change Address')});
      this.changeAddressButton = page.getByTitle('Change Address');
      this.couponField = page.locator('#coupon_coupon');
      this.couponButton = page.getByTitle('Apply Coupon');
      this.invalidCouponAlert = page.getByText('Error: Coupon is either invalid');
      this.removeCouponButton = page.locator('#remove_coupon_btn');
      this.commentField = page.locator('#payment_comment');
      this.returnPolicyCheckbox = page.locator('#payment_agree');
      this.backButton = page.getByTitle('Back');
      this.continueButton = page.getByTitle('Continue');
    }

    async clickChangeAddressButton(){
      await this.changeAddressButton.click();
    }

    async fillCouponField(){
      await this.couponField.fill('Coupon');
    }

    async clickCouponButton(){
      await this.couponButton.click();
    }

    async clickRemoveCouponButton(){
      await this.removeCouponButton.click();
    }

    async fillCommentField(){
      await this.commentField.fill('This is a test comment');
    }

    async checkPolicyCheckbox(){
      await this.returnPolicyCheckbox.check();
    }

    async clickBackButton(){
      await this.backButton.click();
    }

    async clickContinueButton(){
      await this.continueButton.click();
    }
    
}