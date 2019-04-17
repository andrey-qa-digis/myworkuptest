const baseHelper = require('../Helpers/baseHelper');

let clickSignInBtn = async () => await baseHelper.click('[name="login-button"]');

let fillLoginFormUsingValidCreds = async () => {
    await baseHelper.type('[name$="[username]"]', browser.params.validEmail);
    await baseHelper.type('[name$="[password]"]', browser.params.validPassword);
};

let fillLoginFormUsingInvalidPass = async () => {
    await baseHelper.type('[name$="[username]"]', browser.params.validEmail);
    await baseHelper.type('[name$="[password]"]', browser.params.invalidPassword);
};

let fillLoginFormUsingInvalidEmail = async () => {
    await baseHelper.type('[name$="[username]"]', browser.params.invalidEmail);
    await baseHelper.type('[name$="[password]"]', browser.params.validPassword);
};

module.exports = {clickSignInBtn, fillLoginFormUsingValidCreds, 
    fillLoginFormUsingInvalidPass, fillLoginFormUsingInvalidEmail};