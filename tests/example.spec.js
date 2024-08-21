import { test, expect } from '@playwright/test';
const tc1data = require('../testdata/testcase1.json');
const { PomLoginPage } = require('../POM/pom_login');

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('[data-test="error"]')).toContainText(['Sorry, this user has been locked out.']);
});

test('test2', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.locator('[data-icon="shopping-cart"]').click();
  await page.getByRole('link', { name: 'CHECKOUT' }).click();
  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.getByRole('link', { name: 'FINISH' }).click();
  await expect(page.getByText('Your order has been')).toContainText(['Your order has been']);
});

test('test3', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.getByRole('button', { name: 'REMOVE' }).click();
  await page.locator('[data-icon="shopping-cart"]').click();
  await page.locator('.removed_cart_item').click();
  // await expect(page.locator('[class=".shopping_cart_badge"]')).not.toBeVisible();
  // await expect(page.locator('removed_cart_item'));
  await expect(locator).toHaveClass('removed_cart_item'); 
});

test('smoke', async ({ page }) => {

  const LoginPage = new PomLoginPage(page);
  await LoginPage.goto();
  await LoginPage.user_enters_username();
  await LoginPage.user_enters_password();
  await LoginPage.user_click_the_login_button();
  await page.locator('.inventory_item').filter({ has: page.getByText('Sauce Labs Backpack')}).getByText('ADD TO CART').click();
  await page.locator('.inventory_item').filter({ has: page.getByText('Sauce Labs Bike Light')}).getByText('ADD TO CART').click();
  await page.locator('.inventory_item').filter({ has: page.getByText('Sauce Labs Bolt T-Shirt')}).getByText('ADD TO CART').click();
  await page.locator('[data-icon="shopping-cart"]').click();
  await page.locator('.cart_item').filter({ has: page.getByText('Sauce Labs Bolt T-Shirt')}).getByText('REMOVE').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

});

tc1data.forEach(( jsondata) => {

test('parameterize '+jsondata.username, async ({ page }) => {
  

  const LoginPage = new PomLoginPage(page);
  await LoginPage.goto();
  await LoginPage.user_enters_username(jsondata.username);
  await LoginPage.user_enters_password(jsondata.password);
  await LoginPage.user_click_the_login_button();
  // await page.locator('.inventory_item').filter({ has: page.getByText('Sauce Labs Backpack')}).getByText('ADD TO CART').click();
  // await page.locator('.inventory_item').filter({ has: page.getByText('Sauce Labs Bike Light')}).getByText('ADD TO CART').click();
  // await page.locator('.inventory_item').filter({ has: page.getByText('Sauce Labs Bolt T-Shirt')}).getByText('ADD TO CART').click();
  // await page.locator('[data-icon="shopping-cart"]').click();
  // await page.locator('.cart_item').filter({ has: page.getByText('Sauce Labs Bolt T-Shirt')}).getByText('REMOVE').click();
  // await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

});
});