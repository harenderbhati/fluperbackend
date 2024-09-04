require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/insta",(req,res)=>{
    res.send("Twitter Chaiye Kya?")
})

app.get("/login",(req,res)=>{
    res.send('<h2>Hello guys please login!!!!!!</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})