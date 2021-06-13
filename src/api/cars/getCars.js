const {Router} = require('express');
const {Car} = require('../../models');

const router = Router();

router.get('/api/cars/', async (req, res) => {
    const cars = await Car.find(req.query);
    res.send(cars);
});


module.exports = router;