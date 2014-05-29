var test = require('tape');
var ticker = require(__dirname+'/..');

var start,
    end;

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

  tick.on('readable',function(){
    start = Date.now();
  });
  
  tick.on('finish',function(){
    end = Date.now();
    // 10ms or less as error
    var it_takes = Math.floor((end-start)/10)*10;
    t.equal(wait,it_takes);
  });

  st.pipe(tick);
});

test('get object after 1000ms',function(t){
  t.plan(1);
  var wait = {data: 'abcd', duration: 1000};
  var st = testStream(wait);
  var tick = ticker({wait: 'duration'});

  tick.on('readable',function(){
    start = Date.now();
  });
  
  tick.on('finish',function(){
    end = Date.now();
    // 10ms or less as error
    var it_takes = Math.floor((end-start)/10)*10;
    t.equal(wait.duration,it_takes);
  });

  st.pipe(tick);
});
