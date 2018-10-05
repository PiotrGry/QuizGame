const express = require('express');
const playerController = require('../controllers/player');
const categoryController = require('../controllers/category');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//PLAYERS ROUTES
router.get('/players', playerController.list);

//CATEGORIES ROUTES
router.get('/categories', categoryController.list);

module.exports = router;