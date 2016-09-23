// write a function that takes in an array and a callback:
  // return a new array comprised of function definitions
  // where when invoked, each function will be invoked with array item
  // as its argument.

var bindItemsToFunc = function(array, cb) {
  var result = [];
  
  for (var i = 0; i < array.length; i++) {
    result.push(cb.bind(array[i]));
  }

  return result;
}

// using map:

var bindItemsToFunc = function(array, cb) {
  return array.map(function(item) {
    return cb.bind(item);
  });
}

