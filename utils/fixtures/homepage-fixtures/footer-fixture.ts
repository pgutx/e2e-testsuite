import { test as base } from './homepage-fixture';

import { HomePageFooter } from '../../../pages/homepage-pages/footer';

type pageFixture = {
    footer: HomePageFooter;
}

export const test = base.extend<pageFixture>({
    footer: async({ homepage, page }, use) => {
      const footer = new HomePageFooter(page);
      await use(footer);
    }
});