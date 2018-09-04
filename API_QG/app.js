const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');
const fs = require("fs");
const app = express();
const Pool = require('pg-pool');
const url = require('url')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

//DB CONFIGURATION
let conString = fs.readFileSync('db_config', "utf8");
const params = url.parse(conString);
const auth = params.auth.split(':');

const config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
};

const pool = new Pool(config);

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
        connectionString: conString,
        ssl: true,
    });

    pool.connect((err, client, done) => {
        if (err) throw err
        client.query('SELECT * FROM players;', (err, result) => {
            done()
            if (err) {
                console.log(err.stack)
            } else {
                res.send(result.rows[0]);
                console.log(result.rows[0])
            }
        })
    })
});

const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`)
});