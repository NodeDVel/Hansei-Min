const router = require('express').Router();

router.get('/', require('../../routes/middlewares/jwt/verifyToken'));

module.exports = router;