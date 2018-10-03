const express = require('express');
const playerController = require('../controllers').player;
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/players', playerController.list);

module.exports = router;