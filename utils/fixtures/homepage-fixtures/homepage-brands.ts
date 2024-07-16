import { test as base } from './homepage-fixture';

import { HomePageBrands } from '../../../pages/homepage-pages/brands';

type pageFixture = {
    brands: HomePageBrands;
}

export const test = base.extend<pageFixture>({
    brands: async({ homepage, page }, use) => {
      const brands = new HomePageBrands(page);
      await use(brands);
    }
});