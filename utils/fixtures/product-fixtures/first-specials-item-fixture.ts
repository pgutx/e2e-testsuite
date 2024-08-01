import { test as base } from '../homepage-fixtures/homepage-fixture';

import { ProductAbsoluteEye } from '../../../pages/product-pages/first-specials-item';

type pageFixture = {
    absoluteEyeProduct: ProductAbsoluteEye;
}

export const test = base.extend<pageFixture>({
    absoluteEyeProduct: async({ homepage, page }, use) => {
      const absoluteEyeProduct = new ProductAbsoluteEye(page);
      await use(absoluteEyeProduct);
    }
});