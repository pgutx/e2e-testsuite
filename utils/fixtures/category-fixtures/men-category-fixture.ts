import { test as base } from '../homepage-fixtures/homepage-fixture';

import { CategoryMen } from '../../../pages/category-pages/men-category';

type pageFixture = {
    categoryMen: CategoryMen;
}

export const test = base.extend<pageFixture>({
    categoryMen: async({ homepage, page }, use) => {
      const categoryMen = new CategoryMen(page);
      await use(categoryMen);
    }
});