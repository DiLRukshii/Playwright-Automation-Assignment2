import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';


test('verify the search funtionality of wiley online library', async ({ page }) => {
  // Navigate to the home page
  await page.goto('https://onlinelibrary.wiley.com/');

  // Click on the login button 
  await page.click('//div[@class="loginBar login-open"]', {timeout:6000});

  // Fill in the login form with an invalid email and invalid password
  await page.fill('//input[@id="username"]', 'Wiley');
  await page.fill('//input[@id="password"]', 'wiley123');

  // // Click the login/submit button
  await page.click('//input[@class="button btn submit primary no-margin-bottom accessSubmit"]');

  //await expect(page).toHaveTitle("Your email or password is incorrect. Please try again",{timeout:30000});

  //Error message is displayed
  //Commented the below (Line 23 and 24 ) Beacuse I'm getting an cloudflare security error when try to complete the test.
  //const errorMessage = await page.textContent('//div[@id="login-error-message"]');
  // console.log('Your email or password is incorrect. Please try again: ${errorMessage}');


});
