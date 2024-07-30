import { test as base } from '../homepage-fixtures/homepage-fixture';

import { AccountAddressBook } from '../../../pages/my-account-pages/address-book';

type pageFixture = {
    accountAddressBook: AccountAddressBook;
}

export const test = base.extend<pageFixture>({
    accountAddressBook: async({ homepage, page }, use) => {
      const accountAddressBook = new AccountAddressBook(page);
      await use(accountAddressBook);
    }
});