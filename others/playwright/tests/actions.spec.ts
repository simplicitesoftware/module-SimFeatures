import { test, expect, Page, Locator } from '@playwright/test';
import { join } from 'path';
import {
  goHome,
  skeletonDismissed,
  loaded,
  saveForm,
  randomString,
} from '../tools/helpers';

const OBJECT = 'FtActions';
const LIST_SELECTOR = `#list_${OBJECT}_the_ajax_${OBJECT}`;
const FORM_SELECTOR = '.objform';
const STATE_TRANSITION_A_TO_B = 'FT_ACT_STATE-A-B';
const STATE_TRANSITION_B_TO_A = 'FT_ACT_STATE-B-A';
const FIXTURES_DIR = join(__dirname, '..', 'fixtures');
const TEST_IMAGE = join(FIXTURES_DIR, 'test-image.png');
const TEST_DOCUMENT = join(FIXTURES_DIR, 'test-document.pdf');

test.beforeEach(async ({ page }) => {
  await goHome(page);
});

test.afterEach(async ({ page }) => {
  const warningDialog = page.locator('#dlgmodal.dlg-alert');
  if (await warningDialog.isVisible()) {
    await page.locator('#dlgmodal .btn-OK').click();
  }
  const createUserDialog = page.locator('#dlgmodal_create_FtCustomUser_the_ajax_FtCustomUser');
  if (await createUserDialog.isVisible()) {
    await createUserDialog.locator('[data-action="close"]').click();
  }
  const confirmDialog = page.locator('#dlgmodal_confirm.show');
  if (await confirmDialog.isVisible()) {
    await confirmDialog.locator('[data-action="cancel"]').click();
  }
});

function getTextFile(name: string) {
  return {
    name: `${name}.txt`,
    mimeType: 'text/plain',
    buffer: Buffer.from('this is test'),
  };
}

function getImageFile() {
  return TEST_IMAGE;
}

function getPdfFile() {
  return TEST_DOCUMENT;
}

function getAskFieldsDialog(page: Page) {
  return page.locator('#dlgmodal_confirm');
}

async function openActionsShowAll(page: Page) {
  await expect(page.locator('#menu')).toBeVisible();
  const showAll = page.locator(
    '[data-obj="FtActions"][data-path="FtDomain.FtActions.all"]',
  );
  if (!(await showAll.isVisible())) {
    await page
      .locator('[data-obj="FtActions"][data-path="FtDomain.FtActions"].js-sub-menu-toggle')
      .click();
  }
  await showAll.click();
  await skeletonDismissed(page);
  await expect(page.locator(LIST_SELECTOR)).toBeVisible();
}

async function openAskFieldsOnFirstRow(page: Page) {
  await page.locator('[data-action="ActAskFields"]').click();
  const dialog = getAskFieldsDialog(page);
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('[data-field="ftActDate2"]')).toBeVisible();
  return dialog;
}

async function createCustomUserInDialog(
  page: Page,
  dialog: ReturnType<typeof getAskFieldsDialog>,
  actionName: string,
) {
  const login = `pwuser_${randomString(8)}`;
  await dialog
    .locator(`button.refnew_field_ftActUserId__usr_login_id${actionName}`)
    .click();

  const createDialog = page.locator('#dlgmodal_create_FtCustomUser_the_ajax_FtCustomUser');
  await expect(createDialog).toBeVisible();
  const userForm = createDialog.locator('#form_FtCustomUser_the_ajax_FtCustomUser_0');
  await userForm.locator('#field_usr_login').click();
  await userForm.locator('#field_usr_login').fill(login);
  await userForm.locator('#field_usr_email').click();
  await userForm.locator('#field_usr_email').fill(`${login}@test.com`);
  await userForm.locator('[data-action="saveclose"]').click();
  await loaded(page);
  await expect(createDialog.locator('.alert-danger')).not.toBeVisible();
  await expect(createDialog).not.toBeVisible();
  await expect(dialog.locator(`#field_ftActUserId__usr_login_id${actionName}`)).toHaveValue(login);

  const userId = await dialog.locator(`#field_ftActUserId_id${actionName}`).inputValue();
  return { login, userId };
}

async function setDateToTodayInField(scope: Page | Locator, field: string) {
  await scope.locator(`[data-field="${field}"] .fa-calendar-alt`).click();
  await scope
    .locator(`[data-field="${field}"] .flatpickr-calendar [data-action="TODAY"]`)
    .click();
}

async function returnToActionsList(page: Page) {
  await page.locator('.objform [data-action="close"]').click();
  await skeletonDismissed(page);
  await expect(page.locator(LIST_SELECTOR)).toBeVisible();
}

function getActionRow(page: Page, code: string) {
  return page.locator(`${LIST_SELECTOR} tbody tr`).filter({ hasText: code });
}

async function confirmSimpleAction(page: Page) {
  const dialog = page.locator('#dlgmodal').filter({ has: page.locator('[data-action="YES"]') });
  await expect(dialog).toBeVisible();
  await dialog.locator('[data-action="YES"]').click();
  await loaded(page);
  await skeletonDismissed(page);
  await expect(dialog).not.toBeVisible();
}

async function createAction(page: Page) {
  await page.locator('.list-actionbar [data-action="create"]').click();
  await skeletonDismissed(page);
  await expect(page.locator(FORM_SELECTOR)).toBeVisible();
  await expect(page.locator('#field_ftActState')).toHaveValue('A');

  await setDateToTodayInField(page, 'ftActDate');
  await page.locator('#file_field_ftActDocument').setInputFiles(getPdfFile());
  await page.locator('#file_field_ftActImage').setInputFiles(getImageFile());
  await expect(page.locator('#doc_field_ftActDocument')).toHaveValue('test-document.pdf');
  await expect(page.locator('#doc_field_ftActImage')).toHaveValue('test-image.png');

  await saveForm(page);
  await skeletonDismissed(page);
  await expect(page.locator('#field_ftActCode')).not.toHaveValue('');

  const code = await page.locator('#field_ftActCode').inputValue();
  return code;
}

async function fillStateTransitionDialog(
  page: Page,
  dialog: ReturnType<typeof getAskFieldsDialog>,
  actionName: string,
  options: {
    documentName: string;
    imageAlt?: string;
  },
) {
  await createCustomUserInDialog(page, dialog, actionName);

  await setDateToTodayInField(dialog, 'ftActDate2');
  await dialog
    .locator(`#file_field_ftActDocument2_id${actionName}`)
    .setInputFiles(getTextFile(options.documentName));
  await dialog
    .locator(`#file_field_ftActImage2_id${actionName}`)
    .setInputFiles(getImageFile());

  await expect(dialog.locator(`#doc_field_ftActDocument2_id${actionName}`)).toHaveValue(
    `${options.documentName}.txt`,
  );
  await expect(dialog.locator(`#doc_field_ftActImage2_id${actionName}`)).toHaveValue(
    'test-image.png',
  );

  if (options.imageAlt) {
    await dialog.locator('input.image-alt').fill(options.imageAlt);
  }
}

async function fillAskFieldsDialog(
  page: Page,
  dialog: ReturnType<typeof getAskFieldsDialog>,
  options: {
    documentName: string;
    imageAlt?: string;
  },
) {
  const { userId } = await createCustomUserInDialog(page, dialog, 'ActAskFields');

  await setDateToTodayInField(dialog, 'ftActDate2');

  await dialog
    .locator('#file_field_ftActDocument2_idActAskFields')
    .setInputFiles(getTextFile(options.documentName));
  await dialog
    .locator('#file_field_ftActImage2_idActAskFields')
    .setInputFiles(getImageFile());

  await expect(dialog.locator('#doc_field_ftActDocument2_idActAskFields')).toHaveValue(
    `${options.documentName}.txt`,
  );
  await expect(dialog.locator('#doc_field_ftActImage2_idActAskFields')).toHaveValue(
    'test-image.png',
  );

  if (options.imageAlt) {
    await dialog.locator('input.image-alt').fill(options.imageAlt);
  }

  return { userId };
}

function todayIsoDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

test('FT_0125', {
  annotation: { type: 'feature', description: 'Ask fields custom action' },
}, async ({ page }) => {
  await openActionsShowAll(page);

  const dialog = await openAskFieldsOnFirstRow(page);
  const { userId } = await fillAskFieldsDialog(page, dialog, {
    documentName: 'askfields-doc',
    imageAlt: 'Action image alt text',
  });

  await dialog.locator('[data-action="confirm"]').click();
  await loaded(page);

  const result = page.locator('.alert-warning');
  await expect(result).toContainText('askAction is done with confirmed values');
  await expect(result).toContainText(`date = ${todayIsoDate()}`);
  await expect(result).toContainText(`user id = ${userId}`);
  await expect(result).toContainText('doc name = askfields-doc.txt');

  await page.locator('#dlgmodal .btn-OK').click();
  await expect(page.locator('#dlgmodal.dlg-alert')).not.toBeVisible();
});

test('FT_0182', {
  annotation: { type: 'feature', description: 'State transition Go to B and Back to A' },
}, async ({ page }) => {
  await openActionsShowAll(page);
  const code = await createAction(page);

  await expect(page.locator('#field_ftActState')).toHaveValue('A');
  await expect(page.locator(`[data-action="${STATE_TRANSITION_A_TO_B}"]`)).toBeVisible();

  await page.locator(`[data-action="${STATE_TRANSITION_A_TO_B}"]`).click();
  const dialog = getAskFieldsDialog(page);
  await expect(dialog).toBeVisible();
  await expect(dialog.locator(`#field_ftActUserId__usr_login_id${STATE_TRANSITION_A_TO_B}`)).toBeVisible();

  await fillStateTransitionDialog(page, dialog, STATE_TRANSITION_A_TO_B, {
    documentName: 'transition-doc',
    imageAlt: 'Transition image alt text',
  });

  await dialog.locator('[data-action="confirm"]').click();
  await loaded(page);
  await skeletonDismissed(page);
  await expect(dialog).not.toBeVisible();

  await expect(page.locator('#field_ftActCode')).toHaveValue(code);
  await expect(page.locator('#field_ftActState')).toHaveValue('B');
  await expect(page.locator(`[data-action="${STATE_TRANSITION_B_TO_A}"]`)).toBeVisible();
  await expect(page.locator(`[data-action="${STATE_TRANSITION_A_TO_B}"]`)).not.toBeVisible();

  await returnToActionsList(page);

  const row = getActionRow(page, code);
  await expect(row.locator('[data-field="ftActState"]')).toContainText('B');
  await row.locator(`[data-action="${STATE_TRANSITION_B_TO_A}"]`).click();
  await confirmSimpleAction(page);

  await expect(row.locator('[data-field="ftActState"]')).toContainText('A');
  await expect(row.locator(`[data-action="${STATE_TRANSITION_B_TO_A}"]`)).not.toBeVisible();
  await expect(row.locator(`[data-action="${STATE_TRANSITION_A_TO_B}"]`)).toBeVisible();
});
