//type casting is a way of overriding the type of a variable  such as when incorrect  variable is provided by a library
//in short casting is a way of overriding a variable

let sureName: unknown = "Alain";
console.log(typeof sureName);

console.log((<string>sureName).length);
console.log(typeof sureName);
//from now these sureNane is a string nolonger unkown
//in dom we use html convas element as a type casting of it

type one = string;
type two = string | number;
let p: one = "Alain";
let r = <number | one>"Alain";
console.log(r);
//type alias is like creating you own type  and be reused
//using the unknown in types casting in double  that where is separate to any type
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

console.log(addOrConcat(4, 5, "add"));

let add: number = addOrConcat(3, 5, "add") as number;
console.log(add);
//

//DOM
const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("#img") as HTMLImageElement;
img.src;
