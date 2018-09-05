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

app.get("/categories",(req,res)=> {

    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query('SELECT category_name FROM categories;', (err, result) => {
            done();
            if (err) {
                console.log(err.stack)
            } else {
                res.send(result.rows);

            }
        })
    })
});

const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`)
});