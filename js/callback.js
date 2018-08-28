var foo = function() {
  console.log("I'm foo");
};

var bar = function(cb) {
  console.log("bar before");
  cb();
  console.log("bar after");
};

bar(foo);
