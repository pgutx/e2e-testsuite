import { test as base } from '../homepage-fixtures/homepage-fixture';

import { AccountMyDownloads } from '../../../pages/my-account-pages/downloads';

type pageFixture = {
    accountMyDownloads: AccountMyDownloads;
}

export const test = base.extend<pageFixture>({
    accountMyDownloads: async({ homepage, page }, use) => {
      const accountMyDownloads = new AccountMyDownloads(page);
      await use(accountMyDownloads);
    }
});