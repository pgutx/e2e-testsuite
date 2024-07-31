import { test as base } from '../homepage-fixtures/homepage-fixture';

import { AccountNotifications } from '../../../pages/my-account-pages/notifications';

type pageFixture = {
    accountNotifications: AccountNotifications;
}

export const test = base.extend<pageFixture>({
    accountNotifications: async({ homepage, page }, use) => {
      const accountNotifications = new AccountNotifications(page);
      await use(accountNotifications);
    }
});