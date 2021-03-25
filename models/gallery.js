const mongoose = require('mongoose');
//schema for gallery
const gallerySchema = new mongoose.Schema({
  id: Number,
  title: String,
  description:String,
  width:Number,
  height:Number,
  pathURL:String,
  linkURL:String,
  credit:String,
  creditURL:String

});
module.exports = mongoose.model('Gallery', gallerySchema);