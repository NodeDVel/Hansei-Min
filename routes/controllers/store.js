const router = require('express').Router();

router.get('/', require('../middlewares/store/List/StoreList')); //학년 별로 부스
router.get('/', require('../middlewares/store/List/itemList')); //부스 별로 물품

router.post('/buy', require('../middlewares/store/buy/buy')); //물품 샀을 때 돈 감소
router.post('/buy', require('../middlewares/store/buy/buyCheck'));


module.exports = router;