let click = async (locator) => await $(locator).click();

let type = async (locator, text) => {
    await $(locator).clear();
    await $(locator).sendKeys(text);
}

module.exports = {click, type};