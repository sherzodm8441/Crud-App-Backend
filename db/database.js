const { Sequelize } = require('sequelize');


//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')  <-- template

const db = new Sequelize(
    'postgres://postgres:postgres@localhost:5432/crudapp_db',
    {logging : false}
);

module.exports = db


//TEST CONNECTION

// db.authenticate().then(() => {
//     console.log("Connection successful!");
// }).catch((err) => {
//     console.log(err)
// });


