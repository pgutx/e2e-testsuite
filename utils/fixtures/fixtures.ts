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

export const test = mergeTests(homepageTest, 
                               headerTopTest,
                               headerBotTest,
                               featuredTest,
                               latestTest,
                               bestsellersTest,
                               specialsTest, 
                               loginPageTest,
                               createPageTest);

export { expect } from '@playwright/test';