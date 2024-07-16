import { test as base } from '../homepage-fixtures/homepage-fixture';

import { PurchaseBasket } from '../../../pages/purchase-flow-pages/basket';

type pageFixture = {
    basket: PurchaseBasket;
}

export const test = base.extend<pageFixture>({
    basket: async({ homepage, page }, use) => {
      const basket = new PurchaseBasket(page);
      await use(basket);
    }
});