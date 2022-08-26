const Sequelize=require('sequelize');

//환경,용도에 따라 참조-> NODE_ENV
const env=process.env.NODE_ENV||'development';
const config=require('../config/config')[env];

const{
  username,password,database,host,dialect,
}= config;
const sequelize = new Sequelize(database,username,password,{
  host,
  dialect,
});

const Member=require('./member')(sequelize,Sequelize.DataTypes);

const db={};
db.Member=Member;

module.exports=db;