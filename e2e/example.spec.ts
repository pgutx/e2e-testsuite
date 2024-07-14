import { test, expect } from '../utils/fixtures/homepageFixture';
import { user } from '../utils/variables/user';

test('Test', async ({ homepage }) => {
  await homepage.account.click();
  await expect(await homepage.text).toHaveText(user.firstName);
});
