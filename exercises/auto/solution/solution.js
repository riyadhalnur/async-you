var fs = require('fs')
  , http = require('http')
  , async = require('async');

async.auto({
  readData: function(callback) {
    fs.readFile(process.argv[2], function(err, data) {
      if (err) return callback(err);
      callback(null, data)
    });
  },

  getData: ['readData', function(callback, results) {
    http.get(results.toString().trimRight(), function(res){
      res.on('data', function(chunk) {});

      res.on('end', function(chunk){
        callback(null, chunk);
      });
    }).on('error', function(err){
      callback(err);
    });
  }],

  writeData: ['getData', function(callback, results) {
    fs.wrtieFile('done.txt', results, 'utf8', function(err) {
      if (err) return callback(err);
      callback(null, 'done!');
    });
  }]
}, function(err, results){
  if (err) return console.error(err);
  console.log(results);
});
