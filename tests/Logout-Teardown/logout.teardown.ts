import { test as teardown, test } from '@playwright/test';
import { STORAGE_STATE } from '../../playwright.config';

test.use({ storageState: STORAGE_STATE });

teardown('delete database', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');
  await page.getByRole('button', { name: 'Personal tools' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
  await page.getByRole('heading', { name: 'Log out' }).click();

  await page.context().storageState({ path: STORAGE_STATE });
});