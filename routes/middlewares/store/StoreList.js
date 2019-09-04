//학년 별로 부스 나누기 -> 미완성
const { model } = require('../../../database');
const CustomError = require('../../../CustomError');

const StoreList = async (req, res, next) => {
    const pk = req.headers.pk;
    const { grade } = req.params.grade;

    const store = await model.store.findAll({
        where: {
            pk: pk,
            order: ['createAt', 'DESC'],
            grade: grade,
        },
    }).then(result => {
        if(!result) {
            next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요.'));
        } else {
            
        }
        
            res.json({
                success: true,
                data: {
                    result,
                }
            });

    }).catch(err => {
        console.error(err);
        next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요.'));
    });

    console.log(store);
}

module.exports = StoreList;
