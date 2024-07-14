import { mergeTests } from "@playwright/test";

import { test as homepageTest } from './homepage-fixtures/homepage-fixture';
import { test as headerTopTest } from '../fixtures/homepage-fixtures/header-top-fixture';
import { test as loginPageTest } from '../fixtures/login-fixtures/login-fixture';
import { test as createPageTest } from '../fixtures/login-fixtures/create-fixture';

export const test = mergeTests(homepageTest, 
                               headerTopTest, 
                               loginPageTest,
                               createPageTest);

export { expect } from '@playwright/test';