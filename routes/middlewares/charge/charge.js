//돈 충전
const { model } = require('../../../database');
const CustomError = require('../../../CustomError');

const request = async (req, res, next) => {
    const { money } = req.body;

    const chargeResult = await model.userCharge({
        where: {
            money: money,
        },
    }).then(result => {
        if(!result) {
            next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
        } else {
            const userMoney = result.dataValues.money;
            res.locals.charge = {
                money: userMoney,
            }
             //chargeHstory model로 환전 내역 반환
        }
    })
    .catch(err => {
        console.error(err);
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
    });

    return chargeResult;
}

module.exports = request;