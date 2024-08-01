import { type Locator, type Page } from '@playwright/test';

export class ProductSkinsheenBronzeStick{
    readonly page: Page;
    readonly addToWishlist: Locator;
    readonly reviewForm: Locator;

    constructor(page: Page){
      this.page = page;
      this.addToWishlist = page.locator('.wishlist_add');
      this.reviewForm = page.locator('#review');
    }

    async clickAddToWishList(){
      await this.addToWishlist.click();
    }
}