const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const  pool = require("../db/dbConfigNoPoolConnection");

const address = 'http://localhost:8080';
chai.use(chaiHttp);


describe('dbConnection', ()=> {
    it('Database connection');


    it('Database connection', (done) => {
        pool.query('SELECT 1 + 1 AS solution', (error, results) => {
            if (error) throw error;
            chai.assert.equal(results.rows[0].solution, 2);
            done();
        });
    });
});


describe('root rout', ()=> {
    it('should get status 200');

    it('should get status 200', (done) => {
        chai.request(address)
            .get('/')
            .end((err, res) => {
                done();
                res.should.be.status(200);
            })
    });
});



