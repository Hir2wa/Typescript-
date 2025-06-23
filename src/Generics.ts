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
