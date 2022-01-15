const {Router} = require('express');
const router = Router();

router.use(require('./getPortfolio'));



module.exports = router;