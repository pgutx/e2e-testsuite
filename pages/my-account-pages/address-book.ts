import { type Locator, type Page } from '@playwright/test';

export class AccountAddressBook{
    readonly page: Page;
    readonly addressBookEntries: Locator;
    readonly editAddressEntryButton: Locator;
    readonly backButton: Locator;
    readonly accountBreadcrumb: Locator;
    readonly newAddressButton: Locator;

    constructor(page: Page){
      this.page = page;
      this.addressBookEntries = page.locator('.contentpanel').filter({hasText: 'Address Book Entries'});
      this.editAddressEntryButton = page.getByTitle('Edit');
      this.backButton = page.getByRole('link', { name: ' Back' });
      this.accountBreadcrumb = page.locator('.breadcrumb').getByRole('link', { name: 'Account' });
      this.newAddressButton = page.getByTitle('New Address');
    }

    async clickEditAddressButton(){
      await this.editAddressEntryButton.click();
    }

    async clickBackButton(){
      await this.backButton.click();
    }

    async clickAccountBreadcrumb(){
      await this.accountBreadcrumb.click();
    }

    async clickNewAddressButton(){
      await this.newAddressButton.click();
    }
}