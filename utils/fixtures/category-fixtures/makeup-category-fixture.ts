import { test as base } from '../homepage-fixtures/homepage-fixture';

import { CategoryMakeup } from '../../../pages/category-pages/makeup-category';

type pageFixture = {
    categoryMakeup: CategoryMakeup;
}

export const test = base.extend<pageFixture>({
    categoryMakeup: async({ homepage, page }, use) => {
      const categoryMakeup = new CategoryMakeup(page);
      await use(categoryMakeup);
    }
});