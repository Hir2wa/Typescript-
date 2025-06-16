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
