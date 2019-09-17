// jwt 토큰 인증 및 유저가 있는지 확인(한빛에도 있긴 한데 여기다 쓸지 안쓸지는 정해야 함)
// 토큰 인증 됐을 경우 -> res.locals.user = decoded
// decoded = 인증된 jwt 토큰 => pk
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const CustomError = require('../../../CustomError');

dotenv.config();

const verifyToken = async (req, res, next) => {
    const access_token = req.headers.access_token;
    const access_tokenSecret = process.env.ACCESS_TOKEN_SECRET;

    try {
        const decoded = await jwt.verify(access_token, access_tokenSecret, err => {
            if(err) {
                console.error(err);
                next(CustomError(401, '권한이 없습니다'));
            }
        });
        res.locals.user = decoded;
        next();

    } catch(err) {
        console.error(err);
        next(CustomError(401, '권한이 없습니다'));
    }
}

module.exports = verifyToken;