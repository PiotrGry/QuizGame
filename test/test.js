const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('app', ()=> {
    it('should get status 200');
});

it('should get status 200', (done)=> {
    chai.request('http://localhost:8080')
        .get('/')
        .end((err, res)=>{
            res.should.have.status(200);
            done();
        });
});

