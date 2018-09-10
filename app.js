const express = require('express');
const bodyParser = require('body-parser');
const userCon = require('./controllers/userCon');
const categoryCon = require("./controllers/categoryCon");



const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/",(req, res)=>{
    res.redirect("/categories");
    res.end();
});

app.post('/users',(req,res)=> {
    userCon.addUser(req, res);
});

app.get("/users",(req, res)=> {
    userCon.findUsers(req, res);
});

app.get("/categories",(req,res)=> {
   categoryCon.getAllCategories(req, res);
});

app.get("/categories/:category_name/question",(req,res)=> {
   categoryCon.getQuestionWithCorrectAnswer(req, res);
});


app.listen(8080);