import { test as base } from '../homepage-fixtures/homepage-fixture';

import { FooterSiteMap } from '../../../pages/footer-pages/site-map';

type pageFixture = {
    footerSiteMap: FooterSiteMap;
}

export const test = base.extend<pageFixture>({
    footerSiteMap: async({ homepage, page }, use) => {
      const footerSiteMap = new FooterSiteMap(page);
      await use(footerSiteMap);
    }
});