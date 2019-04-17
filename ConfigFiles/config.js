exports.config={
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub/',
    specs:['../SpecFiles/FirstSpec.js'],
    params:
    {
        url:'https://app.test.myworkup.net/site/login',
        validEmail:'admin@myworkup.net',
        validPassword:'aaa123',
        invalidEmail:'admin.myworkup.net',
        invalidPassword:'123123',
    }
}