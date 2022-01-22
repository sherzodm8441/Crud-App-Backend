const router = require('express').Router()
const { Student } = require('../db')
const { Campus } = require('../db')

router.get('/', async (req, res) => { //serves up all students
    try{
        const students = await Student.findAll()
        res.status(200).send(students)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.get('/:id', async (req, res) =>{ //serves up a student with the given id including their campus
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

router.post('/', async (req, res) =>{ //adds a student to the student model
    try{
        const addStudent = await Student.create(req.body)
        res.json(addStudent)
    }catch(error){
        res.send(error.message)
    }
})

router.delete('/:id', async (req, res) =>{ //deletes a student with the given id
    try{
        const deleteStudent = await Student.destroy({where : {id : req.params.id}})
        res.json(deleteStudent)
    }catch(error){
        res.status(404).send(error.message)
    }
})


module.exports = router