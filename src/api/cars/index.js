const {Router} = require('express');
const router = Router();

router.use(require('./getCars'));
router.use(require('./addCar'));
router.use(require('./getCar'));

module.exports = router;