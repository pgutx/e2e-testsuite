import { test as base, expect } from '../homepageFixture';

import { HomePageHeaderTop } from '../../../pages/homepage-pages/header-top';

type pageFixture = {
    headerTop: HomePageHeaderTop;
}

export const test = base.extend<pageFixture>({
    headerTop: async({ homepage, page }, use) => {
      const headerTop = new HomePageHeaderTop(page);
      await use(headerTop);
    }
});

export { expect } from '@playwright/test';

