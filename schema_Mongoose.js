'use strict';

var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var articleSchema = new Schema({
    Code:  String,
    Designation: String,
    prix:   String
    
  });

  module.exports = mongoose.model('tabArt', articleSchema);