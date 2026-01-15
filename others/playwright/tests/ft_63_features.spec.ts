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
    await page.locator("tr[data-rowid='0'] [data-field='ftLstDescription'] .htmleditor").click();
    await page.keyboard.type(code);
    await saveList(page);
    await page.locator('button[data-action="cancel"]').click();
    await skeletonDismissed(page);

    const row = page.getByRole("row", { name: code });
    await row.click({button: "right"});
    await expect(page.locator(".context-menu-dropdown")).toBeVisible();
});

test('Quick list ordering', async ({ page }) => {
    await openList(page, "Ft63Features", "FtListOrdering", "FtDomain.Ft63Features");
    // Create first element
    await page.locator("button[data-action='addlist']").click();
    await skeletonDismissed(page);
    await page.locator("#field_ftLoLabel_id0").fill("Item 1");
    await saveList(page);

    // Create second element
    await page.locator("#field_ftLoLabel_id0").fill("Item 2");
    await saveList(page);

    await page.locator('button[data-action="cancel"]').click();

    // Use the reorder list action
    await page.locator('.list-actionbar .dropdown').click();
    await page.locator('.list-actionbar .dropdown').locator('[data-action="reorder"]').click();
    await expect(page.locator("#dlgmodal_confirm")).toBeVisible();
    // Reorder based on the current search
    await page.locator("#field_reorder_action_idreorder").click();
    await page.locator("button.btn-confirm").click();

    // Expect the two rows to have an order of 1 and 2
    const row1 = page.getByRole("row", { name: "Item 1" });
    const row2 = page.getByRole("row", { name: "Item 2" });
    await expect(row1.locator("[data-field='ftLoOrder']")).toHaveText("1");
    await expect(row2.locator("[data-field='ftLoOrder']")).toHaveText("2");

    // Reorder elements
    await page.locator(".reorder").click();
    await page.locator('[data-action="reorder"]').last().hover();
    await page.mouse.down();
    await page.mouse.move(330,319);
    await page.locator('.dock.before').first().hover();
    await page.mouse.up();

    // Expect row 2 to be before row 1
    await expect(row2.locator("[data-field='ftLoOrder']")).toHaveText("2");
    await expect(row1.locator("[data-field='ftLoOrder']")).toHaveText("3");
});