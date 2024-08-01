import { test as base } from '../homepage-fixtures/homepage-fixture';

import { ProductBaseballTshirt } from '../../../pages/product-pages/first-bestsellers-item';

type pageFixture = {
    baseballTshirtProduct: ProductBaseballTshirt;
}

export const test = base.extend<pageFixture>({
    baseballTshirtProduct: async({ homepage, page }, use) => {
      const baseballTshirtProduct = new ProductBaseballTshirt(page);
      await use(baseballTshirtProduct);
    }
});