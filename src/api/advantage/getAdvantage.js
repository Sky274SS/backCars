const {Router} = require('express');
const {Advantage} = require('../../models');

const router = Router();

router.get('/api/advantage/', async (req, res) => {
    const advantage = await Advantage.find(req.query);
    res.send(advantage);
});


module.exports = router;