import { test as base } from '../homepage-fixtures/homepage-fixture';

import { CategoryHaircare } from '../../../pages/category-pages/haircare-category';

type pageFixture = {
    categoryHaircare: CategoryHaircare;
}

export const test = base.extend<pageFixture>({
    categoryHaircare: async({ homepage, page }, use) => {
      const categoryHaircare = new CategoryHaircare(page);
      await use(categoryHaircare);
    }
});