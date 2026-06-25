import { test, expect, Page } from '@playwright/test';
import {
  login,
  logout,
  skeletonDismissed,
  loaded,
} from '../tools/helpers';

const OBJECT = 'FtStates';
const LIST_SELECTOR = `#list_${OBJECT}_the_ajax_${OBJECT}`;
const FORM_SELECTOR = '.objform.object-FtStates';
const HISTORIC_LIST = '#list_FtStatesHistoric_panel_ajax_FtStatesHistoric_row_ref_id';
const TRAY_SELECTOR = '.tray.object-FtStates';
const TRAY_STATES = ['INITIAL', 'A', 'OPTIONAL', 'B', 'EXCEPTION', 'FINAL'] as const;

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await login(page);
});

test.afterEach(async ({ page }) => {
  const confirmDialog = page.locator('#dlgmodal').filter({ has: page.locator('[data-action="YES"]') });
  if (await confirmDialog.isVisible()) {
    await confirmDialog.locator('[data-action="NO"]').click();
  }
  const contentDialog = page.locator('#dlgmodal.js-content-unload.show');
  if (await contentDialog.isVisible()) {
    await page.keyboard.press('Escape');
  }
  await logout(page);
});

async function openStatesShowAll(page: Page) {
  await expect(page.locator('ul.main-menu')).toBeVisible();
  const showAll = page.locator(
    `[data-obj="${OBJECT}"][data-path="FtDomain.${OBJECT}.all"]`,
  );
  if (!(await showAll.isVisible())) {
    await page
      .locator(`[data-obj="${OBJECT}"][data-path="FtDomain.${OBJECT}"].js-sub-menu-toggle`)
      .click();
  }
  await showAll.click();
  await skeletonDismissed(page);
  await expect(page.locator(LIST_SELECTOR)).toBeVisible();
}

async function createStateItem(page: Page) {
  await page.locator('.list-actionbar [data-action="create"]').click();
  await skeletonDismissed(page);
  await expect(page.locator(FORM_SELECTOR)).toBeVisible();

  await expect(page.locator('#field_ftStState')).toHaveValue('INITIAL');
  await expectNavbarCurrent(page, 'INITIAL');

  const order = String(Math.floor(Math.random() * 900000) + 100000);
  await page.locator('#field_ftStOrder').fill(order);
  await page.locator(`${FORM_SELECTOR} [data-action="save"]`).click();
  await expect(page.locator('.alert-danger')).not.toBeVisible();
  await loaded(page);
  await skeletonDismissed(page);

  const code = await page.locator('#field_ftStCode').inputValue();
  expect(code).toMatch(/^S-\d+$/);
  return code;
}

async function confirmStateAction(page: Page) {
  const dialog = page.locator('#dlgmodal').filter({ has: page.locator('[data-action="YES"]') });
  await expect(dialog).toBeVisible();
  await dialog.locator('[data-action="YES"]').click();
  await loaded(page);
  await skeletonDismissed(page);
  await expect(dialog).not.toBeVisible();
}

async function executeTransition(page: Page, action: string) {
  await expect(page.locator(`[data-action="${action}"]`)).toBeVisible();
  await page.locator(`[data-action="${action}"]`).click();
  await confirmStateAction(page);
}

async function expectNavbarCurrent(page: Page, state: string) {
  await expect(page.locator(`.states-navbar li.current[data-state="${state}"]`)).toBeVisible();
}

async function expectNavbarVisited(page: Page, state: string) {
  await expect(page.locator(`.states-navbar li.visited[data-state="${state}"]`).first()).toBeVisible();
}

async function expectNavbarNotCurrent(page: Page, state: string) {
  await expect(page.locator(`.states-navbar li.current[data-state="${state}"]`)).not.toBeVisible();
}

async function expectAvailableTransitions(page: Page, actions: string[]) {
  for (const action of actions) {
    await expect(page.locator(`[data-action="${action}"]`)).toBeVisible();
  }
}

function getHistoricPanel(page: Page) {
  return page.locator(HISTORIC_LIST);
}

async function expectHistoricRowCount(page: Page, count: number) {
  const panel = getHistoricPanel(page);
  await panel.scrollIntoViewIfNeeded();
  await expect(panel.locator('tr[data-rowid]')).toHaveCount(count);
}

async function expectHistoricRowState(page: Page, rowIndex: number, stateLabel: string) {
  const row = getHistoricPanel(page).locator('tr[data-rowid]').nth(rowIndex);
  await expect(row.locator('[data-field="ftStState"]')).toContainText(stateLabel);
}

async function deleteStateItemFromList(page: Page, code: string) {
  const row = page.locator(`${LIST_SELECTOR} tr`).filter({ hasText: code });
  await row.locator('.btn-plus').click();
  await row.locator('[data-action="delete"]').click();
  await page.locator('#dlgmodal .modal-footer [data-action="OK"]').click();
  await loaded(page);
  await skeletonDismissed(page);
}

async function deleteStateItem(page: Page, code: string) {
  const form = page.locator(FORM_SELECTOR);
  if (await form.isVisible()) {
    const closeButton = page.locator(`${FORM_SELECTOR} [data-action="close"]`);
    if (await closeButton.isVisible()) {
      await closeButton.click();
      await skeletonDismissed(page);
    }
  }

  await deleteStateItemFromList(page, code);
}

async function openStatesTrays(page: Page) {
  await expect(page.locator('ul.main-menu')).toBeVisible();
  const traysLink = page.locator(`[data-path="FtDomain.${OBJECT}.tray"]`);
  const menuToggle = page.locator(
    `[data-obj="${OBJECT}"][data-path="FtDomain.${OBJECT}"].js-sub-menu-toggle`,
  );
  if (!(await traysLink.isVisible())) {
    await menuToggle.click();
  }
  await traysLink.click();
  await skeletonDismissed(page);
  await expect(page.locator(TRAY_SELECTOR)).toBeVisible();
  await dismissSidebarOverlay(page);
}

async function dismissSidebarOverlay(page: Page) {
  await page.evaluate(() => {
    const menu = document.querySelector('#menu');
    if (menu instanceof HTMLElement) {
      menu.style.pointerEvents = 'none';
    }
  });
}

async function restoreSidebar(page: Page) {
  await page.evaluate(() => {
    const menu = document.querySelector('#menu');
    if (menu instanceof HTMLElement) {
      menu.style.pointerEvents = '';
      menu.style.visibility = '';
    }
  });
}

function getTrayColumn(page: Page, state: string) {
  return page.locator(`.tray-col[data-name="${state}"]`);
}

function getTrayItem(page: Page, state: string, code: string) {
  return getTrayColumn(page, state).locator('.tray-item').filter({ hasText: code });
}

async function expectTrayItemInColumn(page: Page, code: string, state: string) {
  await expect(getTrayItem(page, state, code)).toHaveCount(1);
}

async function dragTrayItem(page: Page, code: string, fromState: string, toState: string) {
  const item = getTrayItem(page, fromState, code).first();
  const target = getTrayColumn(page, toState).locator('.tray-body');
  await item.scrollIntoViewIfNeeded();
  await target.scrollIntoViewIfNeeded();

  const sourceBox = await item.boundingBox();
  const targetBox = await target.boundingBox();
  expect(sourceBox).not.toBeNull();
  expect(targetBox).not.toBeNull();

  const startX = sourceBox!.x + sourceBox!.width / 2;
  const startY = sourceBox!.y + sourceBox!.height / 2;
  const endX = targetBox!.x + targetBox!.width / 2;
  const endY = targetBox!.y + Math.max(40, targetBox!.height / 2);

  await page.mouse.move(startX, startY);
  await page.mouse.down();
  await page.waitForTimeout(200);
  for (let step = 1; step <= 30; step += 1) {
    await page.mouse.move(
      startX + ((endX - startX) * step) / 30,
      startY + ((endY - startY) * step) / 30,
    );
    await page.waitForTimeout(20);
  }
  await page.waitForTimeout(200);
  await page.mouse.up();
  await confirmStateAction(page);
  await skeletonDismissed(page);
}

async function openTrayItem(page: Page, state: string, code: string) {
  await getTrayItem(page, state, code).locator('.js-open').click();
  await skeletonDismissed(page);
  await expect(page.locator('#dlgmodal.js-content-unload')).toBeVisible();
}

async function closeTrayItemDialog(page: Page) {
  const dialog = page.locator('#dlgmodal.js-content-unload');
  if (await dialog.isVisible()) {
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  }
}

async function createStateItemForTray(page: Page) {
  await openStatesShowAll(page);
  const code = await createStateItem(page);
  await page.locator(`${FORM_SELECTOR} [data-action="close"]`).click();
  await skeletonDismissed(page);
  await openStatesTrays(page);
  await expectTrayItemInColumn(page, code, 'INITIAL');
  return code;
}

test('State transitions with navbar and historic panel', {
  annotation: {
    type: 'feature',
    description: 'Creates a state item, transitions through the workflow, and verifies navbar and historic panel',
  },
}, async ({ page }) => {
  await openStatesShowAll(page);
  const code = await createStateItem(page);

  await expectAvailableTransitions(page, ['FT_ST_STATE-INITIAL-A']);
  await expectHistoricRowCount(page, 1);
  await expectHistoricRowState(page, 0, 'Initial State');

  await executeTransition(page, 'FT_ST_STATE-INITIAL-A');
  await expect(page.locator('#field_ftStState')).toHaveValue('A');
  await expectNavbarCurrent(page, 'A');
  await expectNavbarVisited(page, 'INITIAL');
  await expectAvailableTransitions(page, ['FT_ST_STATE-A-OPTIONAL', 'FT_ST_STATE-A-B']);
  await expectHistoricRowCount(page, 2);
  await expectHistoricRowState(page, 1, 'State A');
  await expect(getHistoricPanel(page).locator('tr[data-rowid]').nth(1).locator('[data-field="row_diff"]'))
    .toContainText('Initial State');
  await expect(getHistoricPanel(page).locator('tr[data-rowid]').nth(1).locator('[data-field="row_diff"]'))
    .toContainText('State A');

  await executeTransition(page, 'FT_ST_STATE-A-B');
  await expect(page.locator('#field_ftStState')).toHaveValue('B');
  await expectNavbarCurrent(page, 'B');
  await expectNavbarVisited(page, 'A');
  await expectNavbarNotCurrent(page, 'INITIAL');
  await expectAvailableTransitions(page, ['FT_ST_STATE-B-EXCEPTION', 'FT_ST_STATE-B-FINAL']);
  await expectHistoricRowCount(page, 3);
  await expectHistoricRowState(page, 2, 'State B');

  await executeTransition(page, 'FT_ST_STATE-B-FINAL');
  await expect(page.locator('#field_ftStState')).toHaveValue('FINAL');
  await expectNavbarCurrent(page, 'FINAL');
  await expectNavbarVisited(page, 'B');
  await expect(page.locator('[data-action^="FT_ST_STATE"]')).not.toBeVisible();
  await expectHistoricRowCount(page, 4);
  await expectHistoricRowState(page, 3, 'Final State');

  await expect(getHistoricPanel(page).locator(`[data-field="ftStCode"]`).first()).toContainText(code);

  await deleteStateItem(page, code);
  await expect(page.locator(`${LIST_SELECTOR} tr`).filter({ hasText: code })).not.toBeVisible();
});

test('Optional and exception state branches', {
  annotation: {
    type: 'feature',
    description: 'Transitions through optional and exception states and verifies navbar updates',
  },
}, async ({ page }) => {
  await openStatesShowAll(page);
  await createStateItem(page);

  await executeTransition(page, 'FT_ST_STATE-INITIAL-A');
  await executeTransition(page, 'FT_ST_STATE-A-OPTIONAL');

  await expect(page.locator('#field_ftStState')).toHaveValue('OPTIONAL');
  await expectNavbarCurrent(page, 'OPTIONAL');
  await expectAvailableTransitions(page, ['FT_ST_STATE-OPTIONAL-A', 'FT_ST_STATE-OPTIONAL-B']);

  await executeTransition(page, 'FT_ST_STATE-OPTIONAL-B');
  await expect(page.locator('#field_ftStState')).toHaveValue('B');
  await expectNavbarCurrent(page, 'B');
  await expectNavbarVisited(page, 'OPTIONAL');

  await executeTransition(page, 'FT_ST_STATE-B-EXCEPTION');
  await expect(page.locator('#field_ftStState')).toHaveValue('EXCEPTION');
  await expectNavbarCurrent(page, 'EXCEPTION');
  await expectAvailableTransitions(page, ['FT_ST_STATE-EXCEPTION-B']);

  await executeTransition(page, 'FT_ST_STATE-EXCEPTION-B');
  await expect(page.locator('#field_ftStState')).toHaveValue('B');
  await expectNavbarCurrent(page, 'B');
  await expectNavbarVisited(page, 'EXCEPTION');

  const panel = getHistoricPanel(page);
  await panel.scrollIntoViewIfNeeded();
  await expect(panel.locator('tr[data-rowid]')).toHaveCount(6);
  await expect(panel.locator('[data-field="ftStState"]').last()).toContainText('State B');
});

test('States trays drag and drop transitions', {
  annotation: {
    type: 'feature',
    description: 'Uses the States trays view and drag-and-drop to transition items between columns',
  },
}, async ({ page }) => {
  const code = await createStateItemForTray(page);

  for (const state of TRAY_STATES) {
    await expect(getTrayColumn(page, state)).toBeVisible();
    await expect(getTrayColumn(page, state).locator('.tray-title')).toBeVisible();
  }

  await expect(getTrayColumn(page, 'INITIAL').locator('[data-action="create"]')).toBeVisible();
  await expect(getTrayColumn(page, 'INITIAL').locator('[data-action="search"]')).toBeVisible();
  await expect(getTrayColumn(page, 'A').locator('[data-action="create"]')).not.toBeVisible();

  await dragTrayItem(page, code, 'INITIAL', 'A');
  await expect(getTrayItem(page, 'INITIAL', code)).toHaveCount(0);
  await expectTrayItemInColumn(page, code, 'A');

  await dragTrayItem(page, code, 'A', 'B');
  await expect(getTrayItem(page, 'A', code)).toHaveCount(0);
  await expectTrayItemInColumn(page, code, 'B');

  await openTrayItem(page, 'B', code);
  await expect(page.locator('#field_ftStState')).toHaveValue('B');
  await expectNavbarCurrent(page, 'B');
  await expectNavbarVisited(page, 'A');
  await expectNavbarVisited(page, 'INITIAL');
  await expectHistoricRowCount(page, 3);
  await expectHistoricRowState(page, 2, 'State B');
  await expect(getHistoricPanel(page).locator('tr[data-rowid]').nth(2).locator('[data-field="row_diff"]'))
    .toContainText('State A');
  await expect(getHistoricPanel(page).locator('tr[data-rowid]').nth(2).locator('[data-field="row_diff"]'))
    .toContainText('State B');

  await closeTrayItemDialog(page);
  await restoreSidebar(page);
  await openStatesShowAll(page);
  await deleteStateItemFromList(page, code);
  await openStatesTrays(page);
  await expect(getTrayItem(page, 'B', code)).toHaveCount(0);
});
