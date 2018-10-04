const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const  pool = require("../db/db");

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


describe("categories",()=> {
    it("should get status 404 when requested category is missing");
    it("should get all 8 questions from category");

    it("should get status 404 when requested category is missing", (done) => {
        chai.request(address)
            .get("/categories/someStrangeSignsWhichRepresentUnexistingNameOfCategory/question")
            .end((err, res) =>{
                res.should.be.status(404);
                done()
            });
    });

    it("should get all 8 questions from category",(done) =>{
        const expectedLengh = 8;
        chai.request(address)
            .get("/categories/zwierzeta/question")
            .end((err, res) =>{
                chai.assert.strictEqual(res.body.length, expectedLengh);
                done();
            });
    });


});
describe("high scores",()=>{
    it("should get 10 users in descending order");
    it("should get \"Kamil\"as best player" );

    it("should get 10 users in descending order",(done)=>{
        chai.request(address)
            .get("/highscores")
            .end((err, res) =>{
                chai.assert.strictEqual(res.body.length, 10);
                done();
            });
    });
    it("should get \"Kamil\" as best player",(done)=>{
        chai.request(address)
            .get("/highscores")
            .end((err, res) =>{
                chai.assert.strictEqual(res.body[0]._nick, "Kamil");
                done();
            });
    });
});


