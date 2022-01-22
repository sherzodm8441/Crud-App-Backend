const router = require('express').Router()
const { Campus } = require('../db')

router.get('/', async (req, res) => {
    try{
        const students = await Campus.findAll()
        res.status(200).send(students)
    }catch(error){
        res.status(404).send(error.message)
    }
})


module.exports = router