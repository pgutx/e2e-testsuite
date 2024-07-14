import { test, expect } from '../utils/fixtures//homepage-fixtures/header-top-fixture';
import { user } from '../utils/variables/user';

test('Test', async ({ headerTop }) => {
  await headerTop.clickHomepageLogo();
  await expect(await headerTop.page).toHaveURL('/');
});

test('Test2', async ({ homepage }) => {
  await expect(await homepage.page).toHaveURL('/');
  await expect(await homepage.page).toHaveTitle(/A place to practice your automation skills!/);
});