import { test as base } from './homepage-fixture';

import { HomePageLatest } from '../../../pages/homepage-pages/latest-section';

type pageFixture = {
    latest: HomePageLatest;
}

export const test = base.extend<pageFixture>({
    latest: async({ homepage, page }, use) => {
      const latest = new HomePageLatest(page);
      await use(latest);
    }
});