import { test as base } from './homepage-fixture';

import { HomePageBestsellers } from '../../../pages/homepage-pages/bestsellers-section';

type pageFixture = {
    bestsellers: HomePageBestsellers;
}

export const test = base.extend<pageFixture>({
    bestsellers: async({ homepage, page }, use) => {
      const bestsellers = new HomePageBestsellers(page);
      await use(bestsellers);
    }
});