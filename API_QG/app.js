const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
    });
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
app.get("/users",(req,result)=> {
    let user = null;
    client.connect();
    client.query('SELECT * FROM users;', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
             user = JSON.stringify(row);

        }
        result.send(user);
        client.end();
        result.end();
    });

});

const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`)
});