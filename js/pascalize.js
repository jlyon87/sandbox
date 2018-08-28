const pascalize = val => {
  const whitespace = /\s/;
  const hyphen = /[-]/;

  return val
    .split(whitespace).map(v => {
      return capitalizeFirstLetter(v);
    }).join(" ")
    .split(hyphen).map(v => {
      return capitalizeFirstLetter(v);
    }).join("-");
};

const capitalizeFirstLetter = val => {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

const race = 'yuan-ti pureblood';

const pRace = pascalizeWord(race);

console.log(race, pRace);

const data = [
  {
    name: "cities",
    items: [
      { name: "itemName" }
    ]
  },
  {
    name: "addresses",
    items: [
      { name: "itemName" }
    ]
  },
  {
    name: "history",
    items: [
      { name: "itemName" }
    ]
  }
]
