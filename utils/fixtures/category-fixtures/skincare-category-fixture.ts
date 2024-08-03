import { test as base } from '../homepage-fixtures/homepage-fixture';

import { CategorySkincare } from '../../../pages/category-pages/skincare-category';

type pageFixture = {
    categorySkincare: CategorySkincare;
}

export const test = base.extend<pageFixture>({
    categorySkincare: async({ homepage, page }, use) => {
      const categorySkincare = new CategorySkincare(page);
      await use(categorySkincare);
    }
});