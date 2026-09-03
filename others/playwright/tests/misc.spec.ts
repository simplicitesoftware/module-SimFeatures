import { test, expect } from '@playwright/test';
import { goHome, openList } from '../tools/helpers';

const DOMAIN = 'FtDomain';
const GUIDED_OBJECT = 'FtGuidedObject';

test.beforeEach(async ({ page }) => {
  await goHome(page);
});

// User onboarding test – uncomment to run
test.skip('CHG_00075', {
  annotation: { type: 'feature', description: 'User onboarding' },
}, async ({ page }) => {
  await openList(page, DOMAIN, GUIDED_OBJECT);
  await page.locator(".list-actionbar [data-action='playguide']").click();

  await expect(page.locator('.guide-overlay')).toBeVisible();

  let stepTooltip = page.locator('.guide-tooltip');
  await expect(stepTooltip.locator('.step-title')).toHaveText('Create item tooltip');
  await expect(stepTooltip.locator('.card-body .step-desc')).toHaveText('Create item long tooltip');

  await page.locator("[data-action='create']").click();

  stepTooltip = page.locator('.guide-tooltip');
  await expect(stepTooltip.locator('.step-title')).toHaveText('Set user key tooltip');
  await expect(stepTooltip.locator('.card-body .step-desc')).toHaveText('Set user key long tooltip');

  await page.locator('#field_ftGoUserKey').fill('test');
  await page.locator('#field_ftGoUserKey').blur();

  stepTooltip = page.locator('.guide-tooltip');
  await expect(stepTooltip.locator('.step-title')).toHaveText('Save item tooltip');
  await expect(stepTooltip.locator('.card-body .step-desc')).toHaveText('Save item long tooltip');

  await page.locator("[data-action='save']").click();

  stepTooltip = page.locator('.guide-tooltip');
  await expect(stepTooltip.locator('.step-title')).toHaveText('End of user guide');
  await expect(stepTooltip.locator('.card-body .step-desc')).toHaveText('You have successfully been guided');
  await page.locator('.guide-tooltip [data-action="nextstep"]').click();

  await expect(page.locator('.guide-overlay')).not.toBeVisible();
});
