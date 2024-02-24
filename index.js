const express=require('express')
const app = express();
const path=require('path')
// app.get('/', (req,res)=>{
//     res.send('<h1>Tervetullo Vantaalle!</h1>')
// });

//sendig static folder
app.use(express.static(path.join(__dirname,'dist')))

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server is not response at port ${PORT}`))
