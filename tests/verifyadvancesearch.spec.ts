import { test, expect } from '@playwright/test';



test('verify the search funtionality of wiley online library', async ({ page }) => {
  // Navigate to the home page
  await page.goto('https://onlinelibrary.wiley.com/');

  // Click on the Advance search 
  await page.click('//a[@class="advanced-search-link"]', {timeout:6000});

  // Input a title name of a book
  await page.fill('//input[@id="text1"]', 'Machine learning Algorithms');
  

  // Click the search button
  await page.click('//button[@id="advanced-search-btn""]');

});
