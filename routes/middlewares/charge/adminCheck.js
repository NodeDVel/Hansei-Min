//admin check
const { model } = require('../../../database');
const CustomError = require('../../../CustomError');

const adminCheck = async (req, res, next) => {
    const user_pk = req.headers.access_token;
    const { admin } = req.body;

    const user = await model.user.findOne({
        user_pk: user_pk,
        admin: admin,
    }).catch(err => {
        console.error(err);
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
    });

    if(!user) {
        next(CustomError(500, '유저가 존재하지 않습니다. 관리자에게 문의해주세요.'));
    } else if(!user.dataValues.admin || !typeof(admin) === 'boolean') {
        next(CustomError(400, '잘못된 요청데이터입니다. 관리자에게 문의해주세요.'));
    } else if(user.dataValues.admin === false) {
        next(CustomError(401, '관리자 권한이 없습니다.'));
    } else { //admin이 ture일때 next();
        console.log('관리자 권한이 승인되었습니다. 진행해주십시오.');
        next();
    }

}

module.exports = adminCheck;