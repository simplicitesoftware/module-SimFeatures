import { test, expect } from '@playwright/test';
import {
  login,
  logout,
  openList,
  randomString,
  skeletonDismissed,
  loaded,
  saveForm,
} from '../tools/helpers';

const DOMAIN = 'FtDomain';
const O2M_OBJECT = 'FtRelationshipO2m';
const M2M_OBJECT = 'FtRelationshipM2m';
const M2M_CHILD_OBJECT = 'FtM2mChild';

const O2M_FORM = '#form_FtRelationshipO2m_the_ajax_FtRelationshipO2m_0';
const O2M_CHILD_PANEL = '#list_FtO2mChild_panel_ajax_FtO2mChild_ftO2mcO2mId';
const O2M_CHILD_LIST_DATA = 'list_FtO2mChild_panel_ajax_FtO2mChild_ftO2mcO2mId';
const M2M_CHILD_FORM = '#form_FtM2mChild_the_ajax_FtM2mChild_0';
const M2M_ASSOCIATE_BTN = "button[data-action='associate-FtRelationshipM2m-ftM2mId-FtM2mChild-ftM2mcId']";
const M2M_CHILD_REF_LIST = '#list_FtM2mChild_ref_ajax_FtM2mChild';
const M2M_PANEL_LIST_DATA = 'list_FtM2m_panel_ajax_FtM2m_ftM2mId';

test.beforeEach(async ({ page }) => {
  await login(page);
});

test.afterEach(async ({ page }) => {
  await logout(page);
});

test('FT_0104', {
  annotation: {
    type: 'feature',
    description:
      'Panel links: creates a parent form, saves it, then adds a child to the linked panel and verifies the child row appears.',
  },
}, async ({ page }) => {
  await openList(page, DOMAIN, O2M_OBJECT);

  await page.locator("[data-action='create']").click();
  await skeletonDismissed(page);
  await expect(page.locator(O2M_FORM)).toBeVisible();
  await saveForm(page);

  const o2mCode = await page.locator('#field_ftO2mCode').inputValue();

  const childPanel = page.locator(O2M_CHILD_PANEL);
  await expect(childPanel).toBeVisible();
  await childPanel.locator("[data-action='create']").click();
  await skeletonDismissed(page);

  await expect(page.locator('#field_ftO2mcO2mId__ftO2mCode')).toContainText(o2mCode);
  const childCode = randomString(10);
  await page.locator('#field_ftO2mcCode').fill(childCode);
  await page.locator("[data-action='saveclose']").click();
  await skeletonDismissed(page);

  await expect(page.locator('.object-FtRelationshipO2m')).toBeVisible();
  const table = page.locator(`[data-list='${O2M_CHILD_LIST_DATA}']`);
  await expect(table.locator("[data-field='ftO2mcCode']").first()).toContainText(childCode);
});

test('FT_0107', {
  annotation: {
    type: 'feature',
    description: 'M2M Association: creates two child items, then a parent item, associates the children via the association panel, and verifies both rows appear in the panel.',
  },
}, async ({ page }) => {
  await openList(page, DOMAIN, M2M_CHILD_OBJECT);

  await page.locator("[data-action='create']").click();
  await skeletonDismissed(page);
  await page.locator('#field_ftM2mcCode').fill(randomString(10));
  await page.locator("[data-action='saveoptions']").click();
  await page.locator("[data-name='savenew']").click();
  await skeletonDismissed(page);
  await loaded(page);
  await expect(page.locator(M2M_CHILD_FORM)).toBeVisible();
  await page.locator('#field_ftM2mcCode').fill(randomString(10));
  await page.locator("[data-action='saveclose']").click();

  await openList(page, DOMAIN, M2M_OBJECT);
  await page.locator("[data-action='create']").click();
  await skeletonDismissed(page);
  await page.locator('#field_ftM2mCode').fill(randomString(10));
  await page.locator("[data-action='save']").click();

  await page.locator(M2M_ASSOCIATE_BTN).click();
  const selectPicker = page.locator(M2M_CHILD_REF_LIST);
  await expect(selectPicker).toBeVisible();
  await selectPicker.locator("[data-action='selrows']").click();

  const selectedObjects = page.locator('.select-object-items');
  await expect(selectedObjects.locator('.select-object-item')).toHaveCount(2);
  await page.locator("[data-action='multiselect']").click();

  await expect(page.locator(`[data-list='${M2M_PANEL_LIST_DATA}'] tr`)).toHaveCount(2);
});
