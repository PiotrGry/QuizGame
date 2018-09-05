const categoryDao = require('../db/categoryDAO');
const categoryCon = {};

categoryCon.getAllCategories = function (req, res) {
    categoryDao.getAllCategories().then((result)=>{
        res.json(result);
        res.end();
    });
};

module.exports = categoryCon;