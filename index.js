const express = require('express')
const app = express()

const port = process.env.PORT || 4000;

const mongoose = require('mongoose')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mini-commerce');
  console.log('DATABASE CONNECTED!')
}

const router = require('./routes/productRoute')



app.get('/', (req, res) =>{
  res.send('welcome to the exoress API')
})


app.listen(port, ()=> console.log('listening on port '+port))

//DRY - Don't Repeat Yourself