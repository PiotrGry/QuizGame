const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const app = express();
const Pool = require('pg-pool');
const url = require('url');

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

app.post('/users',(req,res)=> {
    const userName = req.body.userName;

    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query('INSERT INTO players(user_nick) VALUES($1);', [userName], (err, result) => {
            done();
            if (err) {
                console.log(err.stack)
            } else {
                res.send(result);
            }
        })
    })
});

app.get("/users",(req,res)=> {

    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query('SELECT * FROM players;', (err, result) => {
            done();
            if (err) {
                console.log(err.stack)
            } else {
                res.send(result.rows[0]);
            }
        })
    })
});

app.get("/categories",(req,res)=> {

    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query('select category_name from categories\n' +
            'order by random()\n' +
            'limit 1', (err, result) => {
            done();
            if (err) {
                console.log(err.stack)
            } else {
                res.send(result.rows);

            }
        })
    })
});
app.get("/categories/:category_name",(req,res)=> {
    pool.connect((err, client, done) => {
        if (err) throw err;

        const getQuestionQuery = `select q.question_description, a.answer_text as correct_answer from questions q
        join categories c2 on q.category_id = c2.category_id
        join answers a on q.correct_answer_id = a.answer_id
        where category_name = '${req.params.category_name}'
        order by random()
        limit 1`;

        client.query(getQuestionQuery, (err, result) => {
            done();
            if (err) {
                console.log(console.error(err));
            } else {
                res.send(result.rows);

            }
        });
    })
});
// app.get("/categories/:category_name",(req,res)=> {
//     res.send(req.params.category_name);
// });
//

const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`)
});
