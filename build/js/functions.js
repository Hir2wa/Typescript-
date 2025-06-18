"use strict";
//Literal types
//help to keep your codes dry  "don't repeat yourself"
let myName;
myName = "Alain";
console.log(myName);
//just here to keep like the constant
//function with return type of void
const returnName = (name) => {
    console.log(name);
};
returnName("Alain");
let multi = (a, b) => {
    return a * b;
};
console.log(multi(4, 5));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//something that could not work default value  won't work when we are working with alias types and interface   method
const total = (num, ...nums) => {
    return (num +
        nums.reduce((prev, current) => {
            return prev + current;
        }));
};
console.log(total(1, 2, 4, 5, 5, 6));
//no need to include the starting point it is optional
//the never type
const createError = (erroMsg) => {
    throw new Error(erroMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        // if(i>100) break
    }
};
const numberOrString = (value) => {
    if (typeof value === "number")
        return "string";
    if (isNumber(value))
        return "number ";
    throw new Error("Unreachable ");
};
// typscrip needs safty even if you are sure you gone return number or string but needs a safety for  when a error ocurs
//these never happens on the unreachable code  infinite loops and errros thrown
//pro tips
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
function showStatus(status) {
    console.log("Status is:", status);
}
showStatus("success");
//showStatus("fail");    // ❌ Error!
