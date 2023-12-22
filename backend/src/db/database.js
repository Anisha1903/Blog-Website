const mongoose = require('mongoose')
require('dotenv').config()


const Uri = process.env.MONGO_URL

mongoose.connect(Uri)
.then(() => {
    console.log("MongoDB Connected")
})
.catch((error) => {
    console.log("MongoDB Connection Failed",error)
})