const db = require('./database')
const Student = require('./students')
const Campus = require('./campuses')



Campus.hasMany(Student)
Student.belongsTo(Campus)


module.exports = {
    db,
    Student,
    Campus
}