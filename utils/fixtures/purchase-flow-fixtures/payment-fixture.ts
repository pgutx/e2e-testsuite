import { test as base } from '../homepage-fixtures/homepage-fixture';

import { PurchasePayment } from '../../../pages/purchase-flow-pages/payment';

type pageFixture = {
    payment: PurchasePayment;
}

export const test = base.extend<pageFixture>({
    payment: async({ homepage, page }, use) => {
      const payment = new PurchasePayment(page);
      await use(payment);
    }
});