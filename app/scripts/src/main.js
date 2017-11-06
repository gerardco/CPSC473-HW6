import FormHandler from 'formhandler.js';

let form = new FormHandler();

form.addSubmitHandler(function (data){
  console.log(data);
});
