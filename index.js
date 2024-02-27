const express = require('express');
const app = express();
const path=require('path');
const logger=require('./middleware/logger');
const usersApi=require('./route/api/usersApi')
//init middleware
app.use(logger)
// body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//get static folder
app.use(express.static(path.join(__dirname,'dist')))

//get userApi
app.use('/api/users',usersApi)

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server is response at port ${PORT}`))
