import { test as base } from '../homepage-fixtures/homepage-fixture';

import { CreatePage } from '../../../pages/login-pages/create';

type pageFixture = {
    createPage: CreatePage;
}

export const test = base.extend<pageFixture>({
    createPage: async({ homepage, page }, use) => {
      const createPage = new CreatePage(page);
      await use(createPage);
    }
});


