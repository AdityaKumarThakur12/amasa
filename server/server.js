require('dotenv').config();
const express = require('express');
const ConnectDB = require('./config/db');
const restaurentRouter = require('./Routes/restuarent')
const app = express();

app.use(express.json());

app.use('/', restaurentRouter)


ConnectDB();


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('server is Connected 🛜')
})