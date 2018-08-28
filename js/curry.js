const multiply = n => m => n * m;
console.log(multiply(3)(4) === 12);

const triple = m => multiply(3)(m);
console.log(triple(4) === 12);

const square = x => x * x;
const cube = x => square(square(x));

const x = cube(3);
const y = cube(4);
console.log("x", x);
console.log("y", y);
