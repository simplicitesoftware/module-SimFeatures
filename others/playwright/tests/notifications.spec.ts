import { test, expect, Page } from '@playwright/test';
import {
  login,
  logout,
  openList,
  saveList,
  skeletonDismissed,
  loaded,
} from '../tools/helpers';

const DOMAIN = 'FtDomain';
const NOTIFICATION_OBJECT = 'FtNotification';
const NOTIFICATION_SHORTCUT = 'Notifications';
const LIST_SELECTOR = `#list_${NOTIFICATION_OBJECT}_the_ajax_${NOTIFICATION_OBJECT}`;

test.beforeEach(async ({ page }) => {
  await login(page);
});

test.afterEach(async ({ page }) => {
  await logout(page);
});

async function ensureNotificationShortcutPinned(page: Page) {
  const pinnedShortcut = page.locator(
    `.header button[data-shortcut="${NOTIFICATION_SHORTCUT}"]`,
  );
  if (await pinnedShortcut.count()) {
    return;
  }

  const shortcutsMenu = page.locator('.dropdown-menu.shortcuts');
  if (!(await shortcutsMenu.isVisible())) {
    await page.locator('.header a.btn-header.btn-shortcut').click();
  }
  await expect(shortcutsMenu).toBeVisible();

  const notificationItem = shortcutsMenu.locator(
    `li[data-shortcut="${NOTIFICATION_SHORTCUT}"]`,
  );
  await notificationItem.hover();
  await notificationItem.locator('.btn-pin').click();
  await expect(pinnedShortcut).toBeVisible();
}

async function getNotificationBadgeCount(page: Page) {
  const bellButton = page.locator(
    `.header button[data-shortcut="${NOTIFICATION_SHORTCUT}"]`,
  );
  await expect(bellButton).toBeVisible();

  const badge = bellButton.locator('.badge.count');
  if (!(await badge.count())) {
    return 0;
  }
  return Number.parseInt((await badge.textContent())?.trim() || '0', 10);
}

async function openNotificationsPanel(page: Page) {
  await page
    .locator(`.header button[data-shortcut="${NOTIFICATION_SHORTCUT}"]`)
    .click();
  await expect(page.locator('[data-action="NotiMarkAllAsRead"]')).toBeVisible();
}

async function markAllNotificationsAsRead(page: Page) {
  await page.locator('[data-action="NotiMarkAllAsRead"]').click();
  await loaded(page);
  await expect.poll(async () => {
    await ensureNotificationShortcutPinned(page);
    return getNotificationBadgeCount(page);
  }, { timeout: 15000 }).toBe(0);
}

test('FT_0053', {
  annotation: { type: 'feature', description: 'Internal notification' },
}, async ({ page }) => {
  await ensureNotificationShortcutPinned(page);

  const initialCount = await getNotificationBadgeCount(page);

  await openList(page, DOMAIN, NOTIFICATION_OBJECT);
  await skeletonDismissed(page);
  await expect(page.locator(LIST_SELECTOR)).toBeVisible();

  await page.locator("button[data-action='addlist']").click();
  await skeletonDismissed(page);
  await expect(
    page.locator(`${LIST_SELECTOR} tr[data-rowid="0"]`),
  ).toBeVisible();

  await saveList(page);

  await expect.poll(async () => {
    await ensureNotificationShortcutPinned(page);
    return getNotificationBadgeCount(page);
  }, { timeout: 15000 }).toBe(initialCount + 1);

  await expect(
    page.locator(`.header button[data-shortcut="${NOTIFICATION_SHORTCUT}"] .fa-bell`),
  ).toBeVisible();

  await openNotificationsPanel(page);
  await markAllNotificationsAsRead(page);
});
