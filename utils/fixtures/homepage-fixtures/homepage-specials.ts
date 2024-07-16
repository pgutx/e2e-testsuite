import { test as base } from './homepage-fixture';

import { HomePageSpecials } from '../../../pages/homepage-pages/specials-section';

type pageFixture = {
    specials: HomePageSpecials ;
}

export const test = base.extend<pageFixture>({
    specials: async({ homepage, page }, use) => {
      const specials = new HomePageSpecials(page);
      await use(specials);
    }
});