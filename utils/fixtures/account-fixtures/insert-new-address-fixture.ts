import { test as base } from '../homepage-fixtures/homepage-fixture';

import { AccountInsertNewAddress } from '../../../pages/my-account-pages/insert-new-address';

type pageFixture = {
    accountInsertNewAddress: AccountInsertNewAddress;
}

export const test = base.extend<pageFixture>({
    accountInsertNewAddress: async({ homepage, page }, use) => {
      const accountInsertNewAddress = new AccountInsertNewAddress(page);
      await use(accountInsertNewAddress);
    }
});