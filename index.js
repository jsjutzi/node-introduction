const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());




const bookCtrl= require('./books_controller');

app.get('/api/books', bookCtrl.read);
app.post('/api/books', bookCtrl.create);
app.put('api/books/:id', bookCtrl.update);
app.delete('/api/books/:id', bookCtrl.delete);




app.listen(3000, () => {
    console.log("I'm listening");
});
