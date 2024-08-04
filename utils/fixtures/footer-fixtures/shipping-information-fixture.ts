import { test as base } from '../homepage-fixtures/homepage-fixture';

import { FooterShippingInformation } from '../../../pages/footer-pages/shipping-information';

type pageFixture = {
    footerShipping: FooterShippingInformation;
}

export const test = base.extend<pageFixture>({
    footerShipping: async({ homepage, page }, use) => {
      const footerShipping = new FooterShippingInformation(page);
      await use(footerShipping);
    }
});