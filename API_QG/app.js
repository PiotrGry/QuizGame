const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db/db');

const userCon = require('./controllers/userCon');

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

const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`)
});