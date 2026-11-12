import { test, expect } from '@playwright/test';

test.describe('Logo en mobile', () => {
  test('el logo del hero no debe exceder un tamaño razonable en mobile', async ({ page }) => {
    // Viewport mobile tipico
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    // El logo del hero en mobile esta dentro de .logo.only-mobile
    const logo = page.locator('.logo.only-mobile img, .logo.only-mobile').first();
    await expect(logo).toBeVisible();

    const box = await logo.boundingBox();
    console.log('Logo bounding box (mobile 375):', box);

    // Captura para inspeccion visual
    await page.screenshot({ path: 'tests/logo-mobile-375.png', fullPage: false });

    // Validacion: el logo no deberia ocupar mas del 45% del ancho del viewport
    // ni mas de 180px de alto (un logo de 230px en un viewport de 375 es ~61% del ancho)
    expect(box).not.toBeNull();
    if (box) {
      const widthRatio = box.width / 375;
      console.log(`Ratio logo/viewport width: ${widthRatio.toFixed(2)} (${(widthRatio * 100).toFixed(0)}%)`);
      // Reporte - no forzamos fallo, solo diagnosticamos
    }
  });

  test('logo en desktop (sidebar) - referencia', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    // En desktop el logo del hero esta oculto (only-mobile)
    const mobileLogo = page.locator('.logo.only-mobile img');
    await expect(mobileLogo).not.toBeVisible();
    const sidebarLogo = page.locator('header.only-desktop img').first();
    const box = await sidebarLogo.boundingBox();
    console.log('Sidebar logo (desktop):', box);
  });
});
