const asyncErrorHandler = require('../Utils/asyncErrorHandler')
const VictimCase = require('../Models/victimCaseModel');
const WitnessCase = require('../Models/witnessCaseModel');
const LiveReport = require('../Models/liveReportingModel'); // Import your Mongoose model

exports.victimCaseEndpoint = async (req, res) => {
  try {
    const {
      victimName,
      abuserName,
      location,
      storyText,
    } = req.body;
    const storyAudio = req.file
    const storyAudioPath = storyAudio ? storyAudio.path : null;

    const mediaEvidenceFile = req.file; // Assuming single file upload for media evidence
    const mediaEvidencePath = mediaEvidenceFile ? mediaEvidenceFile.path : null;

    console.log('Received form data:', req.body);
    console.log('Received audio file:', storyAudio);
    console.log('Received media file:', mediaEvidenceFile);


    // Add the `storyAudioUrl` and `mediaEvidencePath` fields to the `VictimCase` object
    const victimCase = await VictimCase.create({
      victimName,
      abuserName,
      location,
      storyText,
      storyVideo,
      storyAudio: storyAudioPath,
      mediaEvidence: mediaEvidencePath,
      reportedAt: new Date().toISOString(),
    });

    console.log(victimCase);

    return res.status(201).json({
      status: 'Success',
      data: {
        victimCase,
      },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      console.error('Validation Error:', error.errors);
    }

    return res.status(500).json({
      status: 'Fail',
      message: 'Internal server error. ' + error.message
    });
  }
};
exports.witnessCaseEndpoint = asyncErrorHandler(async (req, res) => {
  try {
    const { victimName, abuserName, location, typeOfAbuse, urgency, storyText, storyVideo, storyAudioUrl } = req.body;

    const mediaEvidenceFile = req.file; // Assuming single file upload for media evidence
    const mediaEvidencePath = mediaEvidenceFile ? mediaEvidenceFile.path : null;

    console.log('Received form data:', req.body);
    console.log('Received file:', mediaEvidenceFile);

    const witnessCase = await WitnessCase.create({
      victimName,
      abuserName,
      location,
      typeOfAbuse,
      urgency,
      storyText,
      storyVideoUrl,
      storyAudioUrl,
      mediaEvidence: mediaEvidencePath,
      reportedAt: new Date().toISOString(),
    });

    console.log(witnessCase);

    return res.status(201).json({
      status: 'Success',
      data: {
        witnessCase
      },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      console.error('Validation Error:', error.errors);
    }

    return res.status(500).json({
      status: 'Fail',
      message: 'Internal server error. ' + error.message
    });
  }
});

exports.viewVictimCases = asyncErrorHandler(async(req, res) => {
  try{
    const victimCases = await VictimCase.find();

    res.status(200).json({
      status:'success',
      casesCount: victimCases.length,
      data:{
        victimCases,
      }
    })
  }catch(error){
    res.status(404).json({
      status:'Fail',
      message: `An error occurred while trying to fetch victim cases ` + error.message,
  })
}
});

exports.viewWitnessCases = asyncErrorHandler(async(req, res) =>{
  try{
    const witnessCases = await WitnessCase.find();

    res.status(200).json({
      status:'success',
      casesCount: witnessCases.length,
      data:{
        witnessCases,
      }
    })
  }catch(error){
    res.status(404).json({
      status:'Fail',
      message: `An error occurred while trying to fetch witness cases ` + error.message,
  })
}
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
    console.log('liveReports:', liveReports);

    if (liveReports.length === 0) {
      return res.status(400).json({ message: 'No live reports found.' });
    }

    const updatedReports = liveReports.map((report) => {
      const { storyAudioUrl, storyVideoUrl, ...rest } = report;
    
      const audioUrl = storyAudioUrl?.replace(/\\/g, '/') ?? storyAudioUrl;
      const videoUrl = storyVideoUrl?.replace(/\\/g, '/') ?? storyVideoUrl;
    
      return {
        ...rest,
        audioUrl,
        videoUrl
      };
    });

    console.log('updatedReports:', updatedReports);

    return res.status(200).json(updatedReports);
  } catch (error) {
    console.error('Error fetching live reports:', error.message);
    return res.status(500).json({ message: 'Server error.' });
  }
});