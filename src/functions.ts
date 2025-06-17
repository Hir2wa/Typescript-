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

const total = (num: number, ...nums: number[]) => {
  return (
    num +
    nums.reduce((prev, current) => {
      return prev + current;
    })
  );
};
console.log(total(1, 2, 4, 5, 5, 6));
//no need to include the starting point it is optional

//the never type
const createError = (erroMsg: string): never => {
  throw new Error(erroMsg);
};

const infinite = (): void => {
  let i: number = 1;
  while (true) {
    i++;
    // if(i>100) break
  }
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "number") return "string";
  if (isNumber(value)) return "number ";
  throw new Error("Unreachable ");
};
// typscrip needs safty even if you are sure you gone return number or string but needs a safety for  when a error ocurs
//these never happens on the unreachable code  infinite loops and errros thrown

//pro tips
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
//worked on introduction to type assertion

//types alias
type Status = "success" | "error" | "loading";

function showStatus(status: Status): void {
  console.log("Status is:", status);
}

showStatus("success");
//showStatus("fail");    // ❌ Error!
