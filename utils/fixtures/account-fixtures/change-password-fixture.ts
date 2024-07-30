import { test as base } from '../homepage-fixtures/homepage-fixture';

import { AccountChangePassword } from '../../../pages/my-account-pages/change-password';

type pageFixture = {
    accountChangePassword: AccountChangePassword;
}

export const test = base.extend<pageFixture>({
    accountChangePassword: async({ homepage, page }, use) => {
      const accountChangePassword = new AccountChangePassword(page);
      await use(accountChangePassword);
    }
});