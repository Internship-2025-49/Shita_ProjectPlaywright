import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('heading', { name: 'Installation' }).click();
  await page.getByRole('heading', { name: 'Installing PlaywrightDirect' }).click();
  await page.getByText('init playwright@latest').click();
});