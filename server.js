const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
// const { port } = require('pg/lib/defaults')

const app = express()
const PORT = 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// app.get('/', (req, res) => {
//     res.send("hello world")
// })

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))