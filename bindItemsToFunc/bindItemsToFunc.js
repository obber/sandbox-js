// write a function that takes in an array and a callback:
//
// return a new array comprised of function definitions of the callback
// where when invoked, each callback will be invoked with array item
// as its this context:

var bindItemsToFunc = function(array, cb) {
  // code here
}

// usage:
var array = [{
  this.name = 'sally'
}, {
  this.name = 'joe'
}, {
  this.name = 'bob'
}];
var toDoLater = bindItemsToFunc(array, function(item) {
  return 'hello ' + this.name;
});

// some time later, we can invoke the functions stored in toDoLater:
toDoLater[0](); // 'hello sally'
toDoLater[1](); // 'hello joe'
toDoLater[2](); // 'hello bob'
