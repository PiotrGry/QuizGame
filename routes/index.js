const express = require('express');
const playerController = require('../controllers/player');
const categoryController = require('../controllers/category');
const questionController = require('../controllers/question');


const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//PLAYERS ROUTES
router.get('/players', playerController.list);

//CATEGORIES ROUTES
router.get('/categories', categoryController.list);
router.get('/categories/:id/questions', categoryController.findById);

//QUESTION ROUTER
router.get('/questions', questionController.list);
router.get('/questions/:id', questionController.findOne);

module.exports = router;