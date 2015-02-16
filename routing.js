var crypto = require('crypto');

var profiles = []

conotp = function (req, res) {
	//res.send('Welcome, ' + req.body.username);

console.log(profiles);
}

reqotp = function (req, res) {
  var profile = {}
  var gen = {}
  if(!req.body.mobileno || req.body.mobileno==''){
    res.status(500).send('need field `mobileno`');
    return null
  }
  if(!req.body.idcard || req.body.idcard==''){
    res.status(500).send('need field `idcard`');
    return null
  }

  profile.id = leftPad(randomIntInc(0,9999999999),10);
  profile.mobileno = req.body.mobileno;
  profile.idcard = req.body.idcard;
  profiles.push(profile);

  gen.refid = randomValueHex(4)
  gen.otp = leftPad(randomIntInc(0,9999),4);

  res.json(gen);
  console.log(profiles);
}

getProfile = function(req, res){
  var id = req.params.id;
//console.log(profiles.indexOf(id));
//console.log(profiles[1].id);

//profile = profiles.slice(parseInt(id)-1,1)
//profile = profiles.slice(parseInt(id)-1,parseInt(id))
//console.log('getProfile '+ id);
//profile.forEach(function(id) {
  //console.log(profile);
//});


for (var i in profiles) {
     if (profiles[i].id == id){
    console.log('PSBID = ' + profiles[i].id);
    console.log('MobileNO = ' + profiles[i].mobileno);
    console.log('IDCard = ' + profiles[i].idcard);
   }
}

  profile = profiles.slice(parseInt(i),parseInt(i)+1)

  res.json(profile);
}

var plugin = {
  create: reqotp,
  update: conotp,
  delete: function(req, res){
    var id = req.params.id;
    profile = profiles.splice(parseInt(id)-1,1)
    console.log('deleteProfile'+ profile.length);
    console.log(profiles);
    res.json(profile);
  }
}
plugin.get = getProfile

// exporting
module.exports = plugin



function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

function randomValueHex (len) {

var chars =  "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ";

 var rnd = crypto.randomBytes(len)
        , value = new Array(len)
        , len = chars.length;

    for (var i = 0; i < len; i++) {
        value[i] = chars[rnd[i] % len]
    };

    return value.join('');
}

function leftPad (str, length) {
    str = str == null ? '' : String(str);
    length = ~~length;
    pad = '';
    padLength = length - str.length;

    while(padLength--) {
        pad += '0';
    }

    return pad + str;
}


