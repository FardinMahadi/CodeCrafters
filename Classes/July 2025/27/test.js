function sum(a, b) {
  if (a > b) {
    let c = a - b;
    return c;
  } else {
    return b - a;
  }
}

// number, string, boolean, undefined, null, NaN -> Not a number
let str = "a";
// true/ false, 0/1

let x;
console.log(x);

function addition(x, y) {
  return x + y;
}

addition();

let a = 1e6;
let c = BigInt(349238);
let d = 28492342n;

const obj = {
  id: 2014,
  name: "Noman Monshi",
  cg: 4,
  isPassed: true,
};

const rolls = [1, 2, 3, 4, 5, 6];
console.log(rolls[3]);

if (rolls) {
  console.log("condition fill up");
}

let p = 2;
let q = "";
let r = p * q;
console.log(r);
