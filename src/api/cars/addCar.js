const {Router} = require('express');
const {Car} = require('../../models');

const router = Router();

router.post('/api/cars/', async (req, res) => {
    try {
        const [lastCar] = await Car.find().sort({id:-1}).limit(1);
        const id = lastCar ? lastCar.id+1 : 0;
        const newCar = new Car({...req.body, id});
        await newCar.save();
        res.send(newCar)
    }catch (e) {
        res.status(400).send(e.message);
        console.error(e);
    }
});


module.exports = router;
