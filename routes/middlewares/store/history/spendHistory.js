//결제 내역
const { model } = require('../../../../database');
const CustomError = require('../../../../CustomError');

const spendHistory = async (req, res, next) => {
    const pk = req.headers.pk;

    const history = await model.spendHistory.findAll({ //buy.js에서 생성한 spendHistory 가져오기 
        where: {
            pk: pk,
            order: [['createAt', 'DESC']],
        },
    }).catch(err => {
        console.error(err);
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
    });

    if(!history) {
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
    } else {
        res.json({
            history,
        });
    }
}

module.exports = spendHistory; //구매내역