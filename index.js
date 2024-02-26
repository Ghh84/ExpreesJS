const express = require('express');
const app = express();
const path=require('path')
const users=require('./users')
const logger=require('./middleware/logger')
//init middleware
app.use(logger)
// get all users
app.get('/api/users', (req,res)=> res.json(users));
//get single user
app.get('/api/users/:id', (req,res)=>{
    const found=users.some(user=>user.id===parseInt(req.params.id));
    if(found){
        res.json(users.filter(user=>user.id===parseInt(req.params.id)))
    }
    else{
        res.status(400).json(`No user with the Id ${req.params.id}`)
    }
    
})
//get static folder
app.use(express.static(path.join(__dirname,'dist')))

const PORT=process.env.PORT || 5000;


app.listen(PORT,()=>console.log(`Server is response at port ${PORT}`))
