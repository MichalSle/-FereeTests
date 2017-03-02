
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  fields: {
    textTodo:'#new-todo'
  },

  newTodo(text){
    I.fillField(this.fields.textTodo,text)
  }
}
