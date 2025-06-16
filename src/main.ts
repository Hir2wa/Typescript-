let username = "Alain";
let a = 4;
let b = 5;
let c = "a";
console.log(username);

const sum = (a: number, b: number) => {
  return a + b;
};

//Array
let stringArray = ["a", "b", "c"];
let guitars = ["stract", "les Paul", 912];
let mixedArray = ["a", 5, true];

// mixedArray = stringArray
// stringArray = mixedArray    why these happens

let arr = [];
let brands: string[] = [];

//tupls is an array the  have fixed size and  precious datatypes it must take
//and you must follow the order
let mytuples: [number, string, boolean] = [5, "Alain", true];
let arrr = [5, "Hirwa", true];
arrr = mytuples;
//mytuples = arrr   // typescript will know that it might be possible for  js to be more than   and few than  what the tuples except

// Objects
