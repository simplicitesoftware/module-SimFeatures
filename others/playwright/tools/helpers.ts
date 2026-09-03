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
 * Opens the app home using the reused authenticated storage state.
 * Prefer this in tests; login once via auth.setup.ts instead.
 */
export async function goHome(page: Page) {
  await page.goto('/');
  await page.waitForLoadState();
  await instanceReady(page);
  await expect(page.locator('#menu')).toBeVisible({ timeout: 60000 });
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
  await expect(page.locator("#menu")).toBeVisible();
  const objVisible = await page.locator(`[data-obj='${object}']`).isVisible();
  if (!objVisible) {
      await page.locator(`[data-domain='${domain}']`).click();
  }
  await expect(page.locator(`[data-obj='${object}']`)).toBeVisible();
  await page.locator(`[data-obj='${object}']`).click();
  await expect(page.locator(`#list_${object}_the_ajax_${object}`)).toBeVisible();
}
