import { test as base } from '../homepage-fixtures/homepage-fixture';

import { FooterContactUs } from '../../../pages/footer-pages/contact-us';

type pageFixture = {
    footerContactUs: FooterContactUs;
}

export const test = base.extend<pageFixture>({
    footerContactUs: async({ homepage, page }, use) => {
      const footerContactUs = new FooterContactUs(page);
      await use(footerContactUs);
    }
});