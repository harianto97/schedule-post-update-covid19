require('./config/db.conn')
const express = require('express')
const port = process.env.PORT || 3001
const dataCovidRouter = require('./app/routes/datacovid')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', dataCovidRouter)


app.listen(port, () => console.log(`app is running on port : ${port}`))
