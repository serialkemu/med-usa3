const express = require('express');
const casesController = require('../Controllers/casesController');
const multer = require('multer');
const router = express.Router();

const witnessStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Uploads/witnesses');
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

const victimStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Uploads/victims');
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

const uploadWitness = multer({ storage: witnessStorage });
const uploadVictim = multer({ storage: victimStorage });

router.route('/witnessCase').post(
  uploadWitness.single('mediaEvidence'),
  casesController.witnessCaseEndpoint
);

router.route('/victimCase').post(
  uploadVictim.single('mediaEvidence'),
  casesController.victimCaseEndpoint
);

router.route('/saveLiveReport').post(casesController.saveLiveReport);

module.exports = router;