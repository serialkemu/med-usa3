const asyncErrorHandler = require('../Utils/asyncErrorHandler');
const VictimCase = require('../Models/victimCaseModel');
const WitnessCase = require('../Models/witnessCaseModel');
const LiveReport = require('../Models/liveReportingModel'); // Import your Mongoose model

exports.victimCaseEndpoint = async (req, res) => {
  // Your victimCaseEndpoint implementation...
};

exports.witnessCaseEndpoint = asyncErrorHandler(async (req, res) => {
  // Your witnessCaseEndpoint implementation...
});

exports.viewVictimCases = asyncErrorHandler(async(req, res) => {
  // Your viewVictimCases implementation...
});

exports.viewWitnessCases = asyncErrorHandler(async(req, res) =>{
  // Your viewWitnessCases implementation...
});

exports.saveLiveReport = asyncErrorHandler(async (req, res) => {
  try {
    const { storyVideoUrl, storyAudioUrl } = req.body;
    
    // Process the received URLs (e.g., save them to a database, perform further operations)
    
    console.log('Received video URL:', storyVideoUrl);
    console.log('Received audio URL:', storyAudioUrl);
    
    // Create a new LiveReport object with the received URLs and current timestamp
    const liveReport = await LiveReport.create({
      storyVideoUrl,
      storyAudioUrl,
      reportedAt: new Date().toISOString(),
    });

    console.log(liveReport)

    return res.status(201).json({
      status: 'Success',
      message: 'Live report saved successfully',
      data: {
        liveReport
      },
    });
  } catch (error) {
    console.error('Error saving live report:', error.message);
    return res.status(500).json({
      status: 'Fail',
      message: 'Internal server error. ' + error.message
    });
  }
});

exports.getLiveReports = asyncErrorHandler(async (req, res) => {
  try {
    const liveReports = await LiveReport.find({});
    if (liveReports.length === 0) {
      return res.status(400).send('No live reports found.');
    }

    return res.status(200).send(liveReports);
  } catch (error) {
    return res.status(500).send('Server error.');
  }
});
