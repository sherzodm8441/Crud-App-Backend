const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { db } = require('./db')



const app = express()
const PORT = 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use('/api', require('./api/index'))

db.sync().then(() => {
    console.log("Successfully connected to db") 
}).catch((error) => {
    console.log(error)
})

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))


//ENDPOINTS

// http://localhost:3000/api/campuses/
// http://localhost:3000/api/students/

// http://localhost:3000/api/campuses/id
// http://localhost:3000/api/students/id