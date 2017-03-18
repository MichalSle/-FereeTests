var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
Feature('Enter page and check basicaly functions');
Before((I) =>{
      I.amOnPage('/');
});
Scenario('Click to more button on homePage', function*(I,homePage){
   // var countBeforeClick= element.all(by.css('.right'));
    var textFromFirst=yield I.grabTextFrom('span');
    expect(textFromFirst).to.equal('test user 1');
    var a=  I.findElements('span');
    I.say(a);
    I.click(homePage.moreButton);
    
});

After((I)=>{

});