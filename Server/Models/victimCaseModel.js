const mongoose = require('mongoose');

const victimFormSchema = new mongoose.Schema({
  victimName: {
    type: String,
    // required: true
  },
  abuserName: {
    type: String,
    // required: true
  },
  location: {
    type: String,
    // required: true
  },
  storyText: {
    type: String,
    // required: true
  },
  storyVideoUrl: String,
  storyAudioUrl: String,
  mediaEvidence: String,
  reportedAt: {
    type: Date,
    default: Date.now
  }
});

const VictimCase = mongoose.model('victimcase', victimFormSchema);

module.exports = VictimCase;