## ticker stream

a stream to push every given time

## usage

```js
var fs = require('fs'),
    ev = require('event-stream');
var ticker = require(__dirname);

// ex.1
fs.createReadStream(__filename)
  .pipe(ev.split())
  .pipe(ticker(100))
  .on('data',function(data){
    console.log(data+'');
  });

// ex.2
var seq = [
  {note:60, duration: 200},
  {note:61, duration: 250},
  {note:62, duration: 1000},
  {note:63, duration: 500}
];

ev.readArray(seq)
  .pipe(ticker({wait: 'duration'}))
  .on('data',function(data){
    console.log(data);
  });
```
