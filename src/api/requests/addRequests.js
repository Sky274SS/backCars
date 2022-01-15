const {Router} = require('express');
const {Requests} = require('../../models');

const router = Router();

router.post('/api/requests/', async (req, res) => {
    try {
        const [lastRequest] = await Requests.find().sort({id:-1}).limit(1);
        const id = lastRequest ? lastRequest.id+1 : 0;
        const newRequest = new Requests({...req.body, id});
        await newRequest.save();
        res.send(newRequest)
    }catch (e) {
        res.status(500).send(e.message);
        console.error(e);
    }
});


module.exports = router;
