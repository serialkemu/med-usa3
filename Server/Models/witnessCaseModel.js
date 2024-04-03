const mongoose = require('mongoose');

const witnessCaseSchema = new mongoose.Schema({
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
  },urgency: {
    type: Number,
    min: 1,
    max: 5,
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

  

const WitnessCase = mongoose.model('Witness_Case', witnessCaseSchema);

module.exports = WitnessCase;