import { expect, Page } from '@playwright/test';

/**
 * Waits for any skeleton loader (skeleton-list, skeleton-form, etc.) to be dismissed
 * @param page Playwright page object
 */
export async function skeletonDismissed(page: Page) {
  await expect(page.locator("[class^='skeleton-']")).not.toBeVisible();
}

/**
 * Waits for the loading dialog to be dismissed
 * @param page Playwright page object
 */
export async function loaded(page: Page) {
  await expect(page.locator("#work .waitdlg")).not.toBeVisible();
}

/**
 * Waits for the page loading indicator to be dismissed
 * @param page Playwright page object
 */
export async function instanceReady(page: Page) {
  await expect(page.locator(".page-loading")).not.toBeVisible();
}

/**
 * Logs in to the application
 * @param page Playwright page object
 */
export async function login(page: Page) {
  await page.goto('/');
  // Wait for page to be fully loaded before interacting
  await page.waitForLoadState();
  await page.getByRole('textbox', { name: 'Login' }).fill(process.env.USER_NAME || '');
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD || '');
  await page.getByRole('button', { name: 'Connection' }).click();
  // Wait for login to complete and page to load
  await instanceReady(page);
}

/**
 * Logs out of the application
 * @param page Playwright page object
 */
export async function logout(page: Page) {
  await page.locator(".header .logged-user").click();
  await page.locator("li.user-logout").click();
  await page.locator("#dlgmodal_CONFIRM_LOGOUT .btn-OK").click();
}

/**
 * Saves the form
 * @param page Playwright page object
 */
export async function saveForm(page: Page) {
  await page.locator(".objform [data-action='save']").click();
  await expect(page.locator(".alert-danger")).not.toBeVisible();
  // Wait for network requests to complete after save
  await loaded(page);
}

/**
 * Saves the list
 * @param page 
 */
export async function saveList(page: Page) {
  await page.locator('button[data-action="save"]').click();
  await expect(page.locator(".alert-danger")).not.toBeVisible();
  await loaded(page);
  await skeletonDismissed(page);
}

/**
 * Generates a random string
 * @param length Length of the string
 * @returns Random string
 */
export function randomString(length: number) {
  return Math.random().toString(36).substring(2, length);
}

export async function openList(page: Page, domain: string, object: string, path?: string) {
  /*if (!(await page.locator(`[data-obj='${object}']`).isVisible())) {
    if (path) {
      let parent = path.split('.')[0];
      if (parent) {
        await page.locator(`[data-domain='${parent}']`).click();
        await page.locator(` [data-path='${path}']`).click();
      }
    } else {
      await page.locator(`[data-domain='${domain}']`).click();
    }
  } */
  await page.locator(`[data-obj='${object}']`).click();
}