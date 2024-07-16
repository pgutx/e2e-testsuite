import { type Locator, type Page } from '@playwright/test';

export class PurchaseCheckout{
    readonly page: Page;
    readonly checkoutInformation: Locator;
    readonly returnPolicyButton: Locator;
    readonly shippingField: Locator;
    readonly editShippingButton: Locator;
    readonly paymentField: Locator;
    readonly editPaymentButton: Locator;
    readonly editCouponButton: Locator;
    readonly editCartButton: Locator;
    readonly itemField: Locator;
    readonly itemImg: Locator;
    readonly itemNameLink: Locator;
    readonly itemPriceField: Locator;
    readonly totalPriceField: Locator;
    readonly backButton: Locator;
    readonly confirmOrderButton: Locator;
    readonly orderSummaryField: Locator;
    readonly confirmBreadcrumb: Locator;
    readonly paymentBreadcrumb: Locator;
    readonly shippingBreadcrumb: Locator;
    readonly basketBreadcrumb: Locator;
    readonly homeBreadcrumb: Locator;

    constructor(page: Page){
      this.page = page;
      this.checkoutInformation = page.locator('.contentpanel').filter({has: page.getByText('By clicking Confirm Order')});
      this.returnPolicyButton = page.getByRole('link', { name: 'Return Policy' });
      this.shippingField = page.locator('.confirm_shippment_options');
      this.editShippingButton = page.getByRole('link', { name: ' Edit Shipping' });
      this.paymentField = page.locator('.confirm_payment_options');
      this.editPaymentButton = page.getByRole('link', { name: ' Edit Payment' });
      this.editCouponButton = page.getByRole('link', { name: ' Edit Coupon' });
      this.editCartButton = page.getByRole('link', { name: ' Edit Cart' });
      this.itemField = page.locator('.confirm_products');
      this.itemImg = page.locator('.confirm_products').getByRole('img');
      this.itemNameLink = page.locator('.confirm_products').locator('tr').locator('td').nth(1).getByRole('link');
      this.itemPriceField = page.locator('.confirm_products').locator('tr').locator('td').last();
      this.totalPriceField = page.locator('.cart-info');
      this.backButton = page.getByRole('link', { name: ' Back' });
      this.confirmOrderButton = page.locator('#checkout_btn');
      this.orderSummaryField = page.locator('.sidewidt');
      this.confirmBreadcrumb = page.getByRole('link', { name: 'Confirm' });
      this.paymentBreadcrumb = page.getByRole('link', { name: 'Payment' });
      this.shippingBreadcrumb = page.getByRole('link', { name: 'Shipping' });
      this.basketBreadcrumb = page.getByRole('link', { name: 'Basket' });
      this.homeBreadcrumb = page.getByRole('link', { name: 'Home' });
    }

    async clickReturnPolicyButton(){
      await this.returnPolicyButton.click();
    }

    async clickEditShippingButton(){
      await this.editShippingButton.click();
    }

    async clickEditPaymentButton(){
      await this.editPaymentButton.click();
    }

    async clickEditCouponButton(){
      await this.editCouponButton.click();    
    }

    async clickEditCartButton(){
      await this.editCartButton.click();
    }

    async clickItemNameLink(){
      await this.itemNameLink.click();
    }

    async clickBackButton(){
      await this.backButton.click();
    }

    async clickConfirmOrderButton(){
      await this.confirmOrderButton.click();
    }

    async clickConfirmBreadcrumb(){
      await this.confirmBreadcrumb.click();
    }

    async clickPaymentBreadcrumb(){
      await this.paymentBreadcrumb.click(); 
    }

    async clickShippingBreadcrumb(){
      await this.shippingBreadcrumb.click();
    }

    async clickBasketBreadcrumb(){
      await this.basketBreadcrumb.click();
    }

    async clickHomeBreadcrumb(){
      await this.homeBreadcrumb.click();
    }

}