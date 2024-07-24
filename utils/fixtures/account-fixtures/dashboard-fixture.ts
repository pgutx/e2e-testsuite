import { test as base } from '../homepage-fixtures/homepage-fixture';

import { AccountDashboard } from '../../../pages/my-account-pages/dashboard';

type pageFixture = {
    dashboard: AccountDashboard;
}

export const test = base.extend<pageFixture>({
    dashboard: async({ homepage, page }, use) => {
      const dashboard = new AccountDashboard(page);
      await use(dashboard);
    }
});