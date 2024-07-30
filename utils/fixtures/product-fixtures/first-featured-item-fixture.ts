import { test as base } from '../homepage-fixtures/homepage-fixture';

import { ProductSkinsheenBronzeStick } from '../../../pages/product-pages/first-featured-item';

type pageFixture = {
    skinsheenBronzeStickProduct: ProductSkinsheenBronzeStick;
}

export const test = base.extend<pageFixture>({
    skinsheenBronzeStickProduct: async({ homepage, page }, use) => {
      const skinsheenBronzeStickProduct = new ProductSkinsheenBronzeStick(page);
      await use(skinsheenBronzeStickProduct);
    }
});