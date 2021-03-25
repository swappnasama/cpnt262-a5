const express = require('express')
const router = express.Router()
const config = require('../config')
const Gallery=require('../models/gallery');


router.use((req, res, next) => {
  res.locals = config
  next()
})
//router for index page
router.get('/', (req, res) => {
  res.render('pages/index', {pageTitle: "Program Schedule"})
})

//router for login page
router.get('/login', (req, res) => {
  res.render('pages/login')
})
//router for Register page
router.get('/register', (req, res) => {
  res.render('pages/register')
})

// single image render
router.get('/gallery/:id', async(req,res)=>{
  const image = await Gallery.findOne({id: req.params.id});
  res.render('pages/image', {pageTitle: image.title, image})
})
//router for page not found page
router.get('/404', (req, res) => {
  res.render('pages/404')
})

module.exports = router;