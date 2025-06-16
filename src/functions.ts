//types alias
type numberOrString = number | string;

interface GuitaristInterface {
  name: string;
  age?: number; // here we can make a agen optional for a user  by just putting the ? infront of the age please
  level: numberOrString;
}

//Literal types
//help to keep your codes dry  "don't repeat yourself"
let myName: "Alain";
myName = "Alain";
console.log(myName);
//just here to keep like the constant

//function with return type of void
const returnName = (name: string): void => {
  console.log(name);
};
returnName("Alain");
// type multiplyFunction = (a: number, b: number) => number;
interface multiplyFunction {
  (a: number, b: number): number;
}
let multi: multiplyFunction = (a: number, b: number): number => {
  return a * b;
};
console.log(multi(4, 5));

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
//something that could not work default value  won't work when we are working with alias types and interface   method
