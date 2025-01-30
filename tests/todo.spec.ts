import { test, expect } from '@playwright/test';

test.describe('New Todo', () => {
  test.beforeEach(async ({ page}) => {
    await page.goto('');
  });

  test('active and completed filters', async ({ page }) => {
    const todoInput = page.getByPlaceholder('What needs to be done?');

    await todoInput.click();
    await todoInput.fill('water the plants');
    await todoInput.press('Enter');
    await todoInput.fill('feed the dog');
    await todoInput.press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'water the plants' }).getByLabel('Toggle Todo').check();
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('link', { name: 'Completed' }).click();
    await page.getByText('All Active Completed').click();
    await page.getByRole('link', { name: 'All' }).click();
    await page.getByRole('listitem').filter({ hasText: 'water the plants' }).getByLabel('Toggle Todo').uncheck();
  });
  
  test('Exercise: Manually Create a Test Spec', async ({ page }) => {
    const todoInput = page.getByPlaceholder('What needs to be done?');
    
    await todoInput.fill('water the plants');
    await todoInput.press('Enter');

    await expect(page.locator('.new-todo')).toBeEmpty();

    await expect(todoInput).toBeEmpty();
  });
});