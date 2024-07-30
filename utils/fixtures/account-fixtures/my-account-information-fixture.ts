import { test as base } from '../homepage-fixtures/homepage-fixture';

import { AccountInformation } from '../../../pages/my-account-pages/my-account-information';

type pageFixture = {
    accountInformation: AccountInformation;
}

export const test = base.extend<pageFixture>({
    accountInformation: async({ homepage, page }, use) => {
      const accountInformation = new AccountInformation(page);
      await use(accountInformation);
    }
});