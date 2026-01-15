import { test, expect, Page } from '@playwright/test';
import { login, logout, openList, randomString, skeletonDismissed, saveList } from './helpers';

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  await login(page);
});

test.afterEach(async ({ page }) => {
  await logout(page);
});

test('Cartographical search', async ({ page }) => {
    //TODO: Implement cartographical search test
});

test('Context menu on lists', async ({ page }) => {
    await openList(page, "FtDomain", "FtListItem");
    const code = randomString(10);
    // Create a new list item
    await page.locator("button[data-action='addlist']").click();
    await skeletonDismissed(page);
    await page.locator("tr[data-rowid='0'] [data-field='ftLstType'] span.select2").click();
    await page.locator("tr[data-rowid='0'] [data-field='ftLstType'] .select2-results li").first().click();
    await page.locator("tr[data-rowid='0'] [data-field='ftLstDescription'] iframe").click();
    await page.keyboard.type(code);
    await saveList(page);
    await page.locator('button[data-action="cancel"]').click();
    await skeletonDismissed(page);

    const row = page.getByRole("row", { name: code });
    await row.click({button: "right"});
    await expect(page.locator(".context-menu-dropdown")).toBeVisible();
});