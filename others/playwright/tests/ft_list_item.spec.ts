import { test, expect, Page } from '@playwright/test';
import { login, logout, saveList, randomString, skeletonDismissed, loaded, openList } from './helpers';

test.beforeEach(async ({ page }) => {
  await login(page);
});

test.afterEach(async ({ page }) => {
  await logout(page);
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
  await page.locator("tr[data-rowid='0'] [data-field='ftLstDescription'] .htmleditor").click();
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

test('Reorder list', async ({ page }) => {
  await openList(page, "FtDomain", "FtListItem");
  
  // create two elements
  await page.locator("button[data-action='addlist']").click();
  await saveList(page);
  await saveList(page);
  await page.locator('button[data-action="cancel"]').click();

  await page.locator(".reorder").click();
  //await page.locator('[desdata-action="reorder"]').last().dragTo(page.locator('.dock .before').first());

  await page.locator('[data-action="reorder"]').last().hover();
  await page.mouse.down();
  await page.mouse.move(330,319);
  await page.locator('.dock.before').first().hover();
  await page.mouse.up();

});

function getField(page: Page, name: string) {
  return page.locator(`#field_${name}`);
}

async function createTestRow(page: Page, code: string) {
  if (!(await page.locator("[data-obj='FtAttributes']").isVisible())) {
    await page.locator("[data-domain='FtDomain']").click();
  } 
  await page.locator("[data-obj='FtAttributes']").click();
  await page.locator(".btn-create").click();
  await page.locator("#field_ftAttrCode").fill(code);
  await page.locator(".btn-saveclose").click();
}

async function deleteRow(page: Page, code: string) {
  if (!(await page.locator("[data-obj='FtAttributes']").isVisible())) {
    await page.locator("[data-domain='FtDomain']").click();
  } 
  await page.locator("[data-obj='FtAttributes']").click();
  const row = page.locator("tr", { has: page.locator(`text="${code}"`) });
  await row.locator(".actions .dropdown").click();
  await row.locator(".actions .dropdown").locator("[data-action='delete']").click();
  await page.locator("#dlgmodal .modal-footer [data-action='OK']").click();
}