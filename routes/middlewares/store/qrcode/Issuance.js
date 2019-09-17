//qrcode 발급
const QRCode =  require('qrcode');
const CustomError = require('../../../../CustomError');

const issuance = async (req, res, next) => { //post 형식 params
    const paramsCode = req.params.qrcode;

    QRCode.toDataURL(paramsCode, (err, url) => {
        if(err) {
            next(CustomError(400, '잘못된 요청데이터입니다.'));
        } else {
            const data = url.replace(/.*,/,'');
            const img = new Buffer(data, 'base64'); //qrcode 암호
            console.log(img);
            res.end(img);
        }
    });
}

module.exports = issuance;