const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/',(req,res)=> {
    res.sendFile( __dirname + "/" + "index.html")
});

app.post('/users',(req,res)=> {
    const reqBody = req.body;

    client.connect();
    client.query('INSERT INTO  users(user_nick) VALUES($1);', [reqBody.userName], (err, res) => {
        if (err) throw err;

    });
});

app.get("/users",(req,res)=> {
    let user = null;
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    });

    client.connect();
    client.query('SELECT * FROM users;', (err, result) => {
        if (err) throw err;
        for (let row of result.rows) {
             user = JSON.stringify(row);

        }
        res.send(user);
        client.end();
        res.end();
    });

});

const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`)
});