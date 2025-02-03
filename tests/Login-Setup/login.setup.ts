import { test as setup, expect } from '@playwright/test';
import { STORAGE_STATE } from '../../playwright.config';

setup(' do login', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('https://en.wikipedia.org', { waitUntil: 'networkidle' });
  await page.waitForLoadState('domcontentloaded'); 
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('ShitaZeny');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('HAHAHA25!');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page.getByRole('button', { name: 'Personal tools' })).toBeVisible();
  await page.context().storageState({ path: STORAGE_STATE });

  // await page.goto('https://en.wikipedia.org/wiki/Main_Page');
});