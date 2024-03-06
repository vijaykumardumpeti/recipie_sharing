const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const connectToDB = require('./db/connectToDB')
const authRoutes = require('./routes/authRoutes')
const recipieRoutes = require('./routes/recipieRoutes')



const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())

dotenv.config()


app.use('/api/auth', authRoutes)
app.use('/api/recipies', recipieRoutes)




























const port = process.env.PORT

app.listen(port, ()=>{
    connectToDB()

    console.log(`server started at port: ${port}`)
})






