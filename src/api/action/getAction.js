const {Router} = require('express');
const {Action} = require('../../models');

const router = Router();

router.get('/api/action/', async (req, res) => {
    const action = await Action.find(req.query);
    res.send(action);
});


module.exports = router;