'use strict';
let Helper = codecept_helper;

// use any assertion library you like
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

class protractor_helper extends Helper {

  findElements(locatorCss) {
   // this.helpers['Protractor'].browser.refresh();
    var elementsByLocator = element.all(by.css(locatorCss));
    expect(elementsByLocator.count().to.equal(3));
  }
}

module.exports = protractor_helper;
