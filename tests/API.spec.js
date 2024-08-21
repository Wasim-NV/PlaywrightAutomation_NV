import { test, expect } from '@playwright/test';
const tc1data = require('../testdata/API_data.json');
const { PomLoginPage } = require('../POM/pom_login');

tc1data.forEach(( testdata) => {

    test('API' +testdata.username,{
        tag: ['@login', '@smoke', '@e2e'],
    },async ({ page, request}) => {

        // const issues = await request.get(`http://34.45.142.80:8180/api/catalogue-rest/product/15`);
        // console.log(issues)
        // console.log(await issues.json());

        let email = Math.random().toString(36).substring(2, 12)+ "@nomail.com";
 
    const registerUserResponse = await request.post(`http://34.45.142.80:8180/api/customer-rest/customer/register`, {
        data: {
          "err": "",
          "firstName": "Wasim Ajaz",
          "lastName": "P",
          "email": email,
          "password": "qwerty",
          "confirmpassword": "qwerty"
      }
    });
 
    expect(registerUserResponse.statusText()).toEqual("OK");
    console.log(registerUserResponse)
    console.log(await registerUserResponse.json())

    expect(await registerUserResponse.json()).toMatchObject(
        {
            id: expect.any(Number),
            firstName: "Wasim Ajaz",
            lastName: "P",
            email: email,
            password: "qwerty"
        }
    )

    const loginPage = new loginPage()
    
    });
    });

    test("mocks a fruit", async ({ page }) => {
        // Mock the api call before navigating
        await page.route('*/**/api/v1/fruits', async route => {
          const json = [{ name: 'Strawberry', id: 21 }];
          await route.fulfill({ json });
        });
        // Go to the page
        await page.goto('https://demo.playwright.dev/api-mocking');
      
        // Assert that the Strawberry fruit is visible
        await expect(page.getByText('Strawberry')).toBeVisible();
      });

      test("Image Compare", async ({ page }) => {
        
        // Go to the page
        await page.goto('http://34.45.142.80:3000/');
        await page.pause();
        await expect(page.locator(".footer")).toHaveScreenshot( {maxDiffPixels: 80 });
      });



      