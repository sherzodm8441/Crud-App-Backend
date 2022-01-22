const Sequelize = require('sequelize')
const db = require('./database')


const Student = db.define('students', {
    firstName : {
        type: Sequelize.STRING,
        allowNull : false,
        validate: {
            notEmpty: true,
          }
    },
    lastName : {
        type: Sequelize.STRING,
        allowNull : false,
        validate: {
            notEmpty: true,
          }
    },
    email : {
        type: Sequelize.STRING,
        allowNull : false, 
        validate : {
            isEmail : true,
            notEmpty: true,
        }
    },
    imageUrl : {
        type : Sequelize.STRING,
        defaultValue : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
    },
    gpa : {
        type : Sequelize.DECIMAL(2,1),
        validate : {
            min : 0.0,
            max : 4.0
        }
    }
}, { timestamps: false })


module.exports = Student