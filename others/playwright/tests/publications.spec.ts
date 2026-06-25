import { test, expect, Page } from '@playwright/test';
import {
  login,
  logout,
  openList,
  skeletonDismissed,
  loaded,
} from '../tools/helpers';

const DOMAIN = 'FtDomain';
const OBJECT = 'FtPublications';
const LIST_SELECTOR = `#list_${OBJECT}_the_ajax_${OBJECT}`;
const FORM_SELECTOR = '.objform.object-FtPublications';
const PUBLICATION_HTML = '<h1>Hello, World!</h1>';

test.beforeEach(async ({ page }) => {
  await login(page);
});

test.afterEach(async ({ page }) => {
  await logout(page);
});

async function openPublicationsList(page: Page) {
  await openList(page, DOMAIN, OBJECT);
  await skeletonDismissed(page);
  await expect(page.locator(LIST_SELECTOR)).toBeVisible();
}

async function fillPublicationHtml(page: Page, html: string) {
  await page.locator(`${FORM_SELECTOR} [data-field="ftPubHtml"] .ace_text-input`).fill(html);
}

async function deletePublicationFromList(page: Page, code: string) {
  const row = page.locator(`${LIST_SELECTOR} tr`).filter({ hasText: code });
  await row.locator('.btn-plus').click();
  await row.locator('[data-action="delete"]').click();
  await page.locator('#dlgmodal .modal-footer [data-action="OK"]').click();
  await loaded(page);
  await skeletonDismissed(page);
}

test('Publications HTML to PDF', {
  annotation: { type: 'feature', description: 'Generates PDF document from HTML on save' },
}, async ({ page }) => {
  await openPublicationsList(page);

  await page.locator('.list-actionbar [data-action="create"]').click();
  await skeletonDismissed(page);
  await expect(page.locator(FORM_SELECTOR)).toBeVisible();

  await fillPublicationHtml(page, PUBLICATION_HTML);
  await page.locator(`${FORM_SELECTOR} [data-action="save"]`).click();
  await expect(page.locator('.alert-danger')).not.toBeVisible();
  await loaded(page);
  await skeletonDismissed(page);

  const code = await page.locator('#field_ftPubCode').inputValue();
  expect(code).toMatch(/^Pub-\d+$/);

  const pdfDocumentId = await page.locator('#field_ftPubFile').inputValue();
  expect(pdfDocumentId).not.toBe('');

  await expect(page.locator('#doc_field_ftPubFile')).toHaveValue(/\.pdf$/);

  await page.locator(`${FORM_SELECTOR} [data-action="close"]`).click();
  await skeletonDismissed(page);

  const row = page.locator(`${LIST_SELECTOR} tr`).filter({ hasText: code });
  await expect(row.locator('[data-field="ftPubHtml"]')).toContainText('Hello, World!');

  await deletePublicationFromList(page, code);
  await expect(row).not.toBeVisible();
});
