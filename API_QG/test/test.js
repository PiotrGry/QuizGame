const assert = require('chai').assert;
const categoryCon = require("../controllers/categoryCon");
const request = require("request");



describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});



const options = {
    method: 'GET',
    url: 'http://localhost:8080/categories',
    headers:
        {
            'postman-token': 'f37dc117-d272-78a2-65d9-4d64737d16fb',
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded'
        },
    form: false
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    assert.equal(body,categoryCon.getAllCategories() );
});