const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require("./routes/auth")

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('db connected'))
    .catch((err) => {console.log(err)});


app.use(express.json())
app.use("/api/", authRouter)

app.get('/', (req, res) => res.send('Hello World'))
app.listen(process.env.PORT || 5001 , console.log(`Example app on port ${process.env.PORT}`))
