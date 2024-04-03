const mongoose = require('mongoose');

const CyberbullyReport = new mongoose.Schema({
    bullyName: {
        type: String,
        required: true 
    },
    bullyLink: {
        type: String,
        required: true
    },
    mediaEvidence: {
      type: Object,
      required: true,
    },
  });
  
  const Cyberbully = mongoose.model('Cyberbully', CyberbullyReport);
  module.exports = Cyberbully;