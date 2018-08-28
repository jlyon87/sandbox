var fetchData = function () {
  return new Promise(function (resolve, reject) {
  //Fake an async action with a timeout.
    setTimeout(function () {
      var data = {
        users: [
          { name: 'Jack', age: 22 },
          { name: 'Tom', age: 21 },
          { name: 'Isaac', age: 21 },
          { name: 'Iain', age: 20 }
        ]};

      resolve(data);
    }, 250);
  });
};

var returnOne = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(1);
    }, 1000);
  });
};

fetchData()
  .then(function(res) {
    console.log("res", res);
  });

// Chain Logic in multiple promises.
returnOne()
  .then(function(res) {
    console.log("res", res); // -> 1
    return res * 2;
  })
  .then(function(res) {
    console.log("res", res); // -> 2
    return res * 2;
  })
  .then(function(res) {
    console.log("res", res); // -> 4
    return res * 2;
  })
  .then(function(res) {
    console.log("res", res); // -> 8
  });
