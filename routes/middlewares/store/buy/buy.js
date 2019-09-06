//구매
const { model } = require('../../../../database');
const CustomError = require('../../../../CustomError');
//지불해야될 돈, 자신이 가지고 있는 돈
const buy = async (req, res, next) => {
    const user_pk = req.body.user_pk;
    const moneyShouldPay = res.locals.item.moneyShouldPay;
    const now_Money = res.locals.charge.money;
    
    const user = await model.userCharge.findOne({
        where: {
            user_pk: user_pk, 
        },
    }).catch(err => {
        console.error(err);
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
    });

    if(moneyShouldPay <= now_Money) {
        user.dataValues.money = now_Money - moneyShouldPay;
        
        await user.save({ money: user.dataValues.money, }).catch(err => {
            console.error(err);
            CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요');
        });

        await model.spendHistory.create({
            
        }).catch(err => {
            console.error(err);
            next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
        });
        //spendHistory로 여기서 결제내역 표시
    }
}

module.exports = buy;