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
});
