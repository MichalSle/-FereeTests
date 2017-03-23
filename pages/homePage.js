
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  fields: {
   // textTodo:'#new-todo'
     
  },
  moreButton:'.red',
  imageAuthor:'.responsive-img',
  clickToMore(){
  var elementsWithSpan= element.all(by.css('.span')).first();
  I.say(elementsWithSpan);
  }
}
