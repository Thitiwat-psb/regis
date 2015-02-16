var request = require('request');
var async = require('async');

var host = "http://localhost:3000";

var tasks = []

tasks.push(function(callback){
  console.log('/api/card if url is invalid should return 404')
  request.post(host+'/api/card/xxxx', function(req, res, body){
    if(res.statusCode == 404){
      console.log('ok');
    }else{
      console.log('fail');
    }
    callback()
  });
});

tasks.push(function(callback){
  console.log('/api/card create should return 500 if no data')
  request.post(host+'/api/card', function(req, res, body){
    if(res.statusCode == 500){
      console.log('ok')
    }else{
      console.log('error', res.statusCode);
    }
    callback()
  });
})

async.waterfall(tasks ,function(err, result){
  console.log('done!')
});

// request.post(host+'/api/card', function(req, res, body){
//   if(res.statusCode == 404){
//     console.log('ok');
//   }else{
//     console.log('fail');
//   }

