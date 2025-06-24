//starting  with  Generics in typscript  in typsript
// type gen = (args: string) => string;
// let test = <T>(args: T): boolean => {
//   return typeof args === "object" && !Array.isArray(args) && args !== null;
// };

// console.log(test(1));
// console.log(test({ name: "" }));
//what are mapped types

const gen = <T>(args: T): boolean => {
  return typeof args === "object" && !Array.isArray(args) && args !== null;
};
console.log(gen("hello world"));
// typescript its goal is to generate strict types general developer type experience
// the sometime doesn't work in Generic where we have option to work on the different types

// checking on the object
// const isobj = <T>(args: T): { args: T; is: boolean } => {
//   return typeof args === "object" && Object.keys(args as typeof T).length;
// };
