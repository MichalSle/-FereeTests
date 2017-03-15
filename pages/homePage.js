
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  fields: {
   // textTodo:'#new-todo'
     
  },
   moreButton:{css:".red"},
  clickToMore(){
    //var expectedSelector={css: 'span'};
   var elementsWithSpan= element.all(by.css('.span')).first();
   I.say(elementsWithSpan);
    //I.click(this.moreButton);
  //  I.click(this.fields.moreButton);
  }
}
