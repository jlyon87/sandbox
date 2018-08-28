const myArray = [
  { label: 'dog', id: 1 },
  { label: 'cat', id: 2 }
  { label: 'fish', id: 3 }
  { label: 'bird', id: 4 }
];

const myObject = {
  name: 'fluffykins',
  type: 'dog',
  size: 'small'
};

myArray.forEach(index => {
  console.log(index.label)
}) // => dog, cat, fish, bird

for(const prop in myObject) {
  console.log(prop + ':', myObject[prop])
} // => name: fluffykins, type: dog, size: small
