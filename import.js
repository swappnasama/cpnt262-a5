
const mongoose = require('./_connection.js') 

// Import  data
const gallerydb = require(`./seeds/gallery.js`);

// Define model
const Gallery = require(`./models/gallery.js`);


Gallery.insertMany(gallerydb, function(error, gallery) {
  console.log('Data import completed.')
 // mongoose.connection.close();
});