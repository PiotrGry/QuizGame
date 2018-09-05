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
    getAllCategories(res);
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

const server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`)
});
