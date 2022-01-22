const router = require('express').Router()
const { Campus } = require('../db')
const { Student } = require('../db')

router.get('/', async (req, res) => {
    try{
        const students = await Campus.findAll()
        res.status(200).send(students)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.get('/:id', async (req, res) =>{
    try{
        const campus = await Campus.findByPk(req.params.id)
        const temp = campus.toJSON()
        const student = await Student.findAll({where : {campusId : req.params.id}})
        temp['students'] = student
        res.status(200).send(temp)
    }catch(error){
        res.status(404).send(error.message)
    }
})


module.exports = router