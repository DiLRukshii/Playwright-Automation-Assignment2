import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

const SEARCH_FIELD ='//input[@id="searchField1"]';
//const SEARCH_RESULT = '//div[@class="search__result search__result--space"]';
const SEARCH_RESULT ='//span[@class="hlFld-Title"]';
const ISBN = "9781786300836";

test('verify the search funtionality of wiley online library', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works",{timeout:30000});

  await page.locator(SEARCH_FIELD).pressSequentially(ISBN);

  await page.keyboard.press('Enter');

  await expect(page.locator(SEARCH_RESULT)).toHaveText('Artificial Intelligence and Big Data: The Birth of a New Intelligence, Volume 8' );
});

