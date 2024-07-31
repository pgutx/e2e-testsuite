import { test as base } from '../homepage-fixtures/homepage-fixture';

import { AccountOrderHistory } from '../../../pages/my-account-pages/order-history';

type pageFixture = {
    accountOrderHistory: AccountOrderHistory;
}

export const test = base.extend<pageFixture>({
    accountOrderHistory: async({ homepage, page }, use) => {
      const accountOrderHistory = new AccountOrderHistory(page);
      await use(accountOrderHistory);
    }
});