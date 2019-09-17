const router = require('express').Router();

router.get('/use', require('../middlewares/history/chargeLog'));//환전 내역
router.get('/use', require('../middlewares/history/spendLog')); //구매 내역

module.exports = router;