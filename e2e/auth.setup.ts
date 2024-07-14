// import { test as setup, expect } from '@playwright/test';
// import { user } from '../utils/variables/user';

// const authFile = 'playwright/.auth/user.json';

// setup('authenticate', async ({ page }) => {
//   await page.goto('/');
//   await page.getByRole('link', {name: 'Login or register'}).click();
//   await page.getByTitle('Continue').click();
//   await page.locator('#AccountFrm_firstname').fill(user.firstName);
//   await page.locator('#AccountFrm_lastname').fill(user.lastName);
//   await page.locator('#AccountFrm_email').fill(user.emailAddress);
//   await page.locator('#AccountFrm_address_1').fill(user.address1);
//   await page.locator('#AccountFrm_city').fill(user.city);
//   await page.locator('#AccountFrm_country_id').selectOption('170');
//   await page.locator('#AccountFrm_zone_id').selectOption('2637');
//   await page.locator('#AccountFrm_postcode').fill(user.zipCode);
//   await page.locator('#AccountFrm_loginname').fill(user.loginName);
//   await page.locator('#AccountFrm_password').fill(user.password);
//   await page.locator('#AccountFrm_confirm').fill(user.passwordConfirm);
//   await page.locator('#AccountFrm_newsletter0').click();
//   await page.locator('#AccountFrm_agree').click();
//   await page.waitForTimeout(1000);
//   await page.getByTitle('Continue').click();

  
//   await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=account/success');

//   await expect(page.getByText('Congratulations! Your new account has been successfully created!')).toBeVisible();

//   await page.context().storageState({ path: authFile });
// });