var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
Feature('Enter page and check basically functions');
Before((I) =>{
      I.amOnPage('/');
});
Scenario('Check amount of imageAuthor before click and after click', function*(I,homePage){
   I.checkAmountOfElements(homePage.imageAuthor,3);
   I.click(homePage.moreButton);
   I.checkAmountOfElements(homePage.imageAuthor,4);
});

Scenario('Enter to tag page which not exist', function*(I){
    I.amOnPage('http://fereetestapp.azurewebsites.net/blog/tag3');
    I.see('No posts here :(');
});

Scenario('Check amount of posts in define tag', function*(I,homePage){
    I.amOnPage('http://fereetestapp.azurewebsites.net/blog/tag2');
    I.checkAmountOfElements(homePage.post,3);
    I.see('#tag2','span');
    I.see('#tag2','h2');
});

After((I)=>{
  I.clearCookie();
});