const router = require('express').Router();

router.use('/', require('./controllers/charge'));

router.use('/store', require('./controllers/store'));

router.use('/history', require('./controllers/history'));

router.use('/QRcode', require('./controllers/qrcode'));

module.exports = router;