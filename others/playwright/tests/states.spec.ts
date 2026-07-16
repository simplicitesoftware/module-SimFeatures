import { test, expect, Page, Locator } from '@playwright/test';
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

test.describe.configure({ mode: 'serial' });

async function dismissConflictAlert(page: Page) {
  const conflict = page.locator('.alert').filter({ hasText: 'already modified' });
  if (await conflict.isVisible()) {
    await conflict.getByRole('button', { name: 'Override' }).click();
    await loaded(page);
    await skeletonDismissed(page);
  }
}

async function dismissErrorDialog(page: Page) {
  const errorDialog = page.locator('#dlgmodal').filter({ hasText: 'Impossible update' });
  if (await errorDialog.isVisible()) {
    await errorDialog.getByRole('button', { name: 'Ok' }).click();
    await expect(errorDialog).not.toBeVisible();
  }
}

async function dismissQuitDialog(page: Page) {
  const quitDialog = page.locator('#dlgmodal').filter({ hasText: 'Do you want to quit' });
  if (await quitDialog.isVisible()) {
    await quitDialog.getByRole('button', { name: 'Cancel' }).click();
    await expect(quitDialog).not.toBeVisible();
  }
}

async function waitForFormSettled(page: Page) {
  await loaded(page);
  await skeletonDismissed(page);
  await dismissConflictAlert(page);
}

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await login(page);
});

test.afterEach(async ({ page }) => {
  await dismissErrorDialog(page);
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
  await waitForFormSettled(page);
  await expect(getHistoricPanel(page).locator('tr[data-rowid]')).toHaveCount(1);

  const code = await page.locator('#field_ftStCode').inputValue();
  expect(code).toMatch(/^S-\d+$/);
  return code;
}

async function confirmStateAction(page: Page) {
  const dialog = page.locator('#dlgmodal').filter({ has: page.locator('[data-action="YES"]') });
  await expect(dialog).toBeVisible({ timeout: 10000 });
  await dialog.locator('[data-action="YES"]').click();
  await waitForFormSettled(page);
  await expect(dialog).not.toBeVisible();
}

async function executeTransition(page: Page, action: string, expectedState?: string) {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    await dismissErrorDialog(page);
    await dismissConflictAlert(page);
    const actionButton = page.locator(`[data-action="${action}"]`);
    await expect(actionButton).toBeVisible();
    await actionButton.click();
    await confirmStateAction(page);
    await dismissConflictAlert(page);
    await dismissErrorDialog(page);

    if (!expectedState) {
      return;
    }

    if ((await page.locator('#field_ftStState').inputValue()) === expectedState) {
      return;
    }
  }

  if (expectedState) {
    await expect(page.locator('#field_ftStState')).toHaveValue(expectedState);
  }
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

async function filterListByCode(page: Page, code: string) {
  const list = page.locator(LIST_SELECTOR);
  await expect(list).toBeVisible();
  let codeFilter = list.locator('input[placeholder="Filter Code"]');
  if (!(await codeFilter.isVisible())) {
    await list.getByRole('button', { name: /Show the filters by column/i }).click();
  }
  codeFilter = list.locator('input[placeholder="Filter Code"]');
  await codeFilter.fill(code);
  await waitForFormSettled(page);
}

async function deleteFromForm(page: Page) {
  await dismissConflictAlert(page);
  const form = page.locator(FORM_SELECTOR);
  const toolbar = form.locator('button[data-action="save"]').locator('..');
  await toolbar.locator('.btn-plus').click();
  await page.locator('.dropdown-menu.show [data-action="delete"]').click();
  await page.locator('#dlgmodal .modal-footer [data-action="OK"]').click();
  await waitForFormSettled(page);
  await expect(form).not.toBeVisible();
}

async function deleteStateItemFromList(page: Page, code: string) {
  await filterListByCode(page, code);
  const row = page.locator(`${LIST_SELECTOR} tr`).filter({ hasText: code });
  await expect(row).toHaveCount(1);
  await row.locator('.btn-plus').click();
  await row.locator('[data-action="delete"]').click();
  await page.locator('#dlgmodal .modal-footer [data-action="OK"]').click();
  await waitForFormSettled(page);
}

async function deleteStateItem(page: Page, code: string) {
  const form = page.locator(FORM_SELECTOR);
  if (await form.isVisible()) {
    await deleteFromForm(page);
    return;
  }

  await openStatesShowAll(page);
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
  await page.locator('#menu').evaluate((menu) => {
    menu.style.pointerEvents = 'none';
  });
}

async function restoreSidebar(page: Page) {
  await page.locator('#menu').evaluate((menu) => {
    menu.style.pointerEvents = '';
    menu.style.visibility = '';
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

async function performTrayDrag(page: Page, item: Locator, target: Locator) {
  const sourceBox = await item.boundingBox();
  const targetBox = await target.boundingBox();
  expect(sourceBox).not.toBeNull();
  expect(targetBox).not.toBeNull();

  const startX = sourceBox!.x + sourceBox!.width / 2;
  const startY = sourceBox!.y + sourceBox!.height / 2;
  const endX = targetBox!.x + targetBox!.width / 2;
  const endY = targetBox!.y + Math.min(60, Math.max(20, targetBox!.height / 4));

  await page.mouse.move(startX, startY);
  await page.mouse.down();
  await page.waitForTimeout(300);
  const steps = 50;
  for (let step = 1; step <= steps; step += 1) {
    await page.mouse.move(
      startX + ((endX - startX) * step) / steps,
      startY + ((endY - startY) * step) / steps,
    );
    await page.waitForTimeout(10);
  }
  await page.waitForTimeout(400);
  await page.mouse.up();
  await page.waitForTimeout(200);
}

async function dragTrayItem(page: Page, code: string, fromState: string, toState: string) {
  const confirmDialog = page.locator('#dlgmodal').filter({ has: page.locator('[data-action="YES"]') });
  const errorDialog = page.locator('#dlgmodal').filter({ hasText: 'Impossible update' });
  const quitDialog = page.locator('#dlgmodal').filter({ hasText: 'Do you want to quit' });

  for (let attempt = 0; attempt < 5; attempt += 1) {
    await dismissErrorDialog(page);
    await dismissQuitDialog(page);

    const item = getTrayItem(page, fromState, code).first();
    const target = getTrayColumn(page, toState);
    await expect(item).toHaveCount(1);
    await item.scrollIntoViewIfNeeded();
    await target.scrollIntoViewIfNeeded();

    if (attempt % 2 === 0) {
      await performTrayDrag(page, item, target);
    } else {
      await item.dragTo(target, { force: true, targetPosition: { x: 20, y: 40 } });
    }

    try {
      await expect(confirmDialog.or(errorDialog).or(quitDialog)).toBeVisible({ timeout: 8000 });
    } catch {
      await openStatesTrays(page);
      await waitForFormSettled(page);
      if (attempt < 4) {
        continue;
      }
      throw new Error(`Drag did not trigger confirmation for ${code}`);
    }

    if (await quitDialog.isVisible()) {
      await dismissQuitDialog(page);
      continue;
    }

    if (await errorDialog.isVisible()) {
      await dismissErrorDialog(page);
      await openStatesTrays(page);
      await waitForFormSettled(page);
      continue;
    }

    await confirmStateAction(page);
    await waitForFormSettled(page);
    await expectTrayItemInColumn(page, code, toState);
    return;
  }

  throw new Error(`Failed to drag ${code} from ${fromState} to ${toState}`);
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
  await waitForFormSettled(page);
  await page.locator(`${FORM_SELECTOR} [data-action="close"]`).click();
  await dismissQuitDialog(page);
  await skeletonDismissed(page);
  await openStatesTrays(page);
  await waitForFormSettled(page);
  await expectTrayItemInColumn(page, code, 'INITIAL');
  return code;
}

test('FT_0185', {
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

  await executeTransition(page, 'FT_ST_STATE-INITIAL-A', 'A');
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

  await executeTransition(page, 'FT_ST_STATE-A-B', 'B');
  await expect(page.locator('#field_ftStState')).toHaveValue('B');
  await expectNavbarCurrent(page, 'B');
  await expectNavbarVisited(page, 'A');
  await expectNavbarNotCurrent(page, 'INITIAL');
  await expectAvailableTransitions(page, ['FT_ST_STATE-B-EXCEPTION', 'FT_ST_STATE-B-FINAL']);
  await expectHistoricRowCount(page, 3);
  await expectHistoricRowState(page, 2, 'State B');

  await executeTransition(page, 'FT_ST_STATE-B-FINAL', 'FINAL');
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

test('FT_0184', {
  annotation: {
    type: 'feature',
    description: 'Transitions through optional and exception states and verifies navbar updates',
  },
}, async ({ page }) => {
  await openStatesShowAll(page);
  await createStateItem(page);

  await executeTransition(page, 'FT_ST_STATE-INITIAL-A', 'A');
  await executeTransition(page, 'FT_ST_STATE-A-OPTIONAL', 'OPTIONAL');

  await expect(page.locator('#field_ftStState')).toHaveValue('OPTIONAL');
  await expectNavbarCurrent(page, 'OPTIONAL');
  await expectAvailableTransitions(page, ['FT_ST_STATE-OPTIONAL-A', 'FT_ST_STATE-OPTIONAL-B']);

  await executeTransition(page, 'FT_ST_STATE-OPTIONAL-B', 'B');
  await expect(page.locator('#field_ftStState')).toHaveValue('B');
  await expectNavbarCurrent(page, 'B');
  await expectNavbarVisited(page, 'OPTIONAL');

  await executeTransition(page, 'FT_ST_STATE-B-EXCEPTION', 'EXCEPTION');
  await expect(page.locator('#field_ftStState')).toHaveValue('EXCEPTION');
  await expectNavbarCurrent(page, 'EXCEPTION');
  await expectAvailableTransitions(page, ['FT_ST_STATE-EXCEPTION-B']);

  await executeTransition(page, 'FT_ST_STATE-EXCEPTION-B', 'B');
  await expect(page.locator('#field_ftStState')).toHaveValue('B');
  await expectNavbarCurrent(page, 'B');
  await expectNavbarVisited(page, 'EXCEPTION');

  const panel = getHistoricPanel(page);
  await panel.scrollIntoViewIfNeeded();
  await expect(panel.locator('tr[data-rowid]')).toHaveCount(6);
  await expect(panel.locator('[data-field="ftStState"]').last()).toContainText('State B');
});

test('FT_0183', {
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
  await getTrayItem(page, 'B', code).locator('.js-open').click();
  await skeletonDismissed(page);
  await deleteFromForm(page);
  await openStatesTrays(page);
  await expect(getTrayItem(page, 'B', code)).toHaveCount(0);
});
