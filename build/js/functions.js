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
