import { test, expect, Page } from '@playwright/test';
import { skeletonDismissed, loaded, login, logout, saveForm } from '../tools/helpers';

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  await login(page);
});

test.afterEach(async ({ page }) => {
  await logout(page);
});

test('Text', async ({ page }) => {

  const key = randomString(10);
  await createTestRow(page, key);
  await openTestRow(page, "FtAttributes", "ftAttrCode", key);

  // Short text
  let shortTextValue = randomString(10);
  await getField(page, "ftAttrShortText").fill(shortTextValue);

  // Validated text
  let validatedTextValue = "abc";
  await getField(page, "ftAttrValidatedText").fill(validatedTextValue);

  // Long text
  let longTextValue = randomString(400);
  await getField(page, "ftAttrLongText").fill(longTextValue);

  // Long text ace editor
  let aceEditorValue = randomString(400);
  await expect(page.locator("[data-field='ftAttrLongTextEditor'] .btn-ace-fullscreen.open")).toBeVisible();
  await page.locator("[data-field='ftAttrLongTextEditor'] .ace_text-input").fill(aceEditorValue);

  // Long text Markdown
  let mdeditBtn = page.locator("[data-field='ftAttrLongTextMarkdown'] .mdedit_field_ftAttrLongTextMarkdown");
  await expect(mdeditBtn).toBeVisible();
  await mdeditBtn.click();
  await page.locator(".markdown-edit .ace_text-input").fill("# Markdown title");
  await expect(page.locator(".md-preview .markdown-html").getByRole('heading', { name: 'Markdown title' })).toBeVisible();
  await page.locator("#dlgmodal_mdedit .btn-apply").click();

  // Save once at the end
  await saveForm(page);

  // Assert after saveForm
  await expect(getField(page, "ftAttrShortText")).toHaveValue(shortTextValue);
  await expect(getField(page, "ftAttrValidatedText")).toHaveValue(validatedTextValue);
  await expect(getField(page, "ftAttrLongText")).toHaveValue(longTextValue);
  await expect(getField(page, "ftAttrLongTextEditor")).toHaveValue(aceEditorValue);
  await expect(page.locator("[data-field='ftAttrLongTextMarkdown'] .markdown-html").getByRole('heading', { name: 'Markdown title' })).toBeVisible();

  await deleteRow(page, key);

});

test('Numbers', async ({ page }) => {

  const key = randomString(10);
  await createTestRow(page, key);
  await openTestRow(page, "FtAttributes", "ftAttrCode", key);

  // Integer
  await getField(page, "ftAttrInteger").fill("123");
  await saveForm(page);
  await expect(getField(page, "ftAttrInteger")).toHaveValue("123");

  // Decimal
  await getField(page, "ftAttrDecimal").fill("123.45");
  await saveForm(page);
  await expect(getField(page, "ftAttrDecimal")).toHaveValue("123.45");

  // Integer monetary rendering
  await getField(page, "ftAttrIntegerMonetary").fill("1000");
  await saveForm(page);
  await expect(getField(page, "ftAttrIntegerMonetary")).toHaveValue("1,000");

  // Decimal monetary rendering
  await getField(page, "ftAttrDecimalMonetary").fill("1000.10");
  await saveForm(page);
  await expect(getField(page, "ftAttrDecimalMonetary")).toHaveValue("1,000.10");

  // Integer percentage
  await getField(page, "ftAttrIntegerPercentage").fill("10");
  await saveForm(page);
  await expect(page.locator("[data-field='ftAttrIntegerPercentage'] .render").getByText("%")).toBeVisible();
  await expect(getField(page, "ftAttrIntegerPercentage")).toHaveValue("10");

  // Decimal percentage
  await getField(page, "ftAttrDecimalPercentage").fill("10.5");
  await saveForm(page);
  await expect(page.locator("[data-field='ftAttrDecimalPercentage'] .render").getByText("%")).toBeVisible();
  await expect(getField(page, "ftAttrDecimalPercentage")).toHaveValue("10.50");

  // Integer euro
  await getField(page, "ftAttrIntegerEuro").fill("100");
  await saveForm(page);
  await expect(page.locator("[data-field='ftAttrIntegerEuro'] .render-euro")).toBeVisible();
  await expect(getField(page, "ftAttrIntegerEuro")).toHaveValue("100");

  // Decimal euro
  await getField(page, "ftAttrDecimalEuro").fill("100");
  await saveForm(page);
  await expect(page.locator("[data-field='ftAttrDecimalEuro'] .render-euro")).toBeVisible();
  await expect(getField(page, "ftAttrDecimalEuro")).toHaveValue("100.00");

  // Integer progress bar
  await getField(page, "ftAttrIntegerProgressBar").fill("50");
  await saveForm(page);
  await expect(page.locator("[data-field='ftAttrIntegerProgressBar'] .progress-bar")).toHaveText("50%");

  // Decimal progress bar
  await getField(page, "ftAttrDecimalProgressBar").fill("50.5");
  await saveForm(page);
  await expect(page.locator("[data-field='ftAttrDecimalProgressBar'] .progress-bar")).toHaveText("51%");

  // Decimal calculator
  await getField(page, "ftAttrDecimalCalculator").click();
  await expect(page.locator("[data-field='ftAttrDecimalCalculator'] .calculator")).toBeVisible();
  await page.locator("[data-field='ftAttrDecimalCalculator'] .calculator button").getByText("1").click();
  await page.locator("[data-field='ftAttrDecimalCalculator'] .calculator button").getByText("+").click();
  await page.locator("[data-field='ftAttrDecimalCalculator'] .calculator button").getByText("1").click();
  await page.locator("[data-field='ftAttrDecimalCalculator'] .calculator button").getByText("Ok").click();
  // Wait for calculator to close and value to be set
  await expect(page.locator("[data-field='ftAttrDecimalCalculator'] .calculator")).not.toBeVisible();
  await saveForm(page);
  await expect(getField(page, "ftAttrDecimalCalculator")).toHaveValue("2.00");

  // Save once at the end
  await saveForm(page);

  // Assert after saveForm
  await expect(getField(page, "ftAttrInteger")).toHaveValue("123");
  await expect(getField(page, "ftAttrDecimal")).toHaveValue("123.45");
  await expect(getField(page, "ftAttrIntegerMonetary")).toHaveValue("1,000");
  await expect(getField(page, "ftAttrDecimalMonetary")).toHaveValue("1,000.10");
  await expect(page.locator("[data-field='ftAttrIntegerPercentage'] .render").getByText("%")).toBeVisible();
  await expect(getField(page, "ftAttrIntegerPercentage")).toHaveValue("10");
  await expect(page.locator("[data-field='ftAttrDecimalPercentage'] .render").getByText("%")).toBeVisible();
  await expect(getField(page, "ftAttrDecimalPercentage")).toHaveValue("10.50");
  await expect(page.locator("[data-field='ftAttrIntegerEuro'] .render-euro")).toBeVisible();
  await expect(getField(page, "ftAttrIntegerEuro")).toHaveValue("100");
  await expect(page.locator("[data-field='ftAttrDecimalEuro'] .render-euro")).toBeVisible();
  await expect(getField(page, "ftAttrDecimalEuro")).toHaveValue("100.00");
  await expect(page.locator("[data-field='ftAttrIntegerProgressBar'] .progress-bar")).toHaveText("50%");
  await expect(page.locator("[data-field='ftAttrDecimalProgressBar'] .progress-bar")).toHaveText("51%");
  await expect(getField(page, "ftAttrDecimalCalculator")).toHaveValue("2.00");

  await deleteRow(page, key);
});

test('Dates', async ({ page }) => {

  const key = randomString(10);
  await createTestRow(page, key);
  await openTestRow(page, "FtAttributes", "ftAttrCode", key);

  let today = new Date();
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let dd = String(today.getDate()).padStart(2, '0');
  let yyyy = today.getFullYear();
  let hh, mi, ss;

  // Date
  await page.locator("[data-field='ftAttrDate'] .fa-calendar-alt").click();
  await expect(page.locator("[data-field='ftAttrDate'] .flatpickr-calendar")).toBeVisible();
  await page.locator("[data-field='ftAttrDate'] .flatpickr-calendar .flatpickr-buttons [data-action='TODAY']").click();
  await saveForm(page);
  await expect(getField(page, "ftAttrDate")).toHaveValue(`${mm}/${dd}/${yyyy}`);

  // Date (to month)
  await page.locator("[data-field='ftAttrDateToMonth'] .fa-calendar-alt").click();
  await expect(page.locator("[data-field='ftAttrDateToMonth'] .flatpickr-calendar")).toBeVisible();
  await page.locator("[data-field='ftAttrDateToMonth'] .flatpickr-calendar .flatpickr-buttons [data-action='TODAY']").click();
  await saveForm(page);
  await expect(getField(page, "ftAttrDateToMonth")).toHaveValue(`${mm}/${yyyy}`);

  // Date (to year)
  await page.locator("[data-field='ftAttrDateToYear'] .fa-calendar-alt").click();
  await expect(page.locator("[data-field='ftAttrDateToYear'] .flatpickr-calendar")).toBeVisible();
  await page.locator("[data-field='ftAttrDateToYear'] .flatpickr-calendar .flatpickr-buttons [data-action='TODAY']").click();
  await saveForm(page);
  await expect(getField(page, "ftAttrDateToYear")).toHaveValue(`${yyyy}`);

  // Date time
  await page.locator("[data-field='ftAttrDateTime'] .fa-th").click();
  await expect(page.locator("[data-field='ftAttrDateTime'] .flatpickr-calendar")).toBeVisible();
  await page.locator("[data-field='ftAttrDateTime'] .flatpickr-calendar .flatpickr-buttons [data-action='TODAY']").click();
  await saveForm(page);
  today = new Date();
  hh = String(today.getHours()).padStart(2, '0');
  mi = String(today.getMinutes()).padStart(2, '0');
  ss = String(today.getSeconds()).padStart(2, '0');
  await expect(getField(page, "ftAttrDateTime")).toHaveValue(`${mm}/${dd}/${yyyy} ${hh}:${mi}:${ss}`);

  // Date time (to minute)
  await page.locator("[data-field='ftAttrDateTimeToMinute'] .fa-th").click();
  await expect(page.locator("[data-field='ftAttrDateTimeToMinute'] .flatpickr-calendar")).toBeVisible();
  await page.locator("[data-field='ftAttrDateTimeToMinute'] .flatpickr-calendar .flatpickr-buttons [data-action='TODAY']").click();
  await saveForm(page);
  today = new Date();
  hh = String(today.getHours()).padStart(2, '0');
  mi = String(today.getMinutes()).padStart(2, '0');
  await expect(getField(page, "ftAttrDateTimeToMinute")).toHaveValue(`${mm}/${dd}/${yyyy} ${hh}:${mi}`);

  // Date time (to month)
  await page.locator("[data-field='ftAttrDateTimeToMonth'] .fa-th").click();
  await expect(page.locator("[data-field='ftAttrDateTimeToMonth'] .flatpickr-calendar")).toBeVisible();
  await page.locator("[data-field='ftAttrDateTimeToMonth'] .flatpickr-calendar .flatpickr-buttons [data-action='TODAY']").click();
  await saveForm(page);
  await expect(getField(page, "ftAttrDateTimeToMonth")).toHaveValue(`${mm}/${yyyy}`);

  // Date time (to year)
  await page.locator("[data-field='ftAttrDateTimeToYear'] .fa-th").click();
  await expect(page.locator("[data-field='ftAttrDateTimeToYear'] .flatpickr-calendar")).toBeVisible();
  await page.locator("[data-field='ftAttrDateTimeToYear'] .flatpickr-calendar .flatpickr-buttons [data-action='TODAY']").click();
  await saveForm(page);
  await expect(getField(page, "ftAttrDateTimeToYear")).toHaveValue(`${yyyy}`);

  // Time
  await page.locator("[data-field='ftAttrTime'] .fa-clock").click();
  await expect(page.locator("[data-field='ftAttrTime'] .flatpickr-calendar")).toBeVisible();
  await page.locator("[data-field='ftAttrTime'] .flatpickr-calendar .flatpickr-buttons [data-action='NOW']").click();
  await saveForm(page);
  // Tolerate ±1 minute difference
  const expectedTime = `${hh}:${mi}:${ss}`;
  const actualValue = await getField(page, "ftAttrTime").inputValue();
  const [expectedH, expectedM] = expectedTime.split(':').map(Number);
  const [actualH, actualM] = actualValue.split(':').map(Number);
  const expectedMinutes = expectedH * 60 + expectedM;
  const actualMinutes = actualH * 60 + actualM;
  const diff = Math.abs(actualMinutes - expectedMinutes);
  expect(diff).toBeLessThanOrEqual(1);

  // Time (to minute)
  await page.locator("[data-field='ftAttrTimeToMinute'] .fa-clock").click();
  await expect(page.locator("[data-field='ftAttrTimeToMinute'] .flatpickr-calendar")).toBeVisible();
  await page.locator("[data-field='ftAttrTimeToMinute'] .flatpickr-calendar .flatpickr-buttons [data-action='NOW']").click();
  await saveForm(page);
  today = new Date();
  hh = String(today.getHours()).padStart(2, '0');
  mi = String(today.getMinutes()).padStart(2, '0');
  await expect(getField(page, "ftAttrTimeToMinute")).toHaveValue(`${hh}:${mi}`);

  // Time (to hour)
  await page.locator("[data-field='ftAttrTimeToHour'] .fa-clock").click();
  await expect(page.locator("[data-field='ftAttrTimeToHour'] .flatpickr-calendar")).toBeVisible();
  await page.locator("[data-field='ftAttrTimeToHour'] .flatpickr-calendar .flatpickr-buttons [data-action='NOW']").click();
  await saveForm(page);
  await expect(getField(page, "ftAttrTimeToHour")).toHaveValue(`${hh}`);

  await deleteRow(page, key);
});

test('Lists', async ({ page }) => {

  const key = randomString(10);
  await createTestRow(page, key);
  await openTestRow(page, "FtAttributes", "ftAttrCode", key);

  // Enum
  await page.locator("[data-field='ftAttrEnum'] span.select2").click();
  await page.locator("[data-field='ftAttrEnum'] .select2-results li").first().click();
  await saveForm(page);
  await expect(getField(page, "ftAttrEnum")).toHaveValue("A");

  // Enum multi
  await page.locator("[data-field='ftAttrEnumMulti'] span.select2").click();
  await page.locator("[data-field='ftAttrEnumMulti'] .select2-results li").first().click();
  await page.locator("[data-field='ftAttrEnumMulti'] span.select2").click();
  await page.locator("[data-field='ftAttrEnumMulti'] .select2-results li").last().click();
  await saveForm(page);
  await expect(page.locator("[data-field='ftAttrEnumMulti'] .select2-selection__choice")).toHaveCount(2);
  await expect(page.locator("[data-field='ftAttrEnumMulti'] .select2-selection__choice").first()).toContainText("A");
  await expect(page.locator("[data-field='ftAttrEnumMulti'] .select2-selection__choice").last()).toContainText("C");

  // Boolean
  await page.locator("[data-field='ftAttrBoolean'] .form-check-input").first().click();
  await saveForm(page);
  await expect(page.locator("[data-field='ftAttrBoolean'] .form-check-input").first()).toBeChecked();

  // Checkbox horizontal
  await expect(page.locator("#field_ftAttrEnumCheckboxHorizontal_empty")).toBeVisible();
  await page.locator("[data-field='ftAttrEnumCheckboxHorizontal'] [value='A']").click();
  await saveForm(page);
  await expect(page.locator("#field_ftAttrEnumCheckboxHorizontal_empty")).not.toBeChecked();
  await expect(page.locator("[data-field='ftAttrEnumCheckboxHorizontal'] [value='A']")).toBeChecked();

  // Multi enum horizontal checkbox
  await page.locator("[data-field='ftAttrEnumMultiCheckboxHorizontal'] [value='A']").click();
  await page.locator("[data-field='ftAttrEnumMultiCheckboxHorizontal'] [value='C']").click();
  await saveForm(page);
  await expect(page.locator("[data-field='ftAttrEnumMultiCheckboxHorizontal'] [value='A']")).toBeChecked();
  await expect(page.locator("[data-field='ftAttrEnumMultiCheckboxHorizontal'] [value='C']")).toBeChecked();

  // Boolean checkbox
  await page.locator("[data-field='ftAttrBooleanCheckbox']").getByRole('checkbox').click();
  await saveForm(page);
  await expect(page.locator("[data-field='ftAttrBooleanCheckbox']").getByRole('checkbox')).toBeChecked();
  
  // Enum pillbox
  await page.locator("[data-field='ftAttrEnumPillbox'] span.select2").click();
  await page.locator("[data-field='ftAttrEnumPillbox'] .select2-search__field").fill("A");
  await expect(page.locator("[data-field='ftAttrEnumPillbox'] .select2-results .select2-results__options")).toHaveCount(1);
  await expect(page.locator("[data-field='ftAttrEnumPillbox'] .select2-results .select2-results__options").first()).toContainText("A");
  await page.locator("[data-field='ftAttrEnumPillbox'] .select2-results .select2-results__options").first().click();
  await saveForm(page);
  await expect(getField(page, "ftAttrEnumPillbox")).toHaveValue("A");

  // Save once at the end
  await saveForm(page);

  // Assert after saveForm
  await expect(getField(page, "ftAttrEnum")).toHaveValue("A");
  await expect(page.locator("[data-field='ftAttrEnumMulti'] .select2-selection__choice")).toHaveCount(2);
  await expect(page.locator("[data-field='ftAttrEnumMulti'] .select2-selection__choice").first()).toContainText("A");
  await expect(page.locator("[data-field='ftAttrEnumMulti'] .select2-selection__choice").last()).toContainText("C");
  await expect(page.locator("[data-field='ftAttrBoolean'] .form-check-input").first()).toBeChecked();
  await expect(page.locator("#field_ftAttrEnumCheckboxHorizontal_empty")).not.toBeChecked();
  await expect(page.locator("[data-field='ftAttrEnumCheckboxHorizontal'] [value='A']")).toBeChecked();
  await expect(page.locator("[data-field='ftAttrEnumMultiCheckboxHorizontal'] [value='A']")).toBeChecked();
  await expect(page.locator("[data-field='ftAttrEnumMultiCheckboxHorizontal'] [value='C']")).toBeChecked();
  await expect(page.locator("[data-field='ftAttrBooleanCheckbox']").getByRole('checkbox')).toBeChecked();
  await expect(getField(page, "ftAttrEnumPillbox")).toHaveValue("A");

  await deleteRow(page, key);
});

test('Files', async ({ page }) => {

  const key = randomString(10);
  await createTestRow(page, key);
  await openTestRow(page, "FtAttributes", "ftAttrCode", key);

  // Upload file
  await page.locator("#file_field_ftAttrDocument").setInputFiles(getTextFile("dummyfile"));
  await saveForm(page);
  await expect(page.locator('#doc_field_ftAttrDocument')).toHaveValue("dummyfile.txt");

  // Expect buttons
  await expect(page.locator("[data-field='ftAttrDocument'] .bopen_field_ftAttrDocument")).toBeVisible(); // download
  await expect(page.locator("[data-field='ftAttrDocument'] .bpreview_field_ftAttrDocument")).toBeVisible();
  await expect(page.locator("[data-field='ftAttrDocument'] .bedit_field_ftAttrDocument")).toBeVisible();
  await expect(page.locator("[data-field='ftAttrDocument'] .bremove_field_ftAttrDocument")).toBeVisible();

  // Download document
  const downloadPromise = page.waitForEvent('download');
  await page.locator("[data-field='ftAttrDocument'] .bopen_field_ftAttrDocument").click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("dummyfile.txt");

  // Preview document
  await page.locator("[data-field='ftAttrDocument'] .bpreview_field_ftAttrDocument").click();
  await expect(page.locator("#dlgmodal_preview")).toBeVisible();
  await expect(page.locator("#dlgmodal_preview .modal-header")).toHaveText("dummyfile.txt");
  await page.locator("#dlgmodal_preview .btn-close").click();
  await expect(page.locator("#dlgmodal_preview")).not.toBeVisible();

  // Edit document
  await page.locator("[data-field='ftAttrDocument'] .bedit_field_ftAttrDocument").click();
  await expect(page.locator("#file_field_ftAttrDocument")).toBeVisible();
  await page.locator("#file_field_ftAttrDocument").setInputFiles(getTextFile("dummyfile2"));
  await saveForm(page);
  await expect(page.locator('#doc_field_ftAttrDocument')).toHaveValue("dummyfile2.txt");

  // Remove document
  await page.locator("[data-field='ftAttrDocument'] .bremove_field_ftAttrDocument").click();
  await saveForm(page);
  await expect(page.locator('#doc_field_ftAttrDocument')).toHaveValue("");
  await expect(page.locator('[data-field="ftAttrDocument"] .bopen_field_ftAttrDocument')).not.toBeVisible();
  await expect(page.locator('[data-field="ftAttrDocument"] .bpreview_field_ftAttrDocument')).not.toBeVisible();
  await expect(page.locator('[data-field="ftAttrDocument"] .bedit_field_ftAttrDocument')).not.toBeVisible();

  // Save once at the end
  await saveForm(page);

  // Assert after saveForm
  await expect(page.locator('#doc_field_ftAttrDocument')).toHaveValue("");
  await expect(page.locator('[data-field="ftAttrDocument"] .bopen_field_ftAttrDocument')).not.toBeVisible();
  await expect(page.locator('[data-field="ftAttrDocument"] .bpreview_field_ftAttrDocument')).not.toBeVisible();
  await expect(page.locator('[data-field="ftAttrDocument"] .bedit_field_ftAttrDocument')).not.toBeVisible();

  await deleteRow(page, key);
});

test('Special fields', async ({ page }) => {

  const key = randomString(10);
  await createTestRow(page, key);
  await openTestRow(page, "FtAttributes", "ftAttrCode", key);
  
  // URL
  await getField(page, "ftAttrUrl").fill("website.foo");
  await saveForm(page);
  await expect(page.locator("[data-field='ftAttrUrl'] .burl_field_ftAttrUrl")).toBeVisible();
  await expect(getField(page, "ftAttrUrl")).toHaveValue("website.foo");

  // Email
  await getField(page, "ftAttrEmail").fill("user@website.foo");
  await saveForm(page);
  await expect(page.locator("[data-field='ftAttrEmail'] .bmail_field_ftAttrEmail")).toBeVisible();
  await expect(getField(page, "ftAttrEmail")).toHaveValue("user@website.foo");
  
  // Color
  await page.locator("#field_ftAttrColor").click();
  await expect(page.locator("[data-field='ftAttrColor'] .color-picker")).toBeVisible();
  await page.locator("[data-field='ftAttrColor'] .color-picker [title='#000000']").click();
  await saveForm(page);
  await expect(getField(page, "ftAttrColor")).toHaveValue("#000000");
  await expect(page.locator("[data-field='ftAttrColor'] .color-picker")).not.toBeVisible();

  // Notepad user activities
  const notepad = page.locator("[data-field='ftAttrNotepadUserActivities']");
  await notepad.locator(".btn-newlist").click();
  expect(page.locator("#dlgmodal")).toBeVisible();
  await page.locator("#dlgmodal input").fill("test");
  await page.locator("#dlgmodal [data-action='OK']").click();
  await expect(notepad.locator(".checklist .title")).toContainText("test");
  await notepad.locator(".checklist-item").click();
  await page.keyboard.type("first item");
  await page.keyboard.down('Escape');
  await notepad.locator("input[type='checkbox']").click();
  await saveForm(page);
  await expect(notepad.locator(".checklist .progress-bar")).toHaveText("100%");

  // Save once at the end
  await saveForm(page);

  // Assert after saveForm
  await expect(page.locator("[data-field='ftAttrUrl'] .burl_field_ftAttrUrl")).toBeVisible();
  await expect(getField(page, "ftAttrUrl")).toHaveValue("website.foo");
  await expect(page.locator("[data-field='ftAttrEmail'] .bmail_field_ftAttrEmail")).toBeVisible();
  await expect(getField(page, "ftAttrEmail")).toHaveValue("user@website.foo");
  await expect(getField(page, "ftAttrColor")).toHaveValue("#000000");
  await expect(page.locator("[data-field='ftAttrColor'] .color-picker")).not.toBeVisible();
  await expect(notepad.locator(".checklist .title")).toContainText("test");
  await expect(notepad.locator(".checklist .progress-bar")).toHaveText("100%");

  await deleteRow(page, key);
});

async function openTestRow(page: Page, object: string, field: string, key: string) {
  // Wait for list to load
  await skeletonDismissed(page);
  await expect(page.locator("#list_FtAttributes_the_ajax_FtAttributes")).toBeVisible()
  // Wait for the specific row to be visible before clicking
  await page.locator(`[data-list='list_${object}_the_ajax_${object}'] [data-field='${field}']`).getByText(`${key}`).click();
  // Wait for form to load
  await skeletonDismissed(page);
  await loaded(page);
}

function getField(page: Page, name: string) {
  return page.locator(`#field_${name}`);
}

function randomString(length: number) {
  return Math.random().toString(36).substring(2, length);
}

function getTextFile(name: string) {
  return {
    name: `${name}.txt`,
    mimeType: 'text/plain',
    buffer: Buffer.from('this is test')
  };
}

async function createTestRow(page: Page, code: string) {
  if (!(await page.locator("[data-obj='FtAttributes']").isVisible())) {
    await page.locator("[data-domain='FtDomain']").click();
  }
  await page.locator("[data-obj='FtAttributes']").click();
  await skeletonDismissed(page);
  await page.locator(".btn-create").click();
  await skeletonDismissed(page);
  await page.locator("#field_ftAttrCode").fill(code);
  await page.locator("[data-action='saveclose']").click();
  await loaded(page);
  await expect(page.locator("#list_FtAttributes_the_ajax_FtAttributes")).toBeVisible()
}

async function deleteRow(page: Page, code: string) {
  if (!(await page.locator("[data-obj='FtAttributes']").isVisible())) {
    await page.locator("[data-domain='FtDomain']").click();
    await page.waitForLoadState();
  } 
  await page.locator("[data-obj='FtAttributes']").click();
  await skeletonDismissed(page);
  const row = page.locator("tr").filter({ hasText: code });
  await row.locator(".actions .dropdown").click();
  await row.locator(".actions .dropdown").locator("[data-action='delete']").click();
  await loaded(page);
  await page.locator("#dlgmodal .modal-footer [data-action='OK']").click();
  await skeletonDismissed(page);
}