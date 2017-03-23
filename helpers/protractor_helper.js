'use strict';
let Helper = codecept_helper;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

class protractor_helper extends Helper {

  checkAmountOfElements(locatorCss,digit) {
    var namesWithImage = element.all(by.css(locatorCss));
     namesWithImage.count().then(function(count){return expect(count).to.equal(digit)});
  }
}

module.exports = protractor_helper;
