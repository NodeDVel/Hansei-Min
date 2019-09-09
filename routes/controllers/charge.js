const router = require('express').Router();

router.get('/', require('../middlewares/charge/getCharge')); //충전한 돈이 body에 있을때 돈 가져오기

module.exports = router;