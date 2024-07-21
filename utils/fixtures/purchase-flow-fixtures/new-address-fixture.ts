import { test as base } from '../homepage-fixtures/homepage-fixture';

import { PurchaseNewAddress } from '../../../pages/purchase-flow-pages/new-address';

type pageFixture = {
    newAddress: PurchaseNewAddress;
}

export const test = base.extend<pageFixture>({
    newAddress: async({ homepage, page }, use) => {
      const newAddress = new PurchaseNewAddress(page);
      await use(newAddress);
    }
});