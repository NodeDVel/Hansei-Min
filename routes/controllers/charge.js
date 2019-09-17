const router = require('express').Router();

router.get('/', require('../middlewares/charge/getCharge')); //충전한 돈이 body에 있을때 돈 가져오기

router.post('/request', require('../middlewares/charge/request'));

router.get('/decline', require('../middlewares/charge/decline'));

module.exports = router;