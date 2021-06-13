const {Router} = require('express');
const router = Router();

router.use(require('./cars'));

module.exports = router;