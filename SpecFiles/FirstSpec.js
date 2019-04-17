const signInHelper = require('../Helpers/signInHelper');
 
beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get(browser.params.url);
    await browser.driver.manage().window().maximize();
});

describe("Login with invalid credentials", () => {

    it("Login with invalid password", async () => {
        await signInHelper.fillLoginFormUsingInvalidPass();
        await signInHelper.clickSignInBtn();
        browser.sleep('2000')
        let error = $('[class$="required has-error"] [class$="error"]');
        await expect(error.getText()).toEqual('Incorrect username or password.');
    });

    it("Login with invalid email", async () => {
        await signInHelper.fillLoginFormUsingInvalidEmail();
        await signInHelper.clickSignInBtn();
        browser.sleep('2000')
        let error = $('[class$="required has-error"] [class$="error"]');
        await expect(error.getText()).toEqual('Incorrect username or password.');
    });
});

describe("Login with valid credentials", () => {

    it("Login with valid credentials", async () => {
        await signInHelper.fillLoginFormUsingValidCreds();
        await signInHelper.clickSignInBtn();
        browser.sleep('2000')
        await expect(browser.getTitle()).toEqual('Dashboard | myWorkUp');
        let velcome = $('[class$="fadeInRight"] h1');
        await expect(velcome.getText()).toEqual('Welcome to myWorkUp');
    });

});