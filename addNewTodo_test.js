
Feature('Adding a new todo to app');

Scenario('Add item to list', (I,homePage) => {
    I.amOnPage('/');
    homePage.newTodo('ss');
    
});
