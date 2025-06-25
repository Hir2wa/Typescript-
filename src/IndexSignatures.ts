//IndexSignature is ts as a topic
// there are used in the case you are creating and you don't
//  know actually the number of   keys or properties a user will input
//when creating object but you don't know exactly names of keys
//in short you don't know the shape of an object

//typescript asks for index  signature when you try to access the property of
// object when trying to access the values of object

// interface obj {
//   pizza: number;
//   book: number;
//   job: number;
// }
interface obj {
  readonly [index: string]: number;
}

const transaction: obj = {
  pizza: 80,
  book: 50,
  job: 60,
};

const obje1 = "pizza";
//accesssing dynmaical tutorial am seiing they are saying it doesn't work actually
//error saying endex signature  or the tutorial am watching i outdated
console.log(transaction[obje1]);
console.log(transaction.job);

let index = (transactions: obj): number => {
  let index: number = 0;
  for (const key in transaction) {
    index += transactions[key];
  }
  return index;
};

console.log(index(transaction));
//transaction.pizza = 90
//here the transaction only permits reading

interface Student {
  //[index: string]: string | number | undefined;
  name: string;
  gpa: number;
  class?: number;
}

const student: Student = {
  name: "Alain",
  gpa: 56,
  class: 3000,
};

//console.log(student.area);
//one of the way we canm use in type of assection
for (const key in student) {
  console.log(`${key} = ${student[key as keyof Student]}`);
}

//these keyaskey  student create a union type of  the  types we have in that obj
//  so stat i won't raise an error in time wee are iterating
//here we were referencing  the   interface

const access = (student: Student, key: keyof Student): void => {
  console.log(`${key}  : ${student[key]}`);
};
console.log(access(student, "class"));

// interface income {
//   [index: string]: number;
// }
//the  index must be a type of number  but can't be a type of literal strings

type streams = "income" | "bonus" | "sidehustles";
type Income = Record<streams, string | number>;
//why these record for please

const work: Income = {
  income: 45,
  bonus: 57,
  sidehustles: 68,
};

//what if we neeed to  loop then
for (const key in work) {
  console.log(`${key} : ${work[key as keyof Income]}`);
}
//we use these keyof to a structure we have just defined or utility
//which i find is the easy one

class Counter {
  static count = 0;

  increment() {
    Counter.count++;
  }

  static getCount() {
    return this.count;
  }
}

let count1 = new Counter();
console.log(count1.increment());

console.log(Counter.getCount());
