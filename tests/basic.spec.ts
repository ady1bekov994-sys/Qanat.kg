import { test, expect } from '@playwright/test';

test('Проверить загрузку главной страницы', async ({ page }) => {
  await page.goto('./');
  await expect(page).toHaveTitle('*');
});

test('Проверить доступность основного контента', async ({ page }) => {
  await page.goto('./');
  const body = await page.locator('body');
  await expect(body).toBeVisible();
});

test('Проверить наличие ссылок', async ({ page }) => {
  await page.goto('./');
  const links = await page.locator('a');
  const count = await links.count();
  expect(count).toBeGreaterThan(0);
});
