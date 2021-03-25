const express = require('express')
const index = require('./routes')
const mongoose = require('./_connection.js') 
const Gallery=require('./models/gallery');

const app = express()
app.set('view engine','ejs')

app.use(express.static('./public'));

app.use('/',index);
//sending json object on the requested url
app.get('/gallery', (req,res)=>{
  Gallery.find((err,galleries)=>{
    res.json(galleries);
  });
  
});

//404 redirection
app.use(function(req,res){
  res.status(404);
  res.redirect('/404');
  
});

//server setup
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})