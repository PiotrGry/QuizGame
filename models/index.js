'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

// console.log(config.use_env_variable);
// console.log(env)
console.log(process.env);
let sequelize;
if(config.use_env_variable){
  console.log("wchodzi")
    var db_info = process.env["DATABASE_URL"].match(/([^:]+):\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
    config.dialect=db_info[1];
    config.username=db_info[2];
    config.password=db_info[3];
    config.host=db_info[4];
    config.port=db_info[5];
    config.database=db_info[6];
} else {
  console.log("niee")
}

sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
