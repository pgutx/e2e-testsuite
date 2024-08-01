import { test as base } from '../homepage-fixtures/homepage-fixture';

import { SearchPage } from '../../../pages/search-pages/search';

type pageFixture = {
    search: SearchPage;
}

export const test = base.extend<pageFixture>({
    search: async({ homepage, page }, use) => {
      const search = new SearchPage(page);
      await use(search);
    }
});