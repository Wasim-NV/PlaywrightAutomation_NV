const { expect } = require('@playwright/test');

exports.PomLoginPage = class PomLoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.txtUserName = page.locator('[data-test="username"]');
    this.txtPassword = page.locator('[data-test="password"]');
    this.btnLogin    = page.getByRole('button', { name: 'LOGIN' });


  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/v1/');
  }

  async user_enters_username(strUsername){
    await this.txtUserName.fill(strUsername);
  }

  async user_enters_password(strPassword){
    await this.txtPassword.fill(strPassword);
  }

  async user_click_the_login_button(){
    await this.btnLogin.click();
  }

};