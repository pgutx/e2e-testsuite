import { test as base } from '../homepage-fixtures/homepage-fixture';

import { CategoryBooks } from '../../../pages/category-pages/books-category';

type pageFixture = {
    categoryBooks: CategoryBooks;
}

export const test = base.extend<pageFixture>({
    categoryBooks: async({ homepage, page }, use) => {
      const categoryBooks = new CategoryBooks(page);
      await use(categoryBooks);
    }
});