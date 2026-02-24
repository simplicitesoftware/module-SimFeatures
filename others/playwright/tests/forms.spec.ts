import { test, expect, Page } from '@playwright/test';
import {
  skeletonDismissed,
  loaded,
  login,
  logout,
  saveForm,
  randomString,
} from '../tools/helpers';

const OBJECT = 'FtAttributes';
const LIST_SELECTOR = `#list_${OBJECT}_the_ajax_${OBJECT}`;
const LIST_DATA = `list_${OBJECT}_the_ajax_${OBJECT}`;

test.beforeEach(async ({ page }) => {
  await login(page);
});

test.afterEach(async ({ page }) => {
  await logout(page);
});

// --- Form helpers ---

function getField(page: Page, name: string) {
  return page.locator(`#field_${name}`);
}

function fieldLocator(page: Page, name: string) {
  return page.locator(`[data-field='${name}']`);
}

async function openTestRow(page: Page, field: string, key: string) {
  await skeletonDismissed(page);
  await expect(page.locator(LIST_SELECTOR)).toBeVisible();
  await page
    .locator(`[data-list='${LIST_DATA}'] [data-field='${field}']`)
    .getByText(key)
    .click();
  await skeletonDismissed(page);
  await loaded(page);
}

async function createTestRow(page: Page, code: string) {
  await page.locator(`[data-obj='${OBJECT}']`).click();
  await skeletonDismissed(page);
  await page.locator('.btn-create').click();
  await skeletonDismissed(page);
  await page.locator('#field_ftAttrCode').fill(code);
  await page.locator("[data-action='saveclose']").click();
  await loaded(page);
  await expect(page.locator(LIST_SELECTOR)).toBeVisible();
}

async function deleteRow(page: Page, code: string) {
  await page.locator(`[data-obj='${OBJECT}']`).click();
  await skeletonDismissed(page);
  const row = page.locator('tr').filter({ hasText: code });
  await row.locator('.actions .dropdown').click();
  await row.locator('.actions .dropdown').locator("[data-action='delete']").click();
  await loaded(page);
  await page.locator("#dlgmodal .modal-footer [data-action='OK']").click();
  await skeletonDismissed(page);
}

function getTextFile(name: string) {
  return {
    name: `${name}.txt`,
    mimeType: 'text/plain',
    buffer: Buffer.from('this is test'),
  };
}

async function setDateToToday(page: Page, field: string, icon: '.fa-calendar-alt' | '.fa-th' = '.fa-calendar-alt') {
  await fieldLocator(page, field).locator(icon).click();
  await expect(fieldLocator(page, field).locator('.datetimepicker')).toBeVisible();
  await fieldLocator(page, field).locator(".datetimepicker tfoot").getByRole("button", { name: "Today" }).click();
}

async function setTimeToNow(page: Page, field: string, icon: '.fa-clock' | '.fa-th' = '.fa-clock') {
  await fieldLocator(page, field).locator(icon).click();
  await expect(fieldLocator(page, field).locator('.datetimepicker')).toBeVisible();
  await fieldLocator(page, field).locator(".datetimepicker tfoot").getByRole("button", { name: "Now" }).click();
}

async function useCalculator(page: Page, field: string, keys: string[]) {
  await getField(page, field).click();
  await expect(fieldLocator(page, field).locator('.calculator')).toBeVisible();
  for (const key of keys) {
    await fieldLocator(page, field).locator('.calculator button').getByText(key).click();
  }
  await expect(fieldLocator(page, field).locator('.calculator')).not.toBeVisible();
}

// --- Tests ---

test('FT_0097', {
  annotation: { type: 'feature', description: 'Text fields' },
}, async ({ page }) => {
  const key = randomString(10);
  await createTestRow(page, key);
  await openTestRow(page, 'ftAttrCode', key);

  const shortTextValue = randomString(10);
  await getField(page, 'ftAttrShortText').fill(shortTextValue);

  const validatedTextValue = 'abc';
  await getField(page, 'ftAttrValidatedText').fill(validatedTextValue);

  const longTextValue = randomString(400);
  await getField(page, 'ftAttrLongText').fill(longTextValue);

  const aceEditorValue = randomString(400);
  await expect(fieldLocator(page, 'ftAttrLongTextEditor').locator('.btn-ace-fullscreen.open')).toBeVisible();
  await fieldLocator(page, 'ftAttrLongTextEditor').locator('.ace_text-input').fill(aceEditorValue);

  const mdeditBtn = fieldLocator(page, 'ftAttrLongTextMarkdown').locator('.mdedit_field_ftAttrLongTextMarkdown');
  await expect(mdeditBtn).toBeVisible();
  await mdeditBtn.click();
  await page.locator('.markdown-edit .ace_text-input').fill('# Markdown title');
  await expect(
    page.locator('.md-preview .markdown-html').getByRole('heading', { name: 'Markdown title' }),
  ).toBeVisible();
  await page.locator('#dlgmodal_mdedit .btn-apply').click();

  await saveForm(page);

  await expect(getField(page, 'ftAttrShortText')).toHaveValue(shortTextValue);
  await expect(getField(page, 'ftAttrValidatedText')).toHaveValue(validatedTextValue);
  await expect(getField(page, 'ftAttrLongText')).toHaveValue(longTextValue);
  await expect(getField(page, 'ftAttrLongTextEditor')).toHaveValue(aceEditorValue);
  await expect(
    fieldLocator(page, 'ftAttrLongTextMarkdown').locator('.markdown-html').getByRole('heading', { name: 'Markdown title' }),
  ).toBeVisible();

  await deleteRow(page, key);
});

test('FT_0098', {
  annotation: { type: 'feature', description: 'Number fields' },
}, async ({ page }) => {
  const key = randomString(10);
  await createTestRow(page, key);
  await openTestRow(page, 'ftAttrCode', key);

  await getField(page, 'ftAttrInteger').fill('123');
  await saveForm(page);
  await expect(getField(page, 'ftAttrInteger')).toHaveValue('123');

  await getField(page, 'ftAttrDecimal').fill('123.45');
  await saveForm(page);
  await expect(getField(page, 'ftAttrDecimal')).toHaveValue('123.45');

  await getField(page, 'ftAttrIntegerMonetary').fill('1000');
  await saveForm(page);
  await expect(getField(page, 'ftAttrIntegerMonetary')).toHaveValue('1,000');

  await getField(page, 'ftAttrDecimalMonetary').fill('1000.10');
  await saveForm(page);
  await expect(getField(page, 'ftAttrDecimalMonetary')).toHaveValue('1,000.10');

  await getField(page, 'ftAttrIntegerPercentage').fill('10');
  await saveForm(page);
  await expect(fieldLocator(page, 'ftAttrIntegerPercentage').locator('.render').getByText('%')).toBeVisible();
  await expect(getField(page, 'ftAttrIntegerPercentage')).toHaveValue('10');

  await getField(page, 'ftAttrDecimalPercentage').fill('10.5');
  await saveForm(page);
  await expect(fieldLocator(page, 'ftAttrDecimalPercentage').locator('.render').getByText('%')).toBeVisible();
  await expect(getField(page, 'ftAttrDecimalPercentage')).toHaveValue('10.50');

  await getField(page, 'ftAttrIntegerEuro').fill('100');
  await saveForm(page);
  await expect(fieldLocator(page, 'ftAttrIntegerEuro').locator('.render-euro')).toBeVisible();
  await expect(getField(page, 'ftAttrIntegerEuro')).toHaveValue('100');

  await getField(page, 'ftAttrDecimalEuro').fill('100');
  await saveForm(page);
  await expect(fieldLocator(page, 'ftAttrDecimalEuro').locator('.render-euro')).toBeVisible();
  await expect(getField(page, 'ftAttrDecimalEuro')).toHaveValue('100.00');

  await getField(page, 'ftAttrIntegerProgressBar').fill('50');
  await saveForm(page);
  await expect(fieldLocator(page, 'ftAttrIntegerProgressBar').locator('.progress-bar')).toHaveText('50%');

  await getField(page, 'ftAttrDecimalProgressBar').fill('50.5');
  await saveForm(page);
  await expect(fieldLocator(page, 'ftAttrDecimalProgressBar').locator('.progress-bar')).toHaveText('51%');

  await useCalculator(page, 'ftAttrDecimalCalculator', ['C', '1', '+', '1', 'Ok']);
  await saveForm(page);
  await expect(getField(page, 'ftAttrDecimalCalculator')).toHaveValue('2.00');

  await saveForm(page);

  await expect(getField(page, 'ftAttrInteger')).toHaveValue('123');
  await expect(getField(page, 'ftAttrDecimal')).toHaveValue('123.45');
  await expect(getField(page, 'ftAttrIntegerMonetary')).toHaveValue('1,000');
  await expect(getField(page, 'ftAttrDecimalMonetary')).toHaveValue('1,000.10');
  await expect(fieldLocator(page, 'ftAttrIntegerPercentage').locator('.render').getByText('%')).toBeVisible();
  await expect(getField(page, 'ftAttrIntegerPercentage')).toHaveValue('10');
  await expect(fieldLocator(page, 'ftAttrDecimalPercentage').locator('.render').getByText('%')).toBeVisible();
  await expect(getField(page, 'ftAttrDecimalPercentage')).toHaveValue('10.50');
  await expect(fieldLocator(page, 'ftAttrIntegerEuro').locator('.render-euro')).toBeVisible();
  await expect(getField(page, 'ftAttrIntegerEuro')).toHaveValue('100');
  await expect(fieldLocator(page, 'ftAttrDecimalEuro').locator('.render-euro')).toBeVisible();
  await expect(getField(page, 'ftAttrDecimalEuro')).toHaveValue('100.00');
  await expect(fieldLocator(page, 'ftAttrIntegerProgressBar').locator('.progress-bar')).toHaveText('50%');
  await expect(fieldLocator(page, 'ftAttrDecimalProgressBar').locator('.progress-bar')).toHaveText('51%');
  await expect(getField(page, 'ftAttrDecimalCalculator')).toHaveValue('2.00');

  await deleteRow(page, key);
});

test('FT_0099', {
  annotation: { type: 'feature', description: 'Date/Time fields' },
}, async ({ page }) => {
  const key = randomString(10);
  await createTestRow(page, key);
  await openTestRow(page, 'ftAttrCode', key);

  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const yyyy = today.getFullYear();

  await setDateToToday(page, 'ftAttrDate');
  await saveForm(page);
  await expect(getField(page, 'ftAttrDate')).toHaveValue(`${mm}/${dd}/${yyyy}`);

  await setDateToToday(page, 'ftAttrDateToMonth');
  await saveForm(page);
  await expect(getField(page, 'ftAttrDateToMonth')).toHaveValue(`${mm}/${yyyy}`);

  await setDateToToday(page, 'ftAttrDateToYear');
  await saveForm(page);
  await expect(getField(page, 'ftAttrDateToYear')).toHaveValue(`${yyyy}`);

  await setTimeToNow(page, 'ftAttrDateTime', '.fa-th');
  await saveForm(page);
  const today2 = new Date();
  const hh = String(today2.getHours()).padStart(2, '0');
  const mi = String(today2.getMinutes()).padStart(2, '0');
  const actualDateTime = await getField(page, 'ftAttrDateTime').inputValue();
  expect(actualDateTime.startsWith(`${mm}/${dd}/${yyyy} ${hh}:${mi}:`)).toBeTruthy();

  await setTimeToNow(page, 'ftAttrDateTimeToMinute', '.fa-th');
  await saveForm(page);
  const today3 = new Date();
  const hh3 = String(today3.getHours()).padStart(2, '0');
  const mi3 = String(today3.getMinutes()).padStart(2, '0');
  await expect(getField(page, 'ftAttrDateTimeToMinute')).toHaveValue(`${mm}/${dd}/${yyyy} ${hh3}:${mi3}`);

  await setDateToToday(page, 'ftAttrDateTimeToMonth', '.fa-th');
  await saveForm(page);
  await expect(getField(page, 'ftAttrDateTimeToMonth')).toHaveValue(`${mm}/${yyyy}`);

  await setDateToToday(page, 'ftAttrDateTimeToYear', '.fa-th');
  await saveForm(page);
  await expect(getField(page, 'ftAttrDateTimeToYear')).toHaveValue(`${yyyy}`);

  await setTimeToNow(page, 'ftAttrTime');
  await saveForm(page);
  const timeCheckDate = new Date();
  const actualValue = await getField(page, 'ftAttrTime').inputValue();
  const [actualH, actualM] = actualValue.split(':').map(Number);
  const expectedMinutes = timeCheckDate.getHours() * 60 + timeCheckDate.getMinutes();
  const actualMinutes = actualH * 60 + actualM;
  expect(Math.abs(actualMinutes - expectedMinutes)).toBeLessThanOrEqual(1);

  await setTimeToNow(page, 'ftAttrTimeToMinute');
  await saveForm(page);
  const today4 = new Date();
  const hh4 = String(today4.getHours()).padStart(2, '0');
  const mi4 = String(today4.getMinutes()).padStart(2, '0');
  await expect(getField(page, 'ftAttrTimeToMinute')).toHaveValue(`${hh4}:${mi4}`);

  await setTimeToNow(page, 'ftAttrTimeToHour');
  await saveForm(page);
  const today5 = new Date();
  const hh5 = String(today5.getHours()).padStart(2, '0');
  await expect(getField(page, 'ftAttrTimeToHour')).toHaveValue(hh5);

  await deleteRow(page, key);
});

test('FT_0100', {
  annotation: { type: 'feature', description: 'Enum fields' },
}, async ({ page }) => {
  const key = randomString(10);
  await createTestRow(page, key);
  await openTestRow(page, 'ftAttrCode', key);

  await fieldLocator(page, 'ftAttrEnum').locator('span.select2').click();
  await fieldLocator(page, 'ftAttrEnum').locator('.select2-results li').first().click();
  await saveForm(page);
  await expect(getField(page, 'ftAttrEnum')).toHaveValue('A');

  await fieldLocator(page, 'ftAttrEnumMulti').locator('span.select2').click();
  await fieldLocator(page, 'ftAttrEnumMulti').locator('.select2-results li').first().click();
  await fieldLocator(page, 'ftAttrEnumMulti').locator('span.select2').click();
  await fieldLocator(page, 'ftAttrEnumMulti').locator('.select2-results li').last().click();
  await saveForm(page);
  await expect(fieldLocator(page, 'ftAttrEnumMulti').locator('.select2-selection__choice')).toHaveCount(2);
  await expect(fieldLocator(page, 'ftAttrEnumMulti').locator('.select2-selection__choice').first()).toContainText('A');
  await expect(fieldLocator(page, 'ftAttrEnumMulti').locator('.select2-selection__choice').last()).toContainText('C');

  await fieldLocator(page, 'ftAttrBoolean').locator('.form-check-input').first().click();
  await saveForm(page);
  await expect(fieldLocator(page, 'ftAttrBoolean').locator('.form-check-input').first()).toBeChecked();

  await expect(page.locator('#field_ftAttrEnumCheckboxHorizontal_empty')).toBeVisible();
  await fieldLocator(page, 'ftAttrEnumCheckboxHorizontal').locator("[value='A']").click();
  await saveForm(page);
  await expect(page.locator('#field_ftAttrEnumCheckboxHorizontal_empty')).not.toBeChecked();
  await expect(fieldLocator(page, 'ftAttrEnumCheckboxHorizontal').locator("[value='A']")).toBeChecked();

  await fieldLocator(page, 'ftAttrEnumMultiCheckboxHorizontal').locator("[value='A']").click();
  await fieldLocator(page, 'ftAttrEnumMultiCheckboxHorizontal').locator("[value='C']").click();
  await saveForm(page);
  await expect(fieldLocator(page, 'ftAttrEnumMultiCheckboxHorizontal').locator("[value='A']")).toBeChecked();
  await expect(fieldLocator(page, 'ftAttrEnumMultiCheckboxHorizontal').locator("[value='C']")).toBeChecked();

  await fieldLocator(page, 'ftAttrBooleanCheckbox').getByRole('checkbox').click();
  await saveForm(page);
  await expect(fieldLocator(page, 'ftAttrBooleanCheckbox').getByRole('checkbox')).toBeChecked();

  await fieldLocator(page, 'ftAttrEnumPillbox').locator('span.select2').click();
  await fieldLocator(page, 'ftAttrEnumPillbox').locator('.select2-search__field').fill('A');
  await expect(fieldLocator(page, 'ftAttrEnumPillbox').locator('.select2-results .select2-results__options')).toHaveCount(1);
  await expect(
    fieldLocator(page, 'ftAttrEnumPillbox').locator('.select2-results .select2-results__options').first(),
  ).toContainText('A');
  await fieldLocator(page, 'ftAttrEnumPillbox').locator('.select2-results .select2-results__options').first().click();
  await saveForm(page);
  await expect(getField(page, 'ftAttrEnumPillbox')).toHaveValue('A');

  await saveForm(page);

  await expect(getField(page, 'ftAttrEnum')).toHaveValue('A');
  await expect(fieldLocator(page, 'ftAttrEnumMulti').locator('.select2-selection__choice')).toHaveCount(2);
  await expect(fieldLocator(page, 'ftAttrEnumMulti').locator('.select2-selection__choice').first()).toContainText('A');
  await expect(fieldLocator(page, 'ftAttrEnumMulti').locator('.select2-selection__choice').last()).toContainText('C');
  await expect(fieldLocator(page, 'ftAttrBoolean').locator('.form-check-input').first()).toBeChecked();
  await expect(page.locator('#field_ftAttrEnumCheckboxHorizontal_empty')).not.toBeChecked();
  await expect(fieldLocator(page, 'ftAttrEnumCheckboxHorizontal').locator("[value='A']")).toBeChecked();
  await expect(fieldLocator(page, 'ftAttrEnumMultiCheckboxHorizontal').locator("[value='A']")).toBeChecked();
  await expect(fieldLocator(page, 'ftAttrEnumMultiCheckboxHorizontal').locator("[value='C']")).toBeChecked();
  await expect(fieldLocator(page, 'ftAttrBooleanCheckbox').getByRole('checkbox')).toBeChecked();
  await expect(getField(page, 'ftAttrEnumPillbox')).toHaveValue('A');

  await deleteRow(page, key);
});

test('FT_0101', {
  annotation: { type: 'feature', description: 'File fields' },
}, async ({ page }) => {
  const key = randomString(10);
  await createTestRow(page, key);
  await openTestRow(page, 'ftAttrCode', key);

  const docField = fieldLocator(page, 'ftAttrDocument');
  await page.locator('#file_field_ftAttrDocument').setInputFiles(getTextFile('dummyfile'));
  await saveForm(page);
  await expect(page.locator('#doc_field_ftAttrDocument')).toHaveValue('dummyfile.txt');

  await expect(docField.locator('.bopen_field_ftAttrDocument')).toBeVisible();
  await expect(docField.locator('.bpreview_field_ftAttrDocument')).toBeVisible();
  await expect(docField.locator('.bedit_field_ftAttrDocument')).toBeVisible();
  await expect(docField.locator('.bremove_field_ftAttrDocument')).toBeVisible();

  const downloadPromise = page.waitForEvent('download');
  await docField.locator('.bopen_field_ftAttrDocument').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('dummyfile.txt');

  await docField.locator('.bpreview_field_ftAttrDocument').click();
  await expect(page.locator('#dlgmodal_preview')).toBeVisible();
  await expect(page.locator('#dlgmodal_preview .modal-header')).toHaveText('dummyfile.txt');
  await page.locator('#dlgmodal_preview .btn-close').click();
  await expect(page.locator('#dlgmodal_preview')).not.toBeVisible();

  await docField.locator('.bedit_field_ftAttrDocument').click();
  await expect(page.locator('#file_field_ftAttrDocument')).toBeVisible();
  await page.locator('#file_field_ftAttrDocument').setInputFiles(getTextFile('dummyfile2'));
  await saveForm(page);
  await expect(page.locator('#doc_field_ftAttrDocument')).toHaveValue('dummyfile2.txt');

  await docField.locator('.bremove_field_ftAttrDocument').click();
  await saveForm(page);
  await expect(page.locator('#doc_field_ftAttrDocument')).toHaveValue('');
  await expect(docField.locator('.bopen_field_ftAttrDocument')).not.toBeVisible();
  await expect(docField.locator('.bpreview_field_ftAttrDocument')).not.toBeVisible();
  await expect(docField.locator('.bedit_field_ftAttrDocument')).not.toBeVisible();

  await saveForm(page);
  await expect(page.locator('#doc_field_ftAttrDocument')).toHaveValue('');
  await expect(docField.locator('.bopen_field_ftAttrDocument')).not.toBeVisible();
  await expect(docField.locator('.bpreview_field_ftAttrDocument')).not.toBeVisible();
  await expect(docField.locator('.bedit_field_ftAttrDocument')).not.toBeVisible();

  await deleteRow(page, key);
});

test('FT_0102', {
  annotation: { type: 'feature', description: 'Special fields' },
}, async ({ page }) => {
  const key = randomString(10);
  await createTestRow(page, key);
  await openTestRow(page, 'ftAttrCode', key);

  await getField(page, 'ftAttrUrl').fill('website.foo');
  await saveForm(page);
  await expect(fieldLocator(page, 'ftAttrUrl').locator('.burl_field_ftAttrUrl')).toBeVisible();
  await expect(getField(page, 'ftAttrUrl')).toHaveValue('website.foo');

  await getField(page, 'ftAttrEmail').fill('user@website.foo');
  await saveForm(page);
  await expect(fieldLocator(page, 'ftAttrEmail').locator('.bmail_field_ftAttrEmail')).toBeVisible();
  await expect(getField(page, 'ftAttrEmail')).toHaveValue('user@website.foo');

  await page.locator('#field_ftAttrColor').click();
  await expect(fieldLocator(page, 'ftAttrColor').locator('.color-picker')).toBeVisible();
  await fieldLocator(page, 'ftAttrColor').locator(".color-picker [title='#000000']").click();
  await saveForm(page);
  await expect(getField(page, 'ftAttrColor')).toHaveValue('#000000');
  await expect(fieldLocator(page, 'ftAttrColor').locator('.color-picker')).not.toBeVisible();

  const notepad = fieldLocator(page, 'ftAttrNotepadUserActivities');
  await notepad.locator('.btn-newlist').click();
  await expect(page.locator('#dlgmodal')).toBeVisible();
  await page.locator('#dlgmodal input').fill('test');
  await page.locator("#dlgmodal [data-action='OK']").click();
  await expect(notepad.locator('.checklist .title')).toContainText('test');
  await notepad.locator('.checklist-item').click();
  await page.keyboard.type('first item');
  await page.keyboard.down('Escape');
  await notepad.locator("input[type='checkbox']").click();
  await saveForm(page);
  await expect(notepad.locator('.checklist .progress-bar')).toHaveText('100%');

  await saveForm(page);
  await expect(fieldLocator(page, 'ftAttrUrl').locator('.burl_field_ftAttrUrl')).toBeVisible();
  await expect(getField(page, 'ftAttrUrl')).toHaveValue('website.foo');
  await expect(fieldLocator(page, 'ftAttrEmail').locator('.bmail_field_ftAttrEmail')).toBeVisible();
  await expect(getField(page, 'ftAttrEmail')).toHaveValue('user@website.foo');
  await expect(getField(page, 'ftAttrColor')).toHaveValue('#000000');
  await expect(fieldLocator(page, 'ftAttrColor').locator('.color-picker')).not.toBeVisible();
  await expect(notepad.locator('.checklist .title')).toContainText('test');
  await expect(notepad.locator('.checklist .progress-bar')).toHaveText('100%');

  await deleteRow(page, key);
});
