const {Router} = require('express');
const router = Router();

router.use(require('./addRequests'));
router.use(require('./getRequests'));



module.exports = router;