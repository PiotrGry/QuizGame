const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');

const userCon = require('./userCon');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/users',(req,res)=> {
    const userName = req.body.userName;

    pool.connect((err, client, done) => {
        if (err) throw err
        client.query('INSERT INTO players(user_nick) VALUES($1);', [userName], (err, result) => {
            done()
            if (err) {
                console.log(err.stack)
            } else {
                res.send(result);
            }
        })
    })
});

app.get("/users",(req, res)=> {
    userCon.findUsers(req, res);
});

const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`)
});