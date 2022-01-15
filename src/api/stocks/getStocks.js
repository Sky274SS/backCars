const {Router} = require('express');
const {Stocks} = require('../../models');

const router = Router();

router.get('/api/stocks/', async (req, res) => {
    const stocks = await Stocks.find(req.query);
    res.send(stocks);
});


module.exports = router;
