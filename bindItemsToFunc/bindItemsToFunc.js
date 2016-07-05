// write a function that takes in an array and a callback:
  // return a new array comprised of function definitions
  // where when invoked, each function will be invoked with array item
  // as its argument.

var bindItemsToFunc = function(array, cb) {
  // code here
}

// usage:

var array = [1, 2, 3, 4, 5];

var toDoLater = bindItemsToFunc(array, function(item) {
  return item * 2;
});

// some time later, we can invoke the functions stored in toDoLater:

toDoLater[0](); // 2
toDoLater[4](); // 10

