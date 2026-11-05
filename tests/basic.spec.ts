import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load the home page and show the title', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Bienvenido a');
  });

  test('should display blog posts on the home page', async ({ page }) => {
    await page.goto('/');
    const postCards = page.locator('section article');
    await expect(postCards).not.toHaveCount(0);
  });
});

test.describe('Blog Pages', () => {
  test('should navigate to a blog post from the home page', async ({ page }) => {
    await page.goto('/');
    const firstPost = page.locator('section article').first();
    const postTitle = await firstPost.locator('h2').innerText();
    await firstPost.locator('a').first().click();

    // Check if the URL changed and the title is present
    await expect(page).not.toHaveURL('/');
    // Use first() to avoid strict mode violation if multiple h1s exist
    await expect(page.locator('h1').first()).toContainText(postTitle);
  });

  test('should load a specific blog post directly', async ({ page }) => {
    // Testing one of the known slugs from content/dea
    await page.goto('/dea/guia_dislexia');
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('article')).toBeVisible();
  });

  test('should have accessible share buttons and copy status feedback', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('http://localhost:3000/dea/guia_dislexia');

    const copyBtn = page.getByRole('button', { name: 'Copiar enlace al portapapeles' });
    await expect(copyBtn).toBeVisible();

    const statusEl = page.locator('[role="status"]');
    await expect(statusEl).toBeAttached();
    await expect(statusEl).toHaveText('');

    await copyBtn.click();
    await expect(statusEl).toHaveText('¡Copiado!');

    const shareLinks = page.locator('a[aria-label^="Compartir"] img');
    const count = await shareLinks.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(shareLinks.nth(i)).toHaveAttribute('alt', '');
    }
  });
});
