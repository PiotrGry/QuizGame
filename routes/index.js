const express = require('express');
const playerController = require('../controllers/player');
const categoryController = require('../controllers/category');
const questionController = require('../controllers/question');

const router = express.Router({mergeParams: true});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//PLAYERS ROUTES
router.get('/players', playerController.list);
router.post('/players', playerController.add);

//CATEGORIES ROUTES
router.get('/categories', categoryController.list);
router.get('/categories/:id/questions', categoryController.findById);
router.post('/categories', categoryController.add);

//QUESTION ROUTER
router.get('/questions', questionController.list);
router.get('/questions/:id', questionController.findOne);

//HIGHSCORES ROUTER
router.get('/highscores', playerController.listHighscores);

router.get('/*', function(req, res, next) {
    res.render('index', { title: '404 honey :<' });
});

module.exports = router;