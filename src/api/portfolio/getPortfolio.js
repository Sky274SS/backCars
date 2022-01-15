const {Router} = require('express');
const {Portfolio} = require('../../models');

const router = Router();

router.get('/api/portfolio/', async (req, res) => {
    const portfolio = await Portfolio.find(req.query);
    res.send(portfolio);
});


module.exports = router;