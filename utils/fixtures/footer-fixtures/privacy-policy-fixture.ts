import { test as base } from '../homepage-fixtures/homepage-fixture';

import { FooterPrivacyPolicy } from '../../../pages/footer-pages/privacy-policy';

type pageFixture = {
    footerPrivacyPolicy: FooterPrivacyPolicy;
}

export const test = base.extend<pageFixture>({
    footerPrivacyPolicy: async({ homepage, page }, use) => {
      const footerPrivacyPolicy = new FooterPrivacyPolicy(page);
      await use(footerPrivacyPolicy);
    }
});