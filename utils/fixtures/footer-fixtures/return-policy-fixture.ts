import { test as base } from '../homepage-fixtures/homepage-fixture';

import { FooterReturnPolicy } from '../../../pages/footer-pages/return-policy';

type pageFixture = {
    footerReturnPolicy: FooterReturnPolicy;
}

export const test = base.extend<pageFixture>({
    footerReturnPolicy: async({ homepage, page }, use) => {
      const footerReturnPolicy = new FooterReturnPolicy(page);
      await use(footerReturnPolicy);
    }
});