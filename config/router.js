const router = require("express").Router();
const news = require('../controllers/news');
const activity = require('../controllers/activity');
const administration = require('../controllers/administration');
const administrative_units = require('../controllers/administrative_units');
const lecturer = require('../controllers/lecturer');
const canteen = require('../controllers/canteen');
const calendar = require('../controllers/calendar');
const campuse = require('../controllers/campuse');
const faculty = require('../controllers/faculty');
const department = require('../controllers/department');
const slide = require('../controllers/slide');
const faculty_slide = require('../controllers/faculty_slide');

router.get('/', (req, res) => res.send('<h2 style="text-align:center">Agalar API v1.0</h2>'));
router.use('/news', news);
router.use('/activity', activity);
router.use('/administration', administration);
router.use('/administrative-units', administrative_units);
router.use('/lecturer', lecturer);
router.use('/canteen', canteen);
router.use('/calendar', calendar);
router.use('/campuse', campuse);
router.use('/faculty', faculty);
router.use('/department', department);
router.use('/slide', slide);
router.use('/faculty-slide', faculty_slide);

module.exports = router;