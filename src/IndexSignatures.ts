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
  [index: string]: string | number | undefined;
  name: string;
  gpa: number;
  class?: number;
}

const student: Student = {
  name: "Alain",
  gpa: 56,
};

console.log(student.area);
