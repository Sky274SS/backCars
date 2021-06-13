const {Router} = require('express');
const {Car} = require('../../models');

const router = Router();

router.get('/api/cars/:id/', async (req, res) => {

    try {
        const car = await Car.findOne({id: req.params.id});
        res.send(car);
    }catch (e) {
        res.status(400).send(e.message);
        console.error(e);
    }
});


module.exports = router;