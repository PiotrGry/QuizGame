const fs = require("fs");
const Pool = require('pg-pool');
const url = require('url')

let conString = fs.readFileSync('db_config', "utf8");
const params = url.parse(conString);
const auth = params.auth.split(':');

const config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
};

const pool = new Pool(config);
module.exports = pool;