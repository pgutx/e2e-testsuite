import { test as base } from '../homepage-fixtures/homepage-fixture';

import { CategoryApparel } from '../../../pages/category-pages/apparel-category';

type pageFixture = {
    categoryApparel: CategoryApparel;
}

export const test = base.extend<pageFixture>({
    categoryApparel: async({ homepage, page }, use) => {
      const categoryApparel = new CategoryApparel(page);
      await use(categoryApparel);
    }
});