//기존 user가 환전 신청 x
const { model } = require('../../../database');
const CustomErorr = require('../../../CustomError');

const request = async (req, res, next) => {
    const { class_id, money } = req.body; //클래스가 각 반 user의 class를 찾는 용도
    const admin_name;
    const admin_id;
    //user 비교해서 같으면 CustomError
    //만약에 다르다면 chargeHistory create
    //admin_name과 admin_id 를 엑세스 토큰에서 받아왔을때 변수를 가져오고

    const user = await model.user.findOne({
        where: {
            class_id,
        },
    }).catch(err => {
        console.error(err);
        next(CustomErorr(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
    });

    if(!user) {
        next(CustomErorr(500, '유저가 존재하지 않습니다. 관리자에게 문의해주세요'));
    } else if(user.dataValues.pk === admin_id) {
        next(CustomErorr(406, '자신이 환전 신청을 할 수 없습니다. 관리자에게 문의해주세요'));
    } else {
        const histoty = await model.chargeHistory.create({
            //충전 내역을 생성함
        }).catch(err => {
            console.error(err);
            next(CustomErorr(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
        });

        if(!histoty) {
            next(CustomErorr(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
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