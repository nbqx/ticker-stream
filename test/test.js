var test = require('tape');
var ticker = require(__dirname+'/..');

function testStream(d){
  var stream = new require('stream').Readable({objectMode:true});
  stream.push(d);
  stream.push(null);
  return stream
};

test('get data after 1000ms',function(t){
  t.plan(1);
  var wait = 1000;
  var st = testStream('abcd');
  var tick = ticker(wait);
  t.skip('TODO!!');
});
