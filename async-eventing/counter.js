/*
 *  Write a function that returns an instance of a counter. 
 *
 *  The counter should fire a callback, when it has been incremented
 *  a user-defined number of times.
 */

var fireAt3 = Counter(3, function() {
  console.log('fired 3 times!');
});

setTimeout(fireAt3.plus.bind(fireAt3), 2000);
setTimeout(fireAt3.plus.bind(fireAt3), 3000); // three seoncds later: "fired 3 times!"
setTimeout(fireAt3.plus.bind(fireAt3), 1000);

function Counter(limit, cb) {
  this.limit = limit;
  this.cb = cb;
}

Counter.prototype.plus = function() {
  this.count++;
  if (this.count <= this.limit) {
    cb();
  }
};
