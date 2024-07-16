import { test as base } from '../homepage-fixtures/homepage-fixture';

import { PurchaseShipping } from '../../../pages/purchase-flow-pages/shipping';

type pageFixture = {
    shipping: PurchaseShipping ;
}

export const test = base.extend<pageFixture>({
    shipping: async({ homepage, page }, use) => {
      const shipping = new PurchaseShipping (page);
      await use(shipping);
    }
});