import { test as setup } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  if (!process.env.TRAVEL_ID || !process.env.PASSWORD) {
    throw new Error('Environment variable TRAVEL_ID or PASSWORD is not defined');
  }
  
  // Perform authentication steps. Replace these actions with your own.
  await page.goto(process.env.HOME_URL || 'https://www-uat1.miles-and-more.com/de/en.html');

  // Accept cookies if the dialog appears
  await page.locator('.plugindialog__footerButtonAccept').click({ timeout: 3000 });
  await page.locator('.cookieconsent__buttonAcceptAll').click({ timeout: 3000 });
  
  // Click on the login link/button to navigate to the login page
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  // Perform Login
  await page.locator('input[name="loginStepOne"]').fill(process.env.TRAVEL_ID);
  await page.locator('.travelid-login__continueButton').click();
  await page.locator('input[name="loginStepTwoPassword"]').fill(process.env.PASSWORD);
  await page.locator('.travelid-login__loginButton').click();
  
  // Wait until the page reaches a state where all cookies are set.
  // eslint-disable-next-line playwright/no-wait-for-selector
  await page.waitForSelector('.header__logoutButton', { timeout: 30000 });

  // End of authentication steps.
  await page.context().storageState({ path: authFile });
});