var assert=require('assert');
Feature('Adding a new todo to app');
Before((I) =>{
      I.amOnPage('/');
});
Scenario('Add item to list', function*(I,homePage){
    homePage.newTodo('ss');
    var count = yield I.grabTextFrom('#todo-count > strong');
   I.say(count);
   assert.equal(count,'1','Bad counted function');
   I.say('Good counted');
});
