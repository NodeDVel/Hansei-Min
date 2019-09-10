//돈 충전된 거를 가져오는 코드
const { model } = require('../../../database');
const CustomError = require('../../../CustomError');

const getCharge = async (req, res, next) => {
    const { money } = req.body;

    const result = await model.user.findOne({
        where: {
            money: money,
        },
    }).catch(err => {
        console.error(err);
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
    });

    if(!result) {
        next(CustomError(500,'알 수 없는 데이터베이스 오류입니다. 괸리자에게 문의해주세요'));
    } else {
        const userMoney = result.dataValues.money;

        res.locals.charge = {
            money: userMoney,
        }

        res.json({
            success: true,
            data: {
                userMoney,
            }
        })
        
    }
}

module.exports = getCharge;
//get