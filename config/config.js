module.exports={
  development: {
    username: "root",
    password: "Dayeon65!",
    database: "COWORK",
    host: "127.0.0.1",
    dialect: "Mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "Mysql"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "Mysql",
  },
}
