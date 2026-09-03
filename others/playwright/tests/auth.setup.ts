import { test as setup, expect } from '@playwright/test';
import path from 'path';
import { instanceReady } from '../tools/helpers';

const authFile = path.join(__dirname, '../.auth/user.json');

setup('authenticate', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState();

  await page.getByRole('textbox', { name: 'Login' }).fill(process.env.USER_NAME || '');
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD || '');
  await page.getByRole('button', { name: 'Connection' }).click();

  await instanceReady(page);
  await expect(page.locator('#menu')).toBeVisible({ timeout: 60000 });

  await page.context().storageState({ path: authFile });
});
