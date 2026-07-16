import { test, expect, Page } from '@playwright/test';
import {
  login,
  logout,
  openList,
  randomString,
  skeletonDismissed,
  saveList,
  loaded,
} from '../tools/helpers';

const DOMAIN = 'FtDomain';
const LIST_ORDERING = 'FtListOrdering';
const LIST_ITEM = 'FtListItem';
const SEARCH_ITEM = 'FtSearch';

test.beforeEach(async ({ page }) => {
  await login(page);
});

test.afterEach(async ({ page }) => {
  await logout(page);
});

// --- List helpers (FtListOrdering) ---

async function addListOrderingRow(
  page: Page,
  order: string,
  label: string,
) {
  await page.locator("button[data-action='addlist']").click();
  await skeletonDismissed(page);
  await page.locator('#field_ftLoOrder_id0').fill(order);
  await page.locator('#field_ftLoLabel_id0').fill(label);
  await saveList(page);
  await page.locator('button[data-action="cancel"]').click();
  await skeletonDismissed(page);
}

// --- List helpers ---

const newRow = () => "tr[data-rowid='0']";

async function createFtListItemWithCode(page: Page, code: string) {
  await page.locator("button[data-action='addlist']").click();
  await skeletonDismissed(page);
  await page.locator(`${newRow()} [data-field='ftLstType'] span.select2`).click();
  await page.locator(`${newRow()} [data-field='ftLstType'] .select2-results li`).first().click();
  await page.locator(`${newRow()} [data-field='ftLstDescription'] .htmleditor`).click();
  await page.keyboard.type(code);
  await saveList(page);
  await page.locator('button[data-action="cancel"]').click();
  await skeletonDismissed(page);
}

async function createSearchItemRow(page: Page, code: string, refCode: string, date: string, coordinates: string) {
  await page.locator("button[data-action='addlist']").click();
  await skeletonDismissed(page);
  const row = page.locator(`tr[data-rowid='0']`);
  await row.locator("#field_ftSchCode_id0").fill(code);
  await row.locator("#field_ftSchDate_id0").fill(date);
  await row.locator("#field_ftSchCoordinates_id0").fill(coordinates);

  await row.locator("[data-field='ftSchSrfId__ftSrfCode'] button.dropdown-toggle").click();
  await row.locator("[data-field='ftSchSrfId__ftSrfCode'] ul a[data-name='refnew_field_ftSchSrfId__ftSrfCode_id0']").click();
  await expect(page.locator("#form_FtSearchReference_the_ajax_FtSearchReference_0")).toBeVisible();

  const refForm = page.locator("#form_FtSearchReference_the_ajax_FtSearchReference_0");
  await refForm.locator("#field_ftSrfCode").fill(refCode);
  await refForm.locator("[data-action='saveclose']").click();
  await page.locator("button[data-action='save']").click();  
  await page.locator("button[data-action='cancel']").click();
}

// --- Prefs dialog helpers ---

async function openListPrefs(page: Page) {
  await page.locator('.list-actionbar .btn-plus').click();
  await page.locator("[data-action='prefs']").click();
  const dialog = page.locator('#dlgmodal_prefs');
  await expect(dialog).toBeVisible();
  return dialog;
}

async function reorderColumns(page: Page, field: string) {
  const dialog = await openListPrefs(page);
  await dialog.locator(`option[value='0:${field}']`).click();
  await dialog.locator('#preftab_0 [data-action="down"]').click();
  await dialog.locator("[data-action='save']").click();
}

async function addOrRemoveImageFieldFromList(
  page: Page,
  direction: 'left' | 'right',
) {
  const dialog = await openListPrefs(page);
  await dialog.locator("option[value='0:ftLstImage']").click();
  await dialog.locator(`#preftab_0 [data-action='${direction}']`).click();
  await dialog.locator("[data-action='save']").click();
}

async function restoreListPrefs(page: Page) {
  const dialog = await openListPrefs(page);
  await dialog.locator('[data-action="restore"]').click();
}

async function toggleFieldInSearchPrefs(
  page: Page,
  direction: 'left' | 'right',
) {
  const dialog = await openListPrefs(page);
  await dialog.locator("[href='#preftab_1']").click();
  await dialog.locator("option[value='ftLstCode']").click();
  await dialog.locator(`#preftab_1 [data-action='${direction}']`).click();
  await dialog.locator("[data-action='save']").click();
}

// --- Tests ---

test('FT_0022', {
  annotation: { type: 'feature', description: 'Multi-column ordering' },
}, async ({ page }) => {
  await openList(page, DOMAIN, LIST_ORDERING);

  await addListOrderingRow(page, '1', 'A');
  await addListOrderingRow(page, '2', 'B');
  await addListOrderingRow(page, '3', 'C');

  await page.locator("[data-name='ftLoLabel'] .sort").click();
  await expect(page.locator("[data-field='ftLoLabel']").first()).toContainText('A');
  await expect(page.locator("[data-field='ftLoOrder']").nth(1)).toContainText('2');

  await page.locator("[data-name='ftLoLabel'] .sort").click();
  await expect(page.locator("[data-field='ftLoLabel']").first()).toContainText('C');

  await page.locator('.btn-selrows').click();
  await page.locator('.list-actionbar div.dropdown').click();
  await page.locator("[data-action='delall']").click();
  await page.locator('#dlgmodal .btn-OK').click();
  await expect(page.locator('.simple-toast')).toBeVisible();
});

test('FT_0025', {
  annotation: { type: 'feature', description: 'List preferences' },
}, async ({ page }) => {
  await openList(page, DOMAIN, LIST_ITEM);

  await addOrRemoveImageFieldFromList(page, 'right');
  await expect(page.locator("th[data-name='ftLstImage']")).not.toBeVisible();

  await addOrRemoveImageFieldFromList(page, 'left');
  await expect(page.locator("th[data-name='ftLstImage']")).toBeVisible();

  const headerCells = page.locator('thead tr.head th:not(.col-action)');
  await expect(headerCells.nth(0)).toHaveAttribute('data-name', 'ftLstCode');
  await expect(headerCells.nth(1)).toHaveAttribute('data-name', 'ftLstOrder');

  await reorderColumns(page, 'ftLstCode');
  await expect(headerCells.nth(0)).toHaveAttribute('data-name', 'ftLstOrder');
  await expect(headerCells.nth(1)).toHaveAttribute('data-name', 'ftLstCode');

  await restoreListPrefs(page);
  await expect(headerCells.nth(0)).toHaveAttribute('data-name', 'ftLstCode');
  await expect(headerCells.nth(1)).toHaveAttribute('data-name', 'ftLstOrder');

  await page.locator('.btn-search').click();
  await expect(page.locator(".field-search[data-field='ftLstCode']")).toBeVisible();
  await page.locator("[data-action='close']").click();

  await toggleFieldInSearchPrefs(page, 'right');
  await page.locator('.btn-search').click();
  await expect(page.locator(".field-search[data-field='ftLstCode']")).not.toBeVisible();
  await page.locator("[data-action='close']").click();
  await toggleFieldInSearchPrefs(page, 'left');
});

test('CHG_00092', {
  annotation: { type: 'feature', description: 'Context menu on lists' },
}, async ({ page }) => {
  await openList(page, DOMAIN, LIST_ITEM);
  const code = randomString(10);
  await createFtListItemWithCode(page, code);

  const row = page.getByRole('row', { name: code });
  await row.click({ button: 'right' });
  await expect(page.locator('.dropdown-menu.ctx-menu')).toBeVisible();
});

test('CHG_00074', {
  annotation: { type: 'feature', description: 'Quick list ordering' },
}, async ({ page }) => {
  await openList(page, DOMAIN, LIST_ORDERING);

  await page.locator("button[data-action='addlist']").click();
  await skeletonDismissed(page);
  const item1 = randomString(10);
  await page.locator('#field_ftLoLabel_id0').fill(item1);
  await saveList(page);

  const item2 = randomString(10);
  await page.locator('#field_ftLoLabel_id0').fill(item2);
  await saveList(page);
  await page.locator('button[data-action="cancel"]').click();

  await page.locator('.list-actionbar .dropdown').click();
  await page.locator('.list-actionbar .dropdown').locator('[data-action="reorder"]').click();
  await expect(page.locator('#dlgmodal_confirm')).toBeVisible();
  await page.locator('#field_reorder_action_idreorder').click();
  await page.locator('button.btn-confirm').click();

  const row1 = page.getByRole('row', { name: item1 });
  const row2 = page.getByRole('row', { name: item2 });
  await expect(row1.locator("[data-field='ftLoOrder']")).not.toBeEmpty();
  await expect(row2.locator("[data-field='ftLoOrder']")).not.toBeEmpty();

  // Drag row2 above row1 using drop target (avoids brittle fixed coordinates)
  const dropTarget = page.locator('.dock.before').first();
  await row2.locator('[data-action="reorder"]').hover();
  await page.mouse.down();
  await dropTarget.hover();
  await page.mouse.up();

  await expect(page.locator("[data-field='ftLoLabel']").first()).toContainText(item2);
});

test('FT_0095', {
  annotation: { type: 'feature', description: 'Create on list' },
}, async ({ page }) => {
  await openList(page, DOMAIN, LIST_ITEM);

  await page.locator("button[data-action='addlist']").click();
  await expect(
    page.locator('#list_FtListItem_the_ajax_FtListItem tr[data-rowid="0"]'),
  ).toBeVisible();

  await saveList(page);
  await expect(
    page.locator("tr:not([data-rowid='0']) td[data-field='ftLstCode']").first(),
  ).toContainText('Item');
});

test('FT_0096', {
  annotation: { type: 'feature', description: 'Update on list' },
}, async ({ page }) => {
  await openList(page, DOMAIN, LIST_ITEM);
  const code = randomString(10);
  await createFtListItemWithCode(page, code);

  const row = page.getByRole('row', { name: code });
  await expect(row.locator("[data-field='ftLstType']")).toContainText('A');
  await expect(row.locator("[data-field='ftLstDescription']")).toContainText(code);

  await row.locator("[data-field='ftLstType'] span.select2").click();
  await row.locator("[data-field='ftLstType'] .select2-results li").last().click();
  await loaded(page);
  await skeletonDismissed(page);
  await expect(row.locator("[data-field='ftLstType']")).toContainText('C');
});

test('FT_0111', {
  annotation: { type: 'feature', description: 'Search dialog' },
}, async ({ page }) => {
  await openList(page, DOMAIN, SEARCH_ITEM);
  const code = randomString(10);
  const refCode = randomString(10);
  const date = "01/01/2026";
  const coordinates = "48.8753213,2.3455624";
  await createSearchItemRow(page, code, refCode, date, coordinates);

  await page.locator('.list-filters [data-action="search"]').click();
  const searchDialog = page.locator("#dlgmodal_search");
  await expect(searchDialog).toBeVisible();
  const searchForm = page.locator("#search_FtSearch_the_ajax_FtSearch");
  await searchForm.locator("input[name='ftSchCode']").fill(code);
  await searchForm.locator("#ftSchDate").fill(date);
  await searchForm.locator("input[name='ftSchCoordinates']").fill(coordinates);
  await searchForm.locator("input[name='ftSchSrfId__ftSrfCode']").fill(refCode);
  await page.locator(".modal-footer button[data-action='search']").click();
  await expect(page.locator("#list_FtSearch_the_ajax_FtSearch")).toBeVisible();
  await expect(page.locator("tbody tr[data-target-inst='the_ajax_FtSearch']")).toHaveCount(1);
  await expect(page.locator("td[data-field='ftSchCode']")).toContainText(code);
  await expect(page.locator("tbody tr[data-target-inst='the_ajax_FtSearch'] td[data-field='ftSchDate']")).toContainText(date);
  await expect(page.locator("tbody tr[data-target-inst='the_ajax_FtSearch'] td[data-field='ftSchCoordinates']")).toContainText(coordinates);
  await expect(page.locator("tbody tr[data-target-inst='the_ajax_FtSearch'] td[data-field='ftSchSrfId__ftSrfCode']")).toContainText(refCode);
});


test('FT_0024', {
  annotation: { type: 'feature', description: 'List search' },
}, async ({ page }) => {
  await openList(page, DOMAIN, SEARCH_ITEM);
  const code = randomString(10);
  const refCode = randomString(10);
  const date = "01/01/2026";
  const coordinates = "48.8753213,2.3455624";
  await createSearchItemRow(page, code, refCode, date, coordinates);

  await page.locator("#ftSchCode_searchby").fill(code);
  await page.locator("#ftSchCode_searchby").blur();
  await expect(page.locator("tbody tr[data-target-inst='the_ajax_FtSearch']")).toHaveCount(1);
});