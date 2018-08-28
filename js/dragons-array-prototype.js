// Here are some handy Array.prototype methods.
// Also known as higher order functions.

// An Array of Dragon objects for us to work with.
var dragons = [
  { name: "Fluffykins", color: "red", size: "tiny", type: "fire" },
  { name: "Puff", color: "purple", size: "medium", type: "time" },
  { name: "Randy", color: "green", size: "small", type: "nature" },
  { name: "Smaug", color: "black", size: "large", type: "fire" },
  { name: "Draco", color: "green", size: "medium", type: "fire" },
  { name: "Bahamut", color: "black", size: "large", type: "fire" },
  { name: "Bigsby", color: "blue", size: "small", type: "ice" },
  { name: "Tiamat", color: "black", size: "large", type: "fire" },
  { name: "Alduin", color: "gray", size: "large", type: "fire" },
  { name: "Dracolich", color: "white", size: "large", type: "undead" },
  { name: "Spyro", color: "purple", size: "tiny", type: "fire" }
];

// Make an Array of Dragon Names
var dragonNames = dragons.map(function(dragon) {
  return dragon.name;
});

// Make an Array of all Large Fire Dragons
var largeFireDragons = dragons.filter(function(dragon) {
  return dragon.size === "large" && dragon.type === "fire";
});

// Make an Array of Purple Dragon Names
// Note: We can chain Array.prototype methods together
var purpleDragonNames = dragons
  .filter(function(dragon) {
    return dragon.color === "purple";
  })
  .map(function(dragon) {
    return dragon.name;
  });

var hasType = function(type) {
  // Flatten an array to a Boolean (Or any other data type/structure).
  return dragons.reduce(function(hasType, dragon) {
    return hasType || dragon.type === type;
  }, false);
};

var hasUndead = hasType("undead");

console.log("dragons", JSON.stringify(dragons, null, 2));
console.log("dragonNames", dragonNames);
console.log("largeFireDragons", JSON.stringify(largeFireDragons, null, 2));
console.log("purpleDragonNames", JSON.stringify(purpleDragonNames, null, 2));
console.log("hasUndead", hasUndead);
