var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
//ar assert = require('assert');
Feature('Enter page and check basicaly functions');
Before((I) =>{
      I.amOnPage('/');
});
Scenario('Check amount of imageAuthor before click and after click', function*(I,homePage){
   I.checkAmountOfElements(homePage.imageAuthor,3);
   I.click(homePage.moreButton);
   I.checkAmountOfElements(homePage.imageAuthor,4);
});

Scenario('Enter to tag page which not exist ', function*(I){
    I.amOnPage('http://fereetestapp.azurewebsites.net/blog/tag3');
    I.see('No posts here :(');
});

After((I)=>{
  I.clearCookie();
});