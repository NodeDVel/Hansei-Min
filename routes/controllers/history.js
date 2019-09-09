const router = require('express').Router();

router.get('/use', require('../middlewares/history/charge'));//환전 내역
router.get('/use', require('../middlewares/history/spend')); //구매 내역

module.exports = router;