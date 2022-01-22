const Sequelize = require('sequelize')
const db = require('./database')


const Campus = db.define('campuses', {
    name : {
        type: Sequelize.STRING,
        allowNull : false,
        validate: {
            notEmpty: true,
          }
    },
    imageUrl : {
        type : Sequelize.STRING,
        defaultValue : "https://cdn.wallethub.com/wallethub/posts/85332/best-worst-college-towns-in-america.png"
    },
    address : {
        type: Sequelize.STRING,
        allowNull : false,
        validate: {
            notEmpty: true,
          }
    },
    description : {
        type: Sequelize.TEXT
    }
}, { timestamps: false })


module.exports = Campus