import { test, expect, Page, Locator } from '@playwright/test';
import { join } from 'path';
import {
  login,
  logout,
  skeletonDismissed,
  loaded,
} from '../tools/helpers';

const OBJECT = 'FtHistory';
const LIST_SELECTOR = `#list_${OBJECT}_the_ajax_${OBJECT}`;
const FORM_SELECTOR = '.objform.object-FtHistory';
const LINKS_SELECTOR = '#links_FtHistory';
const HISTORIC_TAB = '#linktab_FtHistoryHistoric_row_ref_id';
const CHANGE_LOG_TAB = '#linktab_RedoLog_rlg_object';
const HISTORIC_LIST = '#list_FtHistoryHistoric_panel_ajax_FtHistoryHistoric_row_ref_id';
const CHANGE_LOG_LIST = '#list_RedoLog_panel_ajax_RedoLog_rlg_object';
const FIXTURES_DIR = join(__dirname, '..', 'fixtures');
const TEST_DOCUMENT = join(FIXTURES_DIR, 'test-document.pdf');
const INITIAL_DOCUMENT = 'test-document.pdf';
const REPLACED_DOCUMENT = 'hist-doc-replace.txt';
const INITIAL_MULTI_DOC = 'hist-multi-a.txt';
const ADDED_MULTI_DOC = 'hist-multi-b.txt';

test.describe.configure({ mode: 'serial' });

async function waitForFormSettled(page: Page) {
  await loaded(page);
  await skeletonDismissed(page);
}

async function dismissConflictAlert(page: Page) {
  const conflict = page.locator('.alert').filter({ hasText: 'already modified' });
  if (await conflict.isVisible()) {
    await conflict.getByRole('button', { name: 'Override' }).click();
    await waitForFormSettled(page);
  }
}

async function dismissQuitDialog(page: Page) {
  const quitDialog = page.locator('#dlgmodal').filter({ hasText: 'Do you want to quit' });
  if (await quitDialog.isVisible()) {
    await quitDialog.getByRole('button', { name: 'Cancel' }).click();
    await expect(quitDialog).not.toBeVisible();
  }
}

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await login(page);
});

test.afterEach(async ({ page }) => {
  await dismissConflictAlert(page);
  const confirmDialog = page.locator('#dlgmodal').filter({ has: page.locator('[data-action="YES"]') });
  if (await confirmDialog.isVisible()) {
    await confirmDialog.locator('[data-action="NO"]').click();
  }
  await dismissQuitDialog(page);
  const contentDialog = page.locator('#dlgmodal.js-content-unload.show');
  if (await contentDialog.isVisible()) {
    await page.keyboard.press('Escape');
  }
  await logout(page);
});

async function openHistoryList(page: Page) {
  await expect(page.locator('ul.main-menu')).toBeVisible();
  await page.locator(`[data-obj="${OBJECT}"]`).click();
  await skeletonDismissed(page);
  await expect(page.locator(LIST_SELECTOR)).toBeVisible();
}

async function openCreateForm(page: Page) {
  await page.locator(`${LIST_SELECTOR} .list-actionbar [data-action="create"]`).click();
  await skeletonDismissed(page);
  await expect(page.locator(FORM_SELECTOR)).toBeVisible();
}

async function saveForm(page: Page) {
  const saveButton = page.locator(`${FORM_SELECTOR} [data-action="save"]`);
  await saveButton.scrollIntoViewIfNeeded();
  await saveButton.click();
  await expect(page.locator('.alert-danger')).not.toBeVisible();
  await waitForFormSettled(page);
}

function getHistoricPanel(page: Page) {
  return page.locator(HISTORIC_LIST);
}

function getChangeLogPanel(page: Page) {
  return page.locator(CHANGE_LOG_LIST);
}

async function showLinkedPanels(page: Page) {
  await page.locator(LINKS_SELECTOR).scrollIntoViewIfNeeded();
  await expect(page.locator(LINKS_SELECTOR)).toBeVisible();
}

async function openHistoricTab(page: Page) {
  await showLinkedPanels(page);
  await page.locator(HISTORIC_TAB).click();
  const panel = getHistoricPanel(page);
  await panel.scrollIntoViewIfNeeded();
  await expect(panel).toBeVisible();
}

async function openChangeLogTab(page: Page) {
  await showLinkedPanels(page);
  await page.locator(CHANGE_LOG_TAB).click();
  const panel = getChangeLogPanel(page);
  await panel.scrollIntoViewIfNeeded();
  await expect(panel).toBeVisible();
}

async function expectHistoricRowCount(page: Page, count: number) {
  await openHistoricTab(page);
  await expect(getHistoricPanel(page).locator('tr[data-rowid]')).toHaveCount(count);
}

async function expectChangeLogRowCount(page: Page, count: number) {
  await openChangeLogTab(page);
  await expect(getChangeLogPanel(page).locator('tr[data-rowid]')).toHaveCount(count);
}

function historicRow(page: Page, index: number): Locator {
  return getHistoricPanel(page).locator('tr[data-rowid]').nth(index);
}

function changeLogRow(page: Page, index: number): Locator {
  return getChangeLogPanel(page).locator('tr[data-rowid]').nth(index);
}

async function selectEnumeration(page: Page, value: string) {
  const field = page.locator("[data-field='ftHistEnumeration']");
  await field.locator('span.select2').click();
  await field.locator('.select2-results li').filter({ hasText: value }).click();
}

async function setMultipleEnumeration(page: Page, values: string[]) {
  const group = page.locator("[data-field='ftHistMultipleEnumeration']");
  for (const value of values) {
    const label = value === 'A' ? 'Multiple enumeration A' : value;
    await group.getByRole('checkbox', { name: label, exact: true }).check();
  }
}

function getTextFile(name: string) {
  return {
    name: `${name}.txt`,
    mimeType: 'text/plain',
    buffer: Buffer.from('this is test'),
  };
}

async function uploadDocument(page: Page, file: string | ReturnType<typeof getTextFile>) {
  const docField = page.locator(`${FORM_SELECTOR} .field-document[data-group='ftHistDocument']`);
  await docField.scrollIntoViewIfNeeded();
  const editButton = docField.locator('.bedit_field_ftHistDocument');
  if (await editButton.isVisible()) {
    await editButton.click();
  }
  await page.locator('#file_field_ftHistDocument').setInputFiles(file);
  const expectedName = typeof file === 'string' ? file.split('/').pop()! : file.name;
  await expect(page.locator('#doc_field_ftHistDocument')).toHaveValue(expectedName);
}

async function uploadMultiDoc(page: Page, files: ReturnType<typeof getTextFile>[]) {
  const field = page.locator(`${FORM_SELECTOR} .field-document[data-group='ftHistMultiDoc']`);
  await field.scrollIntoViewIfNeeded();
  await page.locator('#files_field_ftHistMultiDoc').setInputFiles(files);
}

async function createHistoryItem(page: Page, decimal: string) {
  await openHistoryList(page);
  await openCreateForm(page);
  await page.locator('#field_ftHistDecimal').fill(decimal);
  await saveForm(page);

  const code = await page.locator('#field_ftHistCode').inputValue();
  expect(code).toMatch(/^HIST_\d+$/);
  return code;
}

async function deleteCurrentHistoryForm(page: Page) {
  await page.evaluate(`
    window.scrollTo(0, 0);
    document.querySelector('#work')?.scrollTo(0, 0);
  `);
  const form = page.locator(FORM_SELECTOR);
  const toolbar = form.locator('.form-actionbar');
  await toolbar.locator('.btn-plus').click();
  await form.locator('.dropdown-menu.show [data-action="delete"]').click();
  await page.locator('#dlgmodal .modal-footer [data-action="OK"]').click();
  await waitForFormSettled(page);
}

async function deleteHistoryItem(page: Page, code: string) {
  if (await page.locator(FORM_SELECTOR).isVisible()) {
    await deleteCurrentHistoryForm(page);
    return;
  }

  await openHistoryList(page);
  await skeletonDismissed(page);
  const row = page.locator(`${LIST_SELECTOR} tbody tr`).filter({ hasText: code });
  await expect(row).toHaveCount(1);
  await row.locator('.btn-plus').click();
  await row.locator('[data-action="delete"]').click();
  await page.locator('#dlgmodal .modal-footer [data-action="OK"]').click();
  await waitForFormSettled(page);
}

test('FT_0187', {
  annotation: {
    type: 'feature',
    description: 'Creates a History item and verifies Historic and Change log panels after create, field updates, and document file changes',
  },
}, async ({ page }) => {
  const initialDecimal = '12.50';
  const updatedDecimal = '25.75';
  const code = await createHistoryItem(page, initialDecimal);

  await expectHistoricRowCount(page, 1);
  await openHistoricTab(page);
  await expect(historicRow(page, 0).locator('[data-field="ftHistCode"]')).toContainText(code);
  await expect(historicRow(page, 0).locator('[data-field="ftHistDecimal"]')).toContainText(initialDecimal);
  await expect(historicRow(page, 0).locator('[data-field="row_diff"]')).toHaveText('');

  await expectChangeLogRowCount(page, 1);
  await openChangeLogTab(page);
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_action"]')).toContainText('Insert');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_origin"]')).toContainText('UI:Create');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText(code);
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText(initialDecimal);

  await page.locator('#field_ftHistDecimal').fill(updatedDecimal);
  await saveForm(page);

  await expectHistoricRowCount(page, 2);
  await openHistoricTab(page);
  await expect(historicRow(page, 0).locator('[data-field="ftHistDecimal"]')).toContainText(updatedDecimal);
  await expect(historicRow(page, 0).locator('[data-field="row_diff"]')).toContainText('Decimal');
  await expect(historicRow(page, 0).locator('[data-field="row_diff"]')).toContainText('12.50');
  await expect(historicRow(page, 0).locator('[data-field="row_diff"]')).toContainText('25.75');
  await expect(historicRow(page, 1).locator('[data-field="ftHistDecimal"]')).toContainText(initialDecimal);

  await expectChangeLogRowCount(page, 2);
  await openChangeLogTab(page);
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_action"]')).toContainText('Update');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_origin"]')).toContainText('UI:Update');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText('Decimal');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText('12.50');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText('25.75');

  await selectEnumeration(page, 'B');
  await page.locator('#field_ftHistBoolean').check();
  await setMultipleEnumeration(page, ['A', 'C']);
  await saveForm(page);

  await expectHistoricRowCount(page, 3);
  await openHistoricTab(page);
  await expect(historicRow(page, 0).locator('[data-field="ftHistEnumeration"]')).toContainText('B');
  await expect(historicRow(page, 0).locator('[data-field="ftHistBoolean"]')).toContainText('Yes');
  await expect(historicRow(page, 0).locator('[data-field="row_diff"]')).toContainText('Enumeration');
  await expect(historicRow(page, 0).locator('[data-field="row_diff"]')).toContainText('Boolean');

  await expectChangeLogRowCount(page, 3);
  await openChangeLogTab(page);
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_action"]')).toContainText('Update');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText('Enumeration');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText('Boolean');

  await uploadDocument(page, TEST_DOCUMENT);
  await uploadMultiDoc(page, [getTextFile('hist-multi-a')]);
  await saveForm(page);

  await expectHistoricRowCount(page, 4);
  await openHistoricTab(page);
  await expect(historicRow(page, 0).locator('td[data-field="ftHistDocument"] i')).toHaveAttribute(
    'title',
    new RegExp(INITIAL_DOCUMENT),
  );
  await expect(historicRow(page, 0).locator('[data-field="row_diff"]')).toContainText('Document');
  await expect(historicRow(page, 0).locator('[data-field="row_diff"]')).toContainText(INITIAL_DOCUMENT);

  await expectChangeLogRowCount(page, 4);
  await openChangeLogTab(page);
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_action"]')).toContainText('Update');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_origin"]')).toContainText('UI:Update');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText('Document');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText(INITIAL_DOCUMENT);

  await uploadDocument(page, getTextFile('hist-doc-replace'));
  await uploadMultiDoc(page, [getTextFile('hist-multi-a'), getTextFile('hist-multi-b')]);
  await saveForm(page);

  await expectHistoricRowCount(page, 5);
  await openHistoricTab(page);
  await expect(historicRow(page, 0).locator('td[data-field="ftHistDocument"] i')).toHaveAttribute(
    'title',
    new RegExp(REPLACED_DOCUMENT),
  );
  await expect(historicRow(page, 0).locator('[data-field="row_diff"]')).toContainText('Document');
  await expect(historicRow(page, 0).locator('[data-field="row_diff"]')).toContainText(INITIAL_DOCUMENT);
  await expect(historicRow(page, 0).locator('[data-field="row_diff"]')).toContainText(REPLACED_DOCUMENT);

  await expectChangeLogRowCount(page, 5);
  await openChangeLogTab(page);
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_action"]')).toContainText('Update');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_origin"]')).toContainText('UI:Update');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText('Document');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText(INITIAL_DOCUMENT);
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText(REPLACED_DOCUMENT);
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText('Multi-doc');
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText(INITIAL_MULTI_DOC);
  await expect(changeLogRow(page, 0).locator('[data-field="rlg_html"]')).toContainText(ADDED_MULTI_DOC);

  await deleteHistoryItem(page, code);
  await openHistoryList(page);
  await expect(page.locator(`${LIST_SELECTOR} tbody tr`).filter({ hasText: code })).not.toBeVisible();
});
