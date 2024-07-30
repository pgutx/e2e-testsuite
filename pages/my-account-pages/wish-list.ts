import { type Locator, type Page } from '@playwright/test';

export class AccountWishList{
    readonly page: Page;
    readonly emptyWishList: Locator;
    readonly populatedWishList: Locator;
    readonly itemName: Locator;
    readonly viewCartActionButton: Locator;
    readonly removeItemActionButton: Locator;
    readonly tableRemovedItem: Locator;
    readonly continueShoppinButton: Locator;
    readonly viewCartButton: Locator;
    readonly accountBreadcrumb: Locator;

    constructor(page: Page){
      this.page = page;
      this.emptyWishList = page.locator('.contentpanel').filter({ hasText: 'Wish list is empty' });
      this.populatedWishList = page.locator('.ct_padding_right').filter({ hasText: 'My wish list' }).filter({has: page.locator('.table')});
      this.itemName = page.getByRole('table').locator('tr').nth(1).locator('td').nth(1).locator('a');
      this.viewCartActionButton = page.getByRole('table').locator('tr').nth(1).locator('td').nth(5).getByRole('link').first();
      this.removeItemActionButton = page.getByRole('table').locator('tr').nth(1).locator('td').nth(5).getByRole('link').last();
      this.tableRemovedItem = page.getByRole('table').locator('tr').nth(1);
      this.continueShoppinButton = page.getByRole('link', { name: ' Continue Shopping' });
      this.viewCartButton = page.getByRole('link', { name: ' View Cart' });
      this.accountBreadcrumb = page.locator('.breadcrumb').getByRole('link', { name: 'Account' });
    }

    async clickItemName(){
      await this.itemName.click();
    }

    async clickViewCartActionButton(){
      await this.viewCartActionButton.click();
    }

    async clickRemoveItemActionButton(){
      await this.removeItemActionButton.click();
    }

    async clickContinueShoppingButton(){
      await this.continueShoppinButton.click();
    }

    async clickViewCartButton(){
      await this.viewCartButton.click();
    }

    async clickAccountBreadcrumb(){
      await this.accountBreadcrumb.click();
    }
}