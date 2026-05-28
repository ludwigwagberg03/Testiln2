// @ts-check
import { test, expect } from '@playwright/test';

test("användare kan söka pokemon", async ({ page }) => {

    await page.goto("http://localhost:5173");

    await page.fill("#input", "pikachu");

    await page.click("#searchBtn");

    await expect(page.locator("h2"))
        .toHaveText("pikachu");
});