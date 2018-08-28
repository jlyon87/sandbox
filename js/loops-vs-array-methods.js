const dragons = [
  {
    name: 'Fluffykins',
    id: 1,
    color: 'Red',
    size: 'Big'
  },
  {
    name: 'Puff',
    id: 2,
    color: 'Purple',
    size: 'Medium'
  },
  {
    name: 'Randy',
    id: 3,
    color: 'Green',
    size: 'Small'
  },
  {
    name: 'Smaug',
    id: 4,
    color: 'Black',
    size: 'Big'
  },
  {
    name: 'Mushu',
    id: 5,
    color: 'Red',
    size: 'Small'
  }
];

// *** Logging ***
console.log("*** Logging ***");
console.log("Normal For Loop");
for(let i = 0; i < dragons.length; i++) {
  console.log(dragons[i]);
}

console.log("\nNative array.forEach");
dragons.forEach(dragon => console.log(dragon));

// *** Transform ***
console.log("\n*** Transform ***");
console.log("Normal For Loop");
const dragonNamesLooped = [];
for(let i = 0; i < dragons.length; i++) {
  dragonNamesLooped.push(dragons[i].name);
}
console.log("dragonNamesLooped", dragonNamesLooped);

console.log("\nNative array.map");
const dragonNames = dragons.map(dragon => dragon.name);
console.log("dragonNames", dragonNames);

console.log("\nNative array.reduce");
const reducedDragons = dragons.reduce((acc, dragon) => acc += dragon.name, "");
console.log("reducedDragons", reducedDragons);

// *** Filter ***
console.log("\n*** Filter ***");
console.log("Normal For Loop");
const bigDragonsLooped = [];
for(let i = 0; i < dragons.length; i++) {
  if(dragons[i].size === "Big") {
    bigDragonsLooped.push(dragons[i]);
  }
}
console.log("bigDragonsLooped", bigDragonsLooped);

console.log("\nNative array.filter");
const bigDragons = dragons.filter(dragon => dragon.size === "Big");
console.log("bigDragons", bigDragons);

// *** Sort ***
const compareDragons = function(a, b) {
  return a.name > b.name;
};

console.log("\n*** Sort ***");
console.log("Normal For Loop, Bubble Sort");
const bubbleSortedDragons = dragons;
let swapped;
do {
  swapped = false;
  for(let i = 0; i < bubbleSortedDragons.length - 1; i++) {
    const nextIndex = i + 1;
    if(compareDragons(bubbleSortedDragons[i], bubbleSortedDragons[nextIndex])) {
      const temp = bubbleSortedDragons[i];
      bubbleSortedDragons[i] = bubbleSortedDragons[nextIndex];
      bubbleSortedDragons[nextIndex] = temp;
      swapped = true;
    }
  }
} while(swapped);
console.log("Bubble Sort Loop", bubbleSortedDragons);

console.log("\nNative array.sort");
const dragonsByName = dragons.sort(compareDragons);
console.log("dragonsByName", dragonsByName);

// *** Find ***
console.log("\n*** Find ***");
console.log("Normal For Loop");
let foundDragonLooped;
for(let i = 0; i < dragons.length; i++) {
  if(dragons[i].id === 5) {
    foundDragonLooped = dragons[i];
    break;
  }
}
console.log("foundDragonLooped", foundDragonLooped);

console.log("\nNative array.sort");
const foundDragon = dragons.find(dragon => dragon.id === 5);
console.log("foundDragon", foundDragon);
