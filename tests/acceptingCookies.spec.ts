import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sitoo.com/');
  await page.getByRole('button', { name: 'Allow all' }).click();
});