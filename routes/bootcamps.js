const express = require('express');

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  // bootcampPhotoUpload                    NOT IN USE YET
} = require('../controllers/bootcamps');

const Bootcamp = require('../models/Bootcamp');

/*
// Include other resource routers
const courseRouter = require('./courses');
const reviewRouter = require('./reviews');
*/

const router = express.Router();

/*
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);
router.use('/:bootcampId/reviews', reviewRouter);
*/

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

/*
router
  .route('/:id/photo')
  .put(protect, authorize('publisher', 'admin'), bootcampPhotoUpload);
*/

router.route('/').get(getBootcamps).post(createBootcamp);
// .get(advancedResults(Bootcamp, 'courses'), getBootcamps)
// .post(protect, authorize('publisher', 'admin'), createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);
// .put(protect, authorize('publisher', 'admin'), updateBootcamp)       NOT IN USE YET
// .delete(protect, authorize('publisher', 'admin'), deleteBootcamp);

module.exports = router;
