import { test as base } from '../homepage-fixtures/homepage-fixture';

import { PurchaseCheckout } from '../../../pages/purchase-flow-pages/checkout';

type pageFixture = {
    checkout: PurchaseCheckout;
}

export const test = base.extend<pageFixture>({
    checkout: async({ homepage, page }, use) => {
      const checkout = new PurchaseCheckout(page);
      await use(checkout);
    }
});