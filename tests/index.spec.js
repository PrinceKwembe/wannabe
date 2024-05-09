// @ts-check
const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/dist/index.html');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Wannabe | AI-driven Career guidance system");
  await expect(page).toHaveURL("http://127.0.0.1:5500/dist/index.html")
});

// test('should click on the "Continue with Google" button', async ({ page }) => {
//   await page.goto('http://127.0.0.1:5500/dist/index.html');
//   await page.click('#sigIn');
//   const url = await page.url();
//   expect(url).toContain('accounts.google.com');
// });

test('Onboarding Page', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/dist/pages/onboarding.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Onboarding");
  await expect(page).toHaveURL("http://127.0.0.1:5500/dist/pages/onboarding.html")

});


test('Career Page', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/dist/pages/career.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Wannabe | AI-driven Career guidance system");
  await expect(page).toHaveURL("http://127.0.0.1:5500/dist/pages/career.html")

});

test('Recommendation Page', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/dist/pages/recommendation.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Wannabe | AI-driven Career guidance system");
  await expect(page).toHaveURL("http://127.0.0.1:5500/dist/pages/recommendation.html")

});

test('Activity Page', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/dist/pages/activities.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Wannabe | AI-driven Career guidance system");
  await expect(page).toHaveURL("http://127.0.0.1:5500/dist/pages/activities.html")

});

test('Softs Skills Page', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/dist/pages/softskills.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Wannabe | AI-driven Career guidance system");
  await expect(page).toHaveURL("http://127.0.0.1:5500/dist/pages/softskills.html")

});

