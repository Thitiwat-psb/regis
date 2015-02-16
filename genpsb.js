var crypto = require('crypto');

    var numbers = leftPad(randomIntInc(0,9999999999),10);

console.log(numbers);

var refid = randomValueHex(4)
var otp = leftPad(randomIntInc(0,9999),4);

console.log(refid);
console.log(otp);


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