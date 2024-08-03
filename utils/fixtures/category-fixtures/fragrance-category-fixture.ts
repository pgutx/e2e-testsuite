import { test as base } from '../homepage-fixtures/homepage-fixture';

import { CategoryFragrance } from '../../../pages/category-pages/fragrance-category';

type pageFixture = {
    categoryFragrance: CategoryFragrance;
}

export const test = base.extend<pageFixture>({
    categoryFragrance: async({ homepage, page }, use) => {
      const categoryFragrance = new CategoryFragrance(page);
      await use(categoryFragrance);
    }
});