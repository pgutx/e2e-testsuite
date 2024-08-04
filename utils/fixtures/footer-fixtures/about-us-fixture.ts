import { test as base } from '../homepage-fixtures/homepage-fixture';

import { FooterAboutUs } from '../../../pages/footer-pages/about-us';

type pageFixture = {
    footerAboutUs: FooterAboutUs;
}

export const test = base.extend<pageFixture>({
    footerAboutUs: async({ homepage, page }, use) => {
      const footerAboutUs = new FooterAboutUs(page);
      await use(footerAboutUs);
    }
});