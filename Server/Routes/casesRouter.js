const express = require('express');
const casesController = require('../Controllers/casesController');
const multer = require('multer');
const router = express.Router();

// const witnessStorage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './Uploads/witnesses');
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     }
//   });

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
  
  const uploadVictim = multer({ storage: victimStorage });

  router.route('/victimCase').post(
    uploadVictim.single('mediaEvidence'),
    casesController.victimCaseEndpoint
  );

// router.route('/witnessCase').post(
//   uploadWitness.array('mediaEvidence', 10),
//   casesController.witnessCaseEndpoint
// );

// Define route for storing audio recording
router.route('/saveLiveReport').post(casesController.liveReport);

module.exports = router;