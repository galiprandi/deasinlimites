import { test, expect } from '@playwright/test';

test('search input refinements', async ({ page }) => {
  await page.goto('/dea');

  // Wait for the search input to be present in the DOM
  const searchInput = page.locator('input[aria-label="Buscar en el blog"]');
  await expect(searchInput).toBeVisible({ timeout: 15000 });

  // 1. Verify placeholder doesn't contain the redundant hint
  const placeholder = await searchInput.getAttribute('placeholder');
  expect(placeholder).toBe('Buscar en el blog...');

  // 2. Verify aria-keyshortcuts
  const ariaKeyshortcuts = await searchInput.getAttribute('aria-keyshortcuts');
  expect(ariaKeyshortcuts).toBe('/');

  // 3. Verify focus behavior after clearing
  await searchInput.focus();
  await page.keyboard.type('test');

  // The clear button might be SVG or text inside button
  const clearButton = page.locator('button[aria-label="Limpiar búsqueda"]');
  // Wait longer and use a more resilient way to trigger change if needed
  await page.waitForTimeout(1000); // Wait for state update/debounce

  await expect(clearButton).toBeVisible({ timeout: 10000 });
  await clearButton.click();

  await expect(searchInput).toBeFocused();
  await expect(searchInput).toHaveValue('');

  // 4. Verify Escape key functionality
  await searchInput.focus();
  await page.keyboard.type('esc');
  await page.waitForTimeout(500);
  await page.keyboard.press('Escape');

  await expect(searchInput).toHaveValue('');
  await expect(searchInput).not.toBeFocused();

  // Take a screenshot
  await page.screenshot({ path: 'search-verification.png' });
});
