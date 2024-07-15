import { test as base } from './homepage-fixture';

import { HomePageFeatured } from '../../../pages/homepage-pages/featured-section';

type pageFixture = {
    featured: HomePageFeatured;
}

export const test = base.extend<pageFixture>({
    featured: async({ homepage, page }, use) => {
      const featured = new HomePageFeatured(page);
      await use(featured);
    }
});