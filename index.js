const app = require('express')();



//on get request response with hello world message
app.get('/', function(req, res) {
    return 'Hello World';

});






//listen on port 3000
app.listen(3000);