const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db/db');
const userCon = require('./controllers/userCon');
const categoryCon = require("./controllers/categoryCon");
const moment = require('moment');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));


app.post('/users',(req,res)=> {
    userCon.addUser(req, res);
});

app.get("/users",(req, res)=> {
    userCon.findUsers(req, res);
});

app.get("/categories",(req,res)=> {
   categoryCon.getAllCategories(req, res);

});

app.get("/categories/:category_name",(req,res)=> {
   categoryCon.getQuestionWithCorrectAnswer(req, res);
});

const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    var time = moment().format('h:mm:ss a');

    console.log(`Example app listening at http://${host}:${port} at ${time}`)
});
