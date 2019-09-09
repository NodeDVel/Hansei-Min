const { model } = require('../../../../database');
const CustomError = require('../../../../CustomError');

const buyCheck = async (req, res, next) => {
    const { store_pk } = req.body;
    const buyInfoCheck = (items) => {
        
        const info = {
            sum: 0,
            ids: '',
            items: [],
            count: '',
        }
        
        forEach(items, async item => {
            const itemCount = item.item_count; // item_count는 프론트에서 가져옴

            const result = await model.item.findOne({ 
                where: {
                    pk: item.pk,
                    store_pk,
                },
            }).catch(err => {
                console.error(err);
                next(CustomError(500, '알 수 없는 데이터베이스 오류입니다. 관리자에게 문의해주세요'));
            });

            const sum = (result.dataValues.price * itemCount);

            info.sum += sum
            info.ids += `${item.pk}/`
            info.count += `${buyItemCount}/`
            info.items.push({
                pk: item.pk,
                item_name: result.dataValues.name,
                item_price: sum,
                item_count: item.item_count,
            })
    });

    return info;

    }
    async function moneyCheck(info) {
        const moneyNow = res.locals.charge.money;
        if (moneyNow < info.sum) {
          console.log('현재 가지고 있는 원화:', moneyNow)
          console.log('현재 지불해야 하는 원화:', info.sum)
          next(CustomError(404, '현재 보유한 원화가 부족합니다.'))
        } else {
          model.store.findOne({
            where: { pk: store.pk, },
          }).then(result => {
            res.locals.item = {
              moneyShouldPay: info.sum, //지불한 돈
              class: result.dataValues.class, //어디 반에서 썼는지 
              ids: info.ids,
              items_count: info.count, //몇개나 샀는지 
              items: info.items, //어떤 아이템인지
            }
            next()
          })
        }
      }
    
      const info = await buyInfoCheck(req.body.items)
      await moneyCheck(info)
    
}

module.exports = buyCheck;
//post