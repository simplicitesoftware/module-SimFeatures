import { test, expect, Page } from '@playwright/test';
import { login, logout, openList, randomString, skeletonDismissed, saveList, loaded } from '../tools/helpers';

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  await login(page);
});

test.afterEach(async ({ page }) => {
  await logout(page);
});

// Context menu on lists test
test('CHG_00092', async ({ page }) => {
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

// Quick list ordering test
test('CHG_00074', async ({ page }) => {
    await openList(page, "FtDomain", "FtListOrdering");
    // Create first element
    await page.locator("button[data-action='addlist']").click();
    await skeletonDismissed(page);
    const item1 = randomString(10);
    await page.locator("#field_ftLoLabel_id0").fill(item1);
    await saveList(page);

    // Create second element
    const item2 = randomString(10);
    await page.locator("#field_ftLoLabel_id0").fill(item2);
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
    const row1 = page.getByRole("row", { name: item1 });
    const row2 = page.getByRole("row", { name: item2 });
    await expect(row1.locator("[data-field='ftLoOrder']")).not.toBeEmpty();
    await expect(row2.locator("[data-field='ftLoOrder']")).not.toBeEmpty();

    // Reorder elements
    await row2.locator('[data-action="reorder"]').hover();
    await page.mouse.down();
    await page.mouse.move(330,300);
    await page.locator('.dock.before').first().hover();
    await page.mouse.up();

    // Expect row 2 to be before row 1
    await expect(page.locator("[data-field='ftLoLabel']").first()).toContainText(item2);
    
});


test('Create on list', async ({ page }) => {
    await openList(page, "FtDomain", "FtListItem");
  
    await page.locator("button[data-action='addlist']").click();
    await expect(page.locator(('#list_FtListItem_the_ajax_FtListItem tr[data-rowid="0"]'))).toBeVisible();
    
    await saveList(page);
    await expect(page.locator("tr:not([data-rowid='0']) td[data-field='ftLstCode']").first()).toContainText("Item");
  });
  
test('Update on list', async ({ page }) => {
    await openList(page, "FtDomain", "FtListItem");
    const code = randomString(10);
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
    await expect(row.locator("[data-field='ftLstType']")).toContainText("A");
    await expect(row.locator("[data-field='ftLstDescription']")).toContainText(code);

    await row.locator("[data-field='ftLstType'] span.select2").click();
    await row.locator("[data-field='ftLstType'] .select2-results li").last().click();
    await loaded(page);
    await skeletonDismissed(page);
    await expect(row.locator("[data-field='ftLstType']")).toContainText("C");
});