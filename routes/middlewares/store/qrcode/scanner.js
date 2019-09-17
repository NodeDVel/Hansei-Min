//admin에서 가능하게 하기
const CustomError = require('../../../../CustomError');
const qrScanner = require('qr-code-scanner');

const scanner = async (req, res, next) => {
    //admin check 뒤에 스캔
    const user_pk = req.headers.access_token;

    const user = model.user.findOne({
        where: {
            user_pk: user_pk,
            admin: true,
        }, 
    }).catch(err => {
        console.error(err);
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
    });

    if(!user) {
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요.'));
    } else if(user.dataValues.admin === false) {
        next(CustomError(401, '권한이 없습니다.'));
    } else { //admin이 true 일때 
        qrScanner.initiate({
            
        });
    }
}

module.exports = scanner; //qrcode_scanner