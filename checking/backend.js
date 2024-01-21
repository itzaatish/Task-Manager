const express = require('express')
const app = express()

const testObj = {
    "succes": true ,
    'data' : "this is suppose to be data part 2"
}

app.get('/',(req,res)=>{
    res.status(200).json(testObj)
})

port = 8000

app.listen(port,()=>{ console.log(`Server is listening at port :${port}`)})