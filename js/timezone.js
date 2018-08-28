var now = new Date();
var epoch = new Date(0);

var mNow = moment(now);
var mEpoch = moment(epoch);

console.log("New York, now: ", mNow.tz("America/New_York").format("ddd, MMM Do, YYYY hh:mm a z"));
console.log("Los Angeles, now: ", mNow.tz("America/Los_Angeles").format("ddd, MMM Do, YYYY hh:mm a z"));
console.log("The Epoch: ", mEpoch.tz("UTC").format("ddd, MMM Do, YYYY HH:mm a zZ"));
