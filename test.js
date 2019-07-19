var translator = require('./translator');

translator('en', 'fr', 'hello', response => {
  console.log(JSON.stringify(response));
});
