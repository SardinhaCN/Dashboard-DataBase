const BrCode = require('./lib/br_code.js');
const QRCode = require('qrcode');

let QR_CODE_SIZE = 400;

exports.QRCD = (data) => {
  let data1 = JSON.stringify(data),
    obj = JSON.parse(data1),
    QR_CODE_SIZE = 400;

  console.log(obj);
  if (obj.key) {
    const brCode = new BrCode(obj.key, obj.amount, obj.name, obj.reference, obj.key_type, obj.city);

    let code = brCode.generate_qrcp();

    QRCode.toDataURL(code, { width: 400, height: 400 })
      .then(qrcode => {
        //res.status(304);

        let data = JSON.stringify({
          qrcode_base64: qrcode,
          code: code,
          key_type: brCode.key_type,
          key: brCode.key,
          amount: brCode.amount,
          name: brCode.name,
          city: brCode.city,
          reference: brCode.reference,
          formated_amount: brCode.formated_amount()
        }),
          obj = JSON.parse(data);
        //res.json(obj);
        console.info(obj);
      })
      .catch(err => {
        console.error(err);
      });
  } else {
    //res.status(422);
    console.log({ error: "Campo Key não presente" });
  }
}