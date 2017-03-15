var assert=require('assert');
Feature('Enter page and check basicaly functions');
Before((I) =>{
      I.amOnPage('/');
});
Scenario('Click to more button on homePage', function*(I,homePage){
    I.click(homePage.moreButton);
    var text = yield I.grabTextFrom('span');
   //   var elementsWithSpan= element.all(by.css('span')).count();
 var expectedSelector={css: 'span'};
 //I.say(expectedSelector);
   I.say(expectedSelector);
    I.say(text);
   assert.equal(text,'test user 1','Bad check text');
   I.say('End of test');
});

After((I)=>{

});