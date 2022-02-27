import { test, expect } from '@playwright/test'

test('Find sign in button', async ({ page }) => {

  await page.goto('http://localhost:3000/')

  await page.locator('button').click();

  await expect(page).toHaveURL('http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F')
})