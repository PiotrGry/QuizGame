const express = require('express');
const bodyParser = require('body-parser');
const playerCon = require('./controllers/playerCon');
const categoryCon = require("./controllers/categoryCon");



const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname +'/public'));



app.get("/",(req, res)=>{
    // res.redirect(/)
   res.send("<h1>CZESC MONIS jak tam sie miewasz ?</h1>");
    res.end();
});

app.post('/users',(req,res)=> {
    playerCon.addUser(req, res);
});

app.get('/highscores', (req, res) => {
    playerCon.findHighscores(req, res);
});

app.get("/users",(req, res)=> {
    playerCon.findUsers(req, res);
});

app.get("/users/highscores",(req, res)=> {
    playerCon.findHighscores(req, res);
});

app.get("/categories",(req,res)=> {
   categoryCon.getAllCategories(req, res);
});

app.get("/categories/:category_name/question",(req,res)=> {
   categoryCon.getQuestionWithCorrectAnswer(req, res);
});

app.get("*",(req,res)=> {
    res.sendFile(__dirname + "/public/404.jpg");
});


const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`port ${port}`)
});