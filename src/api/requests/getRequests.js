const {Router} = require('express');
const {Requests} = require('../../models');

const router = Router();

router.get('/api/requests/', async (req, res) => {
    const requests = await Requests.find(req.query);
    res.send(requests);
});


module.exports = router;
