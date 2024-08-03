import { mergeTests } from "@playwright/test";

import { test as homepageTest } from './homepage-fixtures/homepage-fixture';
import { test as headerTopTest } from '../fixtures/homepage-fixtures/header-top-fixture';
import { test as headerBotTest } from '../fixtures/homepage-fixtures/header-bot-fixture';
import { test as loginPageTest } from '../fixtures/login-fixtures/login-fixture';
import { test as createPageTest } from '../fixtures/login-fixtures/create-fixture';
import { test as featuredTest } from '../fixtures/homepage-fixtures/homepage-featured';
import { test as latestTest } from '../fixtures/homepage-fixtures/homepage-latest';
import { test as bestsellersTest } from '../fixtures/homepage-fixtures/homepage-bestsellers';
import { test as specialsTest } from '../fixtures/homepage-fixtures/homepage-specials';
import { test as brandsTest } from '../fixtures/homepage-fixtures/homepage-brands';
import { test as footerTest } from '../fixtures/homepage-fixtures/footer-fixture';
import { test as basketTest } from '../fixtures/purchase-flow-fixtures/basket-fixture';
import { test as checkoutTest } from '../fixtures/purchase-flow-fixtures/checkout-fixture';
import { test as paymentTest } from '../fixtures/purchase-flow-fixtures/payment-fixture';
import { test as shippingTest } from '../fixtures/purchase-flow-fixtures/shipping-fixture';
import { test as newAddressTest } from '../fixtures/purchase-flow-fixtures/new-address-fixture';
import { test as accountDashboardTest } from '../fixtures/account-fixtures/dashboard-fixture';
import { test as accountWishListTest } from '../fixtures/account-fixtures/wish-list-fixture';
import { test as accountInformationTest } from '../fixtures/account-fixtures/my-account-information-fixture';
import { test as accountChangePasswordTest } from '../fixtures/account-fixtures/change-password-fixture';
import { test as accountManageAddressBookTest } from '../fixtures/account-fixtures/manage-address-book-fixture';
import { test as accountInsertNewAddressTest } from '../fixtures/account-fixtures/insert-new-address-fixture';
import { test as accountOrderHistoryTest } from '../fixtures/account-fixtures/order-history-fixture';
import { test as accountMyTransactionsTest } from '../fixtures/account-fixtures/transactions-fixture';
import { test as accountMyDownloadsTest } from '../fixtures/account-fixtures/downloads-fixture';
import { test as accountNotificationsTest } from '../fixtures/account-fixtures/notifications-fixture';
import { test as productFirstFeaturedTest } from '../fixtures/product-fixtures/first-featured-item-fixture';
import { test as productFirstLatestTest } from '../fixtures/product-fixtures/first-latest-item-fixture';
import { test as productFirstBestsellersTest } from '../fixtures/product-fixtures/first-bestsellers-item-fixture';
import { test as productFirstSpecialsTest } from '../fixtures/product-fixtures/first-specials-item-fixture';
import { test as specialsPageTest } from '../fixtures/product-fixtures/specials-page-fixture';
import { test as categoryApparelTest } from '../fixtures/category-fixtures/apparel-category-fixture';
import { test as categoryMakeupTest } from '../fixtures/category-fixtures/makeup-category-fixture';
import { test as categorySkincareTest } from '../fixtures/category-fixtures/skincare-category-fixture';
import { test as categoryFragranceTest } from '../fixtures/category-fixtures/fragrance-category-fixture';
import { test as categoryMenTest } from '../fixtures/category-fixtures/men-category-fixture';
import { test as categoryHaircareTest } from '../fixtures/category-fixtures/haircare-category-fixture';
import { test as categoryBooksTest } from '../fixtures/category-fixtures/books-category-fixture';
import { test as searchPageTest } from '../fixtures/search-fixtures/search-fixture';


export const test = mergeTests(homepageTest, 
                               headerTopTest,
                               headerBotTest,
                               featuredTest,
                               latestTest,
                               bestsellersTest,
                               specialsTest,
                               brandsTest,
                               footerTest, 
                               loginPageTest,
                               createPageTest,
                               basketTest,
                               paymentTest,
                               shippingTest,
                               newAddressTest,
                               checkoutTest,
                               accountDashboardTest,
                               accountWishListTest,
                               accountInformationTest,
                               accountChangePasswordTest,
                               accountManageAddressBookTest,
                               accountInsertNewAddressTest,
                               accountOrderHistoryTest,
                               accountMyTransactionsTest,
                               accountMyDownloadsTest,
                               accountNotificationsTest,
                               productFirstFeaturedTest,
                               productFirstLatestTest,
                               productFirstBestsellersTest,
                               productFirstSpecialsTest,
                               specialsPageTest,
                               categoryApparelTest,
                               categoryMakeupTest,
                               categorySkincareTest,
                               categoryFragranceTest,
                               categoryMenTest,
                               categoryHaircareTest,
                               categoryBooksTest,
                               searchPageTest
                               );

export { expect } from '@playwright/test';