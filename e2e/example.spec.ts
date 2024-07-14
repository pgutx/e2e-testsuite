import { test, expect } from '@playwright/test';
import { user } from '../utils/variables/user';

test('Test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: '  Account' }).click();
  await expect(await page.locator('.subtext')).toHaveText(user.firstName);
});
