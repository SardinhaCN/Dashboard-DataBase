const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//app.use(bodyParser.json());

const qr = require('./QrCode.js');

app.get("/api/:data", function(req, res) {
  let data = req.param;
  console.log(data)

  let data1 = JSON.stringify(data),
    obj = JSON.parse(data1);

  const client = qr.QRCD({
    key: key,
    amount: 'R$'+ obj.amount,
    name: obj.name,
    reference: obj.reference,
    key_type: obj.key_type,
    city: obj.city,
  });



  if (!client) return res.status(204).json();

  res.json(client);
});

app.post("/clients", bodyParser.json(), function(req, res) {
  console.log(req.body)
  const { key, amount, name, reference, key_type, city } = req.body;

  const client = qr.QRCD({
    key: key,
    amount: 'R$'+ amount,
    name: name,
    reference: reference,
    key_type: key_type,
    city: city,
  });

  res.json(client);
});

app.listen(3000, function() {
  console.log("Server is running");
});