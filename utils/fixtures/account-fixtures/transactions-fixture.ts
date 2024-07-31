import { test as base } from '../homepage-fixtures/homepage-fixture';

import { AccountMyTransactions } from '../../../pages/my-account-pages/transactions';

type pageFixture = {
    accountMyTransactions: AccountMyTransactions;
}

export const test = base.extend<pageFixture>({
    accountMyTransactions: async({ homepage, page }, use) => {
      const accountMyTransactions = new AccountMyTransactions(page);
      await use(accountMyTransactions);
    }
});