var fs = require('fs');
var cp = require('child_process');

cp.exec('python test.py', function(err, stdout, stderr) {
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
});
