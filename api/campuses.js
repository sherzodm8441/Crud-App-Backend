const router = require('express').Router()
const { Campus } = require('../db')
const { Student } = require('../db')

router.get('/', async (req, res) => { //serves up all campuses
    try{
        const students = await Campus.findAll()
        res.status(200).send(students)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.get('/:id', async (req, res) =>{ //serves up a campus with the given id inclusing their students
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

router.post('/', async (req, res) =>{ //adds a campus to the campus model
    try{
        const addCampus = await Campus.create(req.body)
        res.json(addCampus)
    }catch(error){
        res.send(error.message)
    }
})


router.delete('/:id', async (req, res) =>{ //deletes a campus with the given id (including its students)
    try{
        const deleteCampus = await Campus.destroy({where : {id : req.params.id}})
        res.json(deleteCampus)
    }catch(error){
        res.status(404).send(error.message)
    }
})


module.exports = router