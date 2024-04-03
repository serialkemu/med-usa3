const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  audioUrl: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  // Add other fields as needed for your report model
}, { timestamps: true });

const LiveReport = mongoose.model('LiveReport', reportSchema);

module.exports = LiveReport;
