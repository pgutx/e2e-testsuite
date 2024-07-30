import { test as base } from '../homepage-fixtures/homepage-fixture';

import { AccountWishList } from '../../../pages/my-account-pages/wish-list';

type pageFixture = {
    wishList: AccountWishList;
}

export const test = base.extend<pageFixture>({
    wishList: async({ homepage, page }, use) => {
      const wishList = new AccountWishList(page);
      await use(wishList);
    }
});