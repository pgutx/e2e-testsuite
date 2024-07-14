import { test as base } from '../homepage-fixtures/homepage-fixture';

import { LoginPage } from '../../../pages/login-pages/login';

type pageFixture = {
    loginPage: LoginPage;
}

export const test = base.extend<pageFixture>({
    loginPage: async({ homepage, page }, use) => {
      const loginPage = new LoginPage(page);
      await use(loginPage);
    }
});


