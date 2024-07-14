import { type Locator, type Page } from '@playwright/test';

export class HomePageHeaderTop {
    readonly page: Page;
    readonly logo: Locator;
    readonly account: Locator;

    constructor(page: Page){
      this.page = page;
      this.logo = page.locator('.logo');
      this.account = page.getByRole('link', { name: '  Account' });
    }

    async clickHomepageLogo(){
      await this.logo.click();
    }
    
};