
type ICodeceptCallback = (i: CodeceptJS.I) => void;

declare const actor: () => CodeceptJS.I;
declare const Feature: (string: string) => void;
declare const Scenario: (string: string, callback: ICodeceptCallback) => void;
declare const Before: (callback: ICodeceptCallback) => void;
declare const After: (callback: ICodeceptCallback) => void;
declare const within: (selector: string, callback: Function) => void;

declare namespace CodeceptJS {
  export interface I {
    amOutsideAngularApp: () => any; 
    amInsideAngularApp: () => any; 
    waitForElement: (locator, sec) => any; 
    waitForClickable: (locator, sec) => any; 
    waitForVisible: (locator, sec) => any; 
    waitForInvisible: (locator, sec) => any; 
    waitForStalenessOf: (locator, sec) => any; 
    waitForText: (text, sec, context) => any; 
    moveTo: (path) => any; 
    refresh: () => any; 
    haveModule: (modName, fn) => any; 
    resetModule: (modName) => any; 
    setCookie: (cookie) => any; 
    amOnPage: (url) => any; 
    click: (locator, context) => any; 
    doubleClick: (locator, context) => any; 
    moveCursorTo: (locator, offsetX, offsetY) => any; 
    see: (text, context) => any; 
    dontSee: (text, context) => any; 
    selectOption: (select, option) => any; 
    fillField: (field, value) => any; 
    pressKey: (key) => any; 
    attachFile: (locator, pathToFile) => any; 
    seeInField: (field, value) => any; 
    dontSeeInField: (field, value) => any; 
    appendField: (field, value) => any; 
    clearField: (field, value) => any; 
    checkOption: (field, context) => any; 
    seeCheckboxIsChecked: (field) => any; 
    dontSeeCheckboxIsChecked: (field) => any; 
    grabTextFrom: (locator) => any; 
    grabValueFrom: (locator) => any; 
    grabAttributeFrom: (locator, attr) => any; 
    seeInTitle: (text) => any; 
    dontSeeInTitle: (text) => any; 
    grabTitle: () => any; 
    seeElement: (locator) => any; 
    dontSeeElement: (locator) => any; 
    seeElementInDOM: (locator) => any; 
    dontSeeElementInDOM: (locator) => any; 
    seeInSource: (text) => any; 
    dontSeeInSource: (text) => any; 
    executeScript: (fn) => any; 
    executeAsyncScript: (fn) => any; 
    seeInCurrentUrl: (url) => any; 
    dontSeeInCurrentUrl: (url) => any; 
    seeCurrentUrlEquals: (url) => any; 
    dontSeeCurrentUrlEquals: (url) => any; 
    saveScreenshot: (fileName) => any; 
    clearCookie: (cookie) => any; 
    seeCookie: (name) => any; 
    dontSeeCookie: (name) => any; 
    grabCookie: (name) => any; 
    resizeWindow: (width, height) => any; 
    wait: (sec) => any; 
    debug: (msg) => any; 
    debugSection: (section, msg) => any; 
    say: (msg) => any; 

  }
}

declare module "codeceptjs" {
    export = CodeceptJS;
}
