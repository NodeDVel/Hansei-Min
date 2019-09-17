//환전 취소
const { model } = require('../../../database');
const CustomError = require('../../../CustomError');

const decline = async (req, res, next) => {
    const pk = req.headers.pk;
    const user_pk = req.headers.access_token;

    const history = await model.chargeHistory.findOne({
        where: {
            pk: pk,
            user_pk: user_pk,
        },
    }).catch(err => {
        console.error(err);
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요.'));
    });

    if(!history) {
        next(CustomError(402, '잘못된 요청데이터입니다.'));
    } else {
        history.destroy().then(result => {
            res.json({
                suucess: true,
                data: {
                    user_pk,
                    user_name: result.dataValues.user_nmae,
                },
            });
        }).catch(err => {
            console.error(err);
            next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
        }); 
    }
}

module.exports = decline;