const express = require('express');
const casesController = require('../Controllers/casesController');
const multer = require('multer');
const path = require('path'); // Import the path module
const router = express.Router();

const audioStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = './Uploads/audio'.replace(/\\/g, '/');
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    // Generate a unique filename to avoid overwriting
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const originalName = file.originalname;
    const fileExtension = originalName.split('.').pop();
    const fileName = `${uniqueSuffix}.${fileExtension}`;
    cb(null, fileName);
  }
});

const mediaStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = './Uploads/media'.replace(/\\/g, '/');
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    // Generate a unique filename to avoid overwriting
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const originalName = file.originalname;
    const fileExtension = originalName.split('.').pop();
    const fileName = `${uniqueSuffix}.${fileExtension}`;
    cb(null, fileName);
  }
});

const uploadAudio = multer({ storage: audioStorage });
const uploadMedia = multer({ storage: mediaStorage });

router.route('/victimCase').post(
  uploadAudio.single('storyAudio'),
  uploadMedia.single('mediaEvidence'),
  casesController.victimCaseEndpoint
);

// Example routes using multer middleware
router.route('/witnessCase').post(
  uploadMedia.single('mediaEvidence'),
  casesController.witnessCaseEndpoint
);

router.route('/saveLiveReport').post(casesController.saveLiveReport);

module.exports = router;
