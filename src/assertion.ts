//type casting is a way of overriding the type of a variable  such as when incorrect  variable is provided by a library
//in short casting is a way of overriding a variable

let sureName: unknown = "Alain";
console.log(typeof sureName);

console.log((<string>sureName).length);
console.log(typeof sureName);
//from now these sureNane is a string nolonger unkown
//in dom we use html convas element as a type casting of it
