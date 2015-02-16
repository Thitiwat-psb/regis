var express = require('express')
var app = express()
var cardLib = require('./routing')


checkToken = function(req, res, next){
  var token = req.headers.token;
  if(token == 'hunt'){
    next();
  }else{
    res.status(403).send('Permission Denined!');
  }
}

// app.use(checkToken);
app.use(require('body-parser')());

app.post('/api/requestOTP', cardLib.create);
app.put('/api/confirmOTP', cardLib.update);
app.get('/api/card/:id', cardLib.get);
app.delete('/api/card/:id', cardLib.delete);

app.get('*', function (req, res) {
  // res.redirect('http://www.paysbuy.com');
  res.status(404).send('Invalid request');
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})