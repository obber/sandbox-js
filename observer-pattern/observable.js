var newObserver = function() {

  var onNext = function() {

  };

  var onCompleted = function() {

  };
  
  return {
    onNext: onNext,
    onCompleted: onCompleted
  }
};

var Observable = {
  create: function(fn) {

  }
}

var source = Observable.create(function(observer) {
  var id = setTimeout(function() {
    observer.onNext(42);
    observer.onCompleted();
  }, 1000);

  console.log('started');

  return function() {
    console.log('disposal called');
    clearTimeout(id);
  };
});

// Observable.create() returns an object with a subscribe method

var sub = source.subscribe(function(x) {
  console.log('next ' + x);
}, function(err) {
  console.error(err);
}, function() {
  console.info('done');
});

// source.subscribe() returns an object with a dispose function
setTimeout(function() {
  sub.dispose();
}, 500);
