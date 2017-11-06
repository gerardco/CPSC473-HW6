(window => {
  let App = window.App || {};
  let $ = window.jQuery;

  class FormHandler {
    constructor(selector) {
      if (!selector) {
        throw new Error('No selector provided');
      }

      this.$formElement = $(selector);
      if (this.$formElement.length === 0) {
        throw new Error(`Could not find element with selector: ${selector}`);
      }
    }

    addSubmitHandler(fn) {
      console.log('Setting submit handler for form');
      this.$formElement.on('submit', function (event) {
        event.preventDefault();

        let data = {};
        $(this).serializeArray().forEach(({name, value}) => {
          data[name] = value;
          console.log(`${name} is ${value}`);
        });
        console.log(data);
        fn(data);
        this.reset();
        this.elements[0].focus();
      });
    }
  }
  
  export default FormHandler;

  App.FormHandler = FormHandler;
  window.App = App;
});

/*

Write an ES6 version of the formhandler.js module from Chapter 10. Use the following ES6 features:

Classes, constructors, and methods
Module import and export syntax
let statements
Arrow functions

*/
