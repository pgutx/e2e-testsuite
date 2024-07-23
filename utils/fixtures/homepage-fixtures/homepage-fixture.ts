import { test as base } from '@playwright/test';

import { HomePage } from '../../../pages/homepage-pages/homepage';

type pageFixture = {
  homepage: HomePage;
}

export const test = base.extend<pageFixture>({
    homepage: async({ page }, use) => {
      const homepage = new HomePage(page);
      await homepage.page.goto('/');
      await use(homepage);
    }
});