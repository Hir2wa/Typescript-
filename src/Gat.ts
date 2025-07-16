//Solve all the typing issues in the code without changing the implementation.

// const setRange = (range: object): object => {
//   const x:  =   range[0];
//   const y = range[1];

//   return { x, y: y.age > 10 };
// };

// setRange([true, { name: "Patrick", age: 3 }]);
// console.log();
const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  const oneArray = [...arr1, ...arr2];

  return oneArray.reduce((prev: number, curr: number) => prev + curr);
};
console.log(arrayPlusArray([9, 6, 7, 8], [9]));
