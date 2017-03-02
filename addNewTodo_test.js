
Feature('Adding a new todo to app');
let homePage = require('./pages/homePage.js');
Scenario('Add item to list', (I,homePage) => {
    I.amOnPage('/');
    homePage.newTodo(text);
    
});
