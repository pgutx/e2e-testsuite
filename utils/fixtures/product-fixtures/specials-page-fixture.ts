import { test as base } from '../homepage-fixtures/homepage-fixture';

import { SpecialsPage } from '../../../pages/product-pages/specials-page';

type pageFixture = {
    specialsPage: SpecialsPage;
}

export const test = base.extend<pageFixture>({
    specialsPage: async({ homepage, page }, use) => {
      const specialsPage = new SpecialsPage(page);
      await use(specialsPage);
    }
});