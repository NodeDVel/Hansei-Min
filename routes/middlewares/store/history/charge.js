const { model } = require('../../../../database');
const CustomError = require('../../../../CustomError');

const chargeHistory = async (req, res, next) => {
    const pk = req.headers.pk;

    const history = await model.chargeHistory.findAll({
        where: {
            pk: pk,
            order: [['createAt', 'DESC']],
        },
    }).catch(err => {
        console.error(err);
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요.'));
    });

    if(!history) {
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
    } else {
        res.json({
            success: true,
            data: {
                history,
            },
        });

        console.log(history);
    }
}

module.exports = chargeHistory;