var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');//
chai.use(chaiAsPromised);
var expect = chai.expect;
//ar assert = require('assert');
Feature('Enter page and check basicaly functions');
Before((I) =>{
      I.amOnPage('/');
});
Scenario('Check amount of ', function*(I,homePage){
   I.checkAmountOfElements(homePage.imageAuthor,3);
   I.click(homePage.moreButton);
   I.checkAmountOfElements(homePage.imageAuthor,4);
});

After((I)=>{
  I.clearCookie();
});