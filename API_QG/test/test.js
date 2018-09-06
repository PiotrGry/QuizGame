const chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Category', function() {
    it('should list ALL categories on /categories GET');
    it('should return 4 elements on /categories GET');

});

it('should list ALL categories on /categories GET', function(done) {
    chai.request('http://localhost:8080')
        .get('/categories')
        .end(function(err, res){
            res.should.have.status(200);
            done();
        });
});

it('should return 4 elements on /categories GET', function(done) {
    chai.request('http://localhost:8080')
        .get('/categories')
        .end(function(err, res){
            res.body.length.should.be.equal(4);
            done();
        });
});


