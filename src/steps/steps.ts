import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('User launch MAM page', async ({ page }) => {
  await page.goto(process.env.HOME_URL || 'https://www-uat1.miles-and-more.com/de/en.html');
});

When('User clicks on {string} link', async ({ page }, name) => {
  await page.getByRole('link', { name, exact: true }).click();
});

When('User clicks on {string} button', async ({ page }, name) => {
  await page.getByRole('button', { name, exact: true }).click();
});

Then('verify that the page title is {string}', async ({ page }, keyword) => {
  // eslint-disable-next-line playwright/no-standalone-expect
  await expect(page).toHaveTitle(new RegExp(keyword));
});

Then('verify that the container with text {string} has also the text {string}', async ({ page }, title, text) => {
  const container = page.getByText( title, { exact: true } ).locator('..');
  // eslint-disable-next-line playwright/no-standalone-expect
  await expect(container).toContainText(text);
});

Then('verify that the container with text {string} has also the value of variable {string}', async ({ page }, title, variableName) => {
  const container = page.getByText( title, { exact: true } ).locator('..');
  // eslint-disable-next-line playwright/no-standalone-expect
  await expect(container).toContainText(process.env[variableName] || '');
});