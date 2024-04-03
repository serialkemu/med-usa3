const mongoose = require('mongoose');

const liveReportSchema = new mongoose.Schema({
  storyVideoUrl: String,
  storyAudioUrl: String,
  reportedAt: {
    type: Date,
    default: Date.now
  }
  // Add other fields as needed for your report model
});

const LiveReport = mongoose.model('LiveReport', liveReportSchema);

module.exports = LiveReport;
