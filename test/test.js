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
            done();
            chai.assert.equal(results.rows[0].solution, 2);
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


describe("Unexisting paths",()=> {

    it("should get status 404 when requested category is missing");

    it("should get status 404 when requested category is missing", (done) => {

        chai.request(address)
            .get("/categories/someStrangeSignsWhichRepresentUnexistingNameOfCategory/question")
            .end((err, res) =>{
                res.should.be.status(404);
                done()
            });
    });

});


