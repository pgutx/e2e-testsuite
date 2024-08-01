import { test as base } from '../homepage-fixtures/homepage-fixture';

import { ProductAbsoluteAntiAge } from '../../../pages/product-pages/first-latest-item';

type pageFixture = {
    absoluteAntiAgeProduct: ProductAbsoluteAntiAge;
}

export const test = base.extend<pageFixture>({
    absoluteAntiAgeProduct: async({ homepage, page }, use) => {
      const absoluteAntiAgeProduct = new ProductAbsoluteAntiAge(page);
      await use(absoluteAntiAgeProduct);
    }
});