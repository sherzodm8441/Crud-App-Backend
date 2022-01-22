const router = require('express').Router()
const { Student } = require('../db')
const { Campus } = require('../db')

router.get('/', async (req, res) => {
    try{
        const students = await Student.findAll()
        res.status(200).send(students)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.get('/:id', async (req, res) =>{
    try{
        const student = await Student.findByPk(req.params.id)
        const temp = student.toJSON()
        const campus = await Campus.findByPk(temp.campusId)
        temp['campus'] = campus
        res.status(200).send(temp)
    }catch(error){
        res.status(404).send(error.message)
    }
})


module.exports = router