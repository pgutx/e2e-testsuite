import { type Locator, type Page } from '@playwright/test';

export class ProductAbsoluteAntiAge{
    readonly page: Page;
    readonly reviewForm: Locator;

    constructor(page:Page){
      this.page = page;
      this.reviewForm = page.locator('#review');
    }
}