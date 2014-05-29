var through2 = require('through2');

module.exports = function(wait){
  var t;
  var wait = wait || 1000;

  return through2.obj(function(ch,enc,next){
    var self = this;
    var w = (typeof wait === 'object')? ch[wait.wait] : wait;
    self.push(ch);
    t = setTimeout(function(){
      next();
    },w);
  });
};
