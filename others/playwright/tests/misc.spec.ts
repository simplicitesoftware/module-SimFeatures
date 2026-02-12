import { test, expect } from '@playwright/test';
import { login, logout, openList } from '../tools/helpers';

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  await login(page);
});

test.afterEach(async ({ page }) => {
  await logout(page);
});

// User onboarding test
test('CHG_00075', async ({ page }) => {
  await openList(page, "FtDomain", "FtGuidedObject");
  await page.locator(".list-actionbar [data-action='playguide']").click();

  await expect(page.locator(".guide-overlay")).toBeVisible();

  // Create step
  let stepTooltip = page.locator(".guide-tooltip");
  // Assert step tooltip is visible
  await expect(stepTooltip.locator(".step-title")).toHaveText("Create item tooltip");
  await expect(stepTooltip.locator(".card-body .step-desc")).toHaveText("Create item long tooltip");

  await page.locator("[data-action='create']").click();

  // Set user key step
  stepTooltip = page.locator(".guide-tooltip");
  await expect(stepTooltip.locator(".step-title")).toHaveText("Set user key tooltip");
  await expect(stepTooltip.locator(".card-body .step-desc")).toHaveText("Set user key long tooltip");

  await page.locator("#field_ftGoUserKey").fill("test");
  await page.locator("#field_ftGoUserKey").blur();

  // Save item step
  stepTooltip = page.locator(".guide-tooltip");
  await expect(stepTooltip.locator(".step-title")).toHaveText("Save item tooltip");
  await expect(stepTooltip.locator(".card-body .step-desc")).toHaveText("Save item long tooltip");

  await page.locator("[data-action='save']").click();

  // End step
  stepTooltip = page.locator(".guide-tooltip");
  await expect(stepTooltip.locator(".step-title")).toHaveText("End of user guide");
  await expect(stepTooltip.locator(".card-body .step-desc")).toHaveText("You have successfully been guided");
  await page.locator(".guide-tooltip [data-action='nextstep']").click();

  // Expect the guide overlay to be hidden and the toast message to be visible
  await expect(page.locator(".guide-overlay")).not.toBeVisible();
});