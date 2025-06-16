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
//we can also use interfacen  but remove the = only still continue to work
type Guitarist = {
  name: string;
  age?: number; // here we can make a agen optional for a user  by just putting the ? infront of the age please
  level: number;
};

let myObj: Guitarist = {
  name: "Alain",
  level: 4,
};
console.log(myObj);

let greet = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name.toLowerCase()}`;
};
//Enums
//unlike other javascript features enums are  not type-level
//but something that is added to language and runtime as addition
//it something new forsure
enum grade {
  a,
  d,
  h,
}
console.log(grade.d);
//they are enumurated
