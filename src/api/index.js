const {Router} = require('express');
const router = Router();

router.use(require('./portfolio'));
router.use(require('./services'));
router.use(require('./stocks'));
router.use(require('./action'));
router.use(require('./advantage'));
router.use(require('./requests'));


module.exports = router;