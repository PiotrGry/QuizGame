const chai = require('chai');
const chaiHttp = require('chai-http');
const db = require("../models/index.js");
const server = require('../app');
const should = chai.should();
chai.use(chaiHttp);



describe('check Connection to db', ()=> {
    it("Test sequalize connection");

    it("Test sequalize connection", (done) => {
        db.sequelize.query("SELECT 1+1 AS result",{type:db.Sequelize.QueryTypes.SELECT}).then((resolve)=> {
            const expected = 2;
            chai.assert.equal(resolve[0].result, expected);
        });
        done();
    });
});


describe('root rout', ()=> {
    it('should get status 200');

    it('should get status 200', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.be.status(200);
            });
        done();
    });
});


    describe("categories",()=> {
        it("should get status 404 when requested category is missing");
        it("should get all 8 questions from category");

        it("should get status 404 when requested category is missing", (done) => {
            chai.request(server)
                .get("/categories/someStrangeSignsWhichRepresentUnexistingNameOfCategory/question")
                .end((err, res) =>{
                    res.should.be.status(404);
                });
            done()
        });

    it("should get all 8 questions from category",(done) =>{
        const expectedLength = 8;
        chai.request(server)
            .get("/categories/485af8be-c38c-4e80-a135-d75223a81817/questions")
            .end((err, res) =>{
                chai.assert.strictEqual(res.body.questions.length, expectedLength);
            });
        done();
    });


});
describe("high scores",()=>{
    it("should get 10 users in descending order");
    it("should get \"Kamil\"as best player" );

    it("should get 5 users in descending order",(done)=>{
        chai.request(server)
            .get("/highscores")
            .end((err, res) =>{
                chai.assert.strictEqual(res.body.length, 5);
            });
        done();
    });

    it("should get \"Kamil\" as best player",(done)=>{
        chai.request(server)
            .get("/highscores")
            .end((err, res) =>{
                chai.assert.strictEqual(res.body[0].player_nick, "Kamil");
            });
        done();
    });
});


