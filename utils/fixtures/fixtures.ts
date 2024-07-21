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
                               checkoutTest);

export { expect } from '@playwright/test';