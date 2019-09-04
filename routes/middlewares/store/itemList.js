//각 부스 당 물품
const { model } = require('../../../database');
const CustomError = require('../../../CustomError');

const itemList = async (req, res, next) => {
    const store_id = req.params.store_id;

    const items = await model.item.findAll({
        where: {
            store_pk: store_id,
            order: ['createAt', 'DESC'],
            canbuy: true,
        },
    }).then(result => {
        if(!result) {
            next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요.'));
        } else {
            res.json({
                success: true,
                data: {
                    result,
                }
            });
        }
    }).catch(err => {
        console.error(err);
        next(CustomError(500,'알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요.'));
    });

    console.log(items);
}

module.exports = itemList;