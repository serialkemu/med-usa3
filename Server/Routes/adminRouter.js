const express = require('express');
const casesController = require('../Controllers/casesController');
const router = express.Router();

router.route('/liveReports').get(casesController.getLiveReports)
router.route('/victimCases').get(
  casesController.viewVictimCases);
router.route('/witnessCases').get(
    casesController.viewWitnessCases);

module.exports = router;