const express = require('express')
const app = express()
const port = 3001

const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/greeting',(req,res,next)=>{
    // If just text => res.json()
    // If Object => res.send()
    res.json('Welcome to Node Server Side')
})

app.listen(port,()=>console.log(`app is running on port ${port}`))