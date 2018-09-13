const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const  pool = require("../db/dbConfigNoPoolConnection");



pool.query('SELECT 1+1 as solution', (error, results) => {
    if (error) throw error;
    console.log(results.rows[0].solution);
});

chai.use(chaiHttp);

describe('app', ()=> {
    it('should get status 200');

    it('should get status 200', (done) => {
        chai.request('http://localhost:8080')
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
});

describe('dbConnection', ()=> {
    it('should receive one row with record: 2 ');
    it('should get not 2');

    it('should receive one row with record: 2', () => {

        pool.query('SELECT 1 + 1 AS solution', (error, results) => {
            if (error) throw error;
            chai.assert.equal(results.rows[0].solution, "1");
        });
    });

    it("should get not 2 ",()=>{
      let  result = 2+2 ;
        chai.assert.notEqual(result, 2, "result is 4");
    })
});
