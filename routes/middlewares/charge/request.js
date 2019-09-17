//기존 user가 환전 신청 x
const { model } = require('../../../database');
const CustomError = require('../../../CustomError');

const request = async (req, res, next) => {
    const user_pk = req.headers.access_token;
    const { class_id } = req.body; //출석번호
    const admin_id = res.locals.user.decoded;
    const admin = await model.user.findOne({
        where: {
            user_pk: user_pk,
            admin: true,
        },
    }).catch(err => {
        console.error(err);
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요.'));
    });

    const user = await model.user.findOne({
        where: {
            user_pk: user_pk,
            class_id,
        },
    }).catch(err => {
        console.error(err);
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요.'));
    });

    if(!user) {
        next(CustomError(500, '유저가 존재하지 않습니다. 관리자에게 문의해주세요.'));
    } else if(user.dataValues.pk === res.locals.user.decoded) {
        next(CustomError(406, '자신이 환전 신청을 할 수 없습니다. 관리자에게 문의해주세요.')); 
    } else {
        const histoty = await model.chargeHistory.create({
            user_name: user.dataValues.name,
            user_classid: user.dataValues.class_id,
            money: user.dataValues.money,
            admin_name: admin.dataValues.name, 
            admin_id: admin_id, //prototype에서 생성은 x and admin_name.dataValues.id 
        }).catch(err => {
            console.error(err);
            next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
        });

        await user.update({
            money: parseInt(user.dataValues.money, 10) + parseInt(histoty.dataValues.money, 10),
        }).catch(err => {
            console.error(err);
            next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요.'));
        });

        if(!histoty) {
            next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
        } else {
            res.json({
                success: true,
                data: {
                    histoty,
                },
            });
        }
    
    }
}

module.exports = request;