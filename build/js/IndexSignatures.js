"use strict";
//IndexSignature is ts as a topic
// there are used in the case you are creating and you don't
//  know actually the number of   keys or properties a user will input
//when creating object but you don't know exactly names of keys
//in short you don't know the shape of an object
const transaction = {
    pizza: 80,
    book: 50,
    job: 60,
};
const obje1 = "pizza";
//accesssing dynmaical tutorial am seiing they are saying it doesn't work actually
//error saying endex signature  or the tutorial am watching i outdated
console.log(transaction[obje1]);
console.log(transaction.job);
let index = (transactions) => {
    let index = 0;
    for (const key in transaction) {
        index += transactions[key];
    }
    return index;
};
console.log(index(transaction));
const student = {
    name: "Alain",
    gpa: 56,
    class: 3000,
};
//console.log(student.area);
//one of the way we canm use in type of assection
for (const key in student) {
    console.log(`${key} = ${student[key]}`);
}
//these keyaskey  student create a union type of  the  types we have in that obj
//  so stat i won't raise an error in time wee are iterating
//here we were referencing  the   interface
const access = (student, key) => {
    console.log(`${key}  : ${student[key]}`);
};
console.log(access(student, "class"));
//why these record for please
const work = {
    income: 45,
    bonus: 57,
    sidehustles: 68,
};
//what if we neeed to  loop then
for (const key in work) {
    console.log(`${key} : ${work[key]}`);
}
//we use these keyof to a structure we have just defined or utility
//which i find is the easy one
class Counter {
    increment() {
        Counter.count++;
    }
    static getCount() {
        return this.count;
    }
}
Counter.count = 0;
let count1 = new Counter();
console.log(count1.increment());
console.log(Counter.getCount());
//Write a generic function identity that returns
// the value it receives without changing the type.
const ger = (args) => args;
// Write a TypeScript function processValue that takes string
//  | number | boolean | null | undefined, uses type guards to log
// uppercase strings, numbers fixed to two decimals, and boolean as
//  "True"/"False,” and throws an error for null
// or undefined, including a type assertion to narrow the type.
function processValue(value) {
    if (typeof value == null || typeof value == undefined) {
        throw new Error("Hey there is an issue");
    }
    if (typeof value == "string") {
        console.log(value.toUpperCase());
    }
    if (typeof value == "number") {
        console.log(value.toFixed(2));
    }
    if (typeof value == "boolean") {
        console.log(value ? true : false);
    }
}
processValue(6);
//  Why Use Decorators?
// Logging (like @LogCall)
// Validation (e.g. @Required)
// Access control (e.g. @AdminOnly)
// Dependency Injection
// Auto-binding (this context fix)
//LogCall  on method created inside a class
// Log    appera when the  class is created
